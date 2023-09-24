import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  iconBgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", iconBgColor)}>
          <Icon className={cn(iconColor, "w-6 h-6")} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>

          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </>
  );
};
