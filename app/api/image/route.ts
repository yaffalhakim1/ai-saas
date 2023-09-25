import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-TQ2Xan6qfty7DykiCLfJRBKZ",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("unauthorized", {
        status: 401,
      });
    }

    if (!configuration.apiKey) {
      return new NextResponse("open ai key not configured", {
        status: 500,
      });
    }

    if (!prompt) {
      return new NextResponse("prompt not provided", {
        status: 400,
      });
    }
    if (!amount) {
      return new NextResponse("amount not provided", {
        status: 400,
      });
    }
    if (!resolution) {
      return new NextResponse("resolution not provided", {
        status: 400,
      });
    }
    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("free trial has expired", {
        status: 403,
      });
    }
    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    await increaseApiLimit();

    return NextResponse.json(response.data.data);

    // await increaseApiLimit();
  } catch (error) {
    console.log("[Image Error]", error);
    return new NextResponse("internal error", {
      status: 500,
    });
  }
}
