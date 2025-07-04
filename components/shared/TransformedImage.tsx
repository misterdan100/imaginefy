'use client'

import { dataUrl, debounce, download, getImageSize } from "@/lib/utils"
import { TransformedImageProps } from "@/types"
import { CldImage, getCldImageUrl } from "next-cloudinary"
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export const TransformedImage = ({
    image,
    type,
    title,
    isTransforming,
    setIsTransforming,
    transformationConfig,
    hasDownload = false
}: TransformedImageProps) => {
  
  
    const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        download(getCldImageUrl({
            width: image?.width,
            height: image?.height,
            src: image?.publicId,
            ...transformationConfig
        }), title)
    }
  
  return (
    <div className="flex flex-col gap-4">
        <div className="flex-between">
            <h3 className="w-fit gradient-title h3-bold">
                Transform
            </h3>

            {hasDownload && (
                <button 
                    className="group relative bg-gradient-to-br from-orange-100 to-[#e0ddff] px-6 py-1 border hover:border-gray-300 border-transparent rounded-xl transition-colors download-btn"
                    onClick={(e) => downloadHandler(e)}
                >
                    Download Image
                    <Image 
                        src='/assets/icons/download.svg'
                        alt="Download"
                        width={24}
                        height={24}
                        className="pb-[6px]"
                    />
                
                </button>
            )}

        </div>

        {image?.publicId && transformationConfig ? (
            <div className="relative">
                <CldImage 
                    width={getImageSize(type, image, 'width')}
                    height={getImageSize(type, image, 'height')}
                    src={image?.publicId}
                    alt={image?.title}
                    sizes={'(max-width: 767px) 100vw, 50vw'}
                    placeholder={dataUrl as PlaceholderValue}
                    className="transformed-image"
                    onLoad={() => { 
                        setIsTransforming && setIsTransforming(false)
                    }}
                    onError={() => {
                        debounce(() => {
                            setIsTransforming && setIsTransforming(false)
                        }, 8000)()
                    }}
                    {...transformationConfig}
                />

                {isTransforming && (
                    <div className="transforming-loader">
                        <Image 
                            src='/assets/icons/spinner.svg'
                            width={50}
                            height={50}
                            alt="spinner"
                        />
                        <p className="text-white/80">Please wait...</p>
                    </div>
                )}
            </div>
        ) : (
            <div className="transformed-placeholder">

            </div>
        )}
      
    </div>
  )
}