import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // organization: "org-TQ2Xan6qfty7DykiCLfJRBKZ",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("unauthorized", {
        status: 401,
      });
    }

    if (!configuration.apiKey) {
      return new NextResponse("open ]ai key not configured", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("messages not provided", {
        status: 400,
      });
    }
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[Code Error]", error);
    return new NextResponse("internal error", {
      status: 500,
    });
  }
}
