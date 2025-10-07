'use client'
import React from "react"

interface PanoramicCarouselProps {
    images: { src: string; alt?: string }[]
}

export default function PanoramicCarousel({ images }: PanoramicCarouselProps) {
    return (
        <div className="relative w-full h-[750px] flex flex-col justify-center overflow-hidden">
            {/* Strip */}
            <div className="flex animate-[scroll_40s_linear_infinite] w-fit">
                {images.concat(images).map((img, index) => (
                    <div
                        key={index}
                        className="h-[800px] w-[450px] min-w-[450px] mr-2 bg-cover bg-center transform-gpu transition-transform duration-300 hover:scale-105 rounded-xl shadow-lg"
                        style={{ backgroundImage: `url(${img.src})` }}
                        aria-label={img.alt}
                    />
                ))}
            </div>

            {/* Top oval overlay */}
            <div className="flex absolute -top-[17rem] left-1/2 -translate-x-1/2 justify-center items-center pointer-events-none">
                <div className="bg-gray-100 w-[120vw] h-[50vh] rounded-b-[100%]" />
            </div>

            {/* Bottom oval overlay */}
            <div className="flex absolute -bottom-[17rem] left-1/2 -translate-x-1/2 justify-center items-center pointer-events-none">
                <div className="bg-gray-100 w-[120vw] h-[50vh] rounded-t-[100%]" />
            </div>
        </div>
    )
}
