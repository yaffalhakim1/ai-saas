import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72 flex items-center justify-center">
        <Image
          className="object-contain"
          src="/empty.png"
          alt={"empty sttate"}
          width={200}
          height={200}
        />
      </div>

      <p className="text-muted-foreground text-sm font-semibold">{label}</p>
    </div>
  );
};
