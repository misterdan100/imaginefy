import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import {Header} from "@/components/shared/Header";
import {TransformedImage} from "@/components/shared/TransformedImage";
import { Button } from "@/components/ui/button";
import { getImageById } from "@/lib/actions/image.actions";
import { getImageSize } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { DeleteConfirmation } from "@/components/shared/DeleteTransformation";
// import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation";

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

  const image = await getImageById(id);

  return (
    <>
      <Header title={image.title} />

      <section className="flex flex-wrap gap-4 mt-5">
        <div className="flex gap-2 p-14-medium md:p-16-medium">
          <p className="text-gray-600">Transformation:</p>
          <p className="text-gray-500 capitalize">
            {image.transformationType}
          </p>
        </div>

        {image.prompt && (
          <>
            <p className="hidden md:block text-dark-400/50">&#x25CF;</p>
            <div className="flex gap-2 p-14-medium md:p-16-medium">
              <p className="text-gray-600">Prompt:</p>
              <p className="text-gray-500 capitalize">{image.prompt}</p>
            </div>
          </>
        )}

        {image.color && (
          <>
            <p className="hidden md:block text-dark-400/50">&#x25CF;</p>
            <div className="flex gap-2 p-14-medium md:p-16-medium">
              <p className="text-gray-600">Color:</p>
              <p className="text-gray-500 capitalize">{image.color}</p>
            </div>
          </>
        )}

        {image.aspectRatio && (
          <>
            <p className="hidden md:block text-dark-400/50">&#x25CF;</p>
            <div className="flex gap-2 p-14-medium md:p-16-medium">
              <p className="text-gray-600">Aspect Ratio:</p>
              <p className="text-gray-500 capitalize">{image.aspectRatio}</p>
            </div>
          </>
        )}
      </section>

      <section className="mt-10 border-dark-400/15 border-t">
        <div className="transformation-grid">
          {/* MEDIA UPLOADER */}
          <div className="flex flex-col gap-4">
            <h3 className="gradient-title h3-bold">Original</h3>

            <Image
              width={getImageSize(image.transformationType, image, "width")}
              height={getImageSize(image.transformationType, image, "height")}
              src={image.secureURL}
              alt="image"
              className="transformation-original_image"
            />
          </div>

          {/* TRANSFORMED IMAGE */}
          <TransformedImage
            image={image}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            transformationConfig={image.config}
            hasDownload={true}
          />
        </div>

        {userId === image.author.clerkId && (
          <div className="space-y-4 mt-4">
            <Button asChild type="button" className="capitalize submit-button">
              <Link href={`/transformations/${image._id}/update`}>
                Update Image
              </Link>
            </Button>

            <DeleteConfirmation imageId={image._id} />
          </div>
        )}
      </section>
    </>
  );
};

export default ImageDetails;