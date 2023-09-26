"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO",
    avatar: "a",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    title: "CEO",
    avatar: "a",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    title: "CEO",
    avatar: "a",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    title: "CEO",
    avatar: "a",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    title: "CEO",
    avatar: "a",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className="bg-[#192339] birder-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2 ">
                <div>
                  <p className="text-lg ">{testimonial.name}</p>
                  <p className="text-sm text-zinc-400  ">{testimonial.title}</p>
                </div>
              </CardTitle>
              <CardContent>
                <p className="text-sm text-white">{testimonial.description}</p>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
