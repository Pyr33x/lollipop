import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui";
import { getImages } from "~/server/queries/getImage";
import Image from "next/image";

export async function Images() {
  const images = await getImages({ searchParams: { asc: "id" } });
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((image) => (
        <TooltipProvider key={image.id}>
          <Tooltip>
            <TooltipTrigger>
              <Image
                src={image.url ?? ""}
                alt={image.name ?? ""}
                width={200}
                height={200}
                className="select-none transition ease-in-out duration-200 hover:scale-105 active:scale-95 rounded-sm w-[200px] h-[200px]"
                priority
              />
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-row gap-x-2">
                <Image
                  src={image.userImage ?? ""}
                  alt={image.userName ?? ""}
                  width={20}
                  height={20}
                  className="rounded-full"
                  priority
                />
                <span>Uploaded by {image.userName}</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
