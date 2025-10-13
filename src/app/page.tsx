import Image from "next/image";
import { ModeToggle } from "@/components/ui/darkmode";
import { Button } from "@/components/ui/button";
import Popup from "@/components/Popup";
import PanoramicCarousel from "@/components/PanoramicView";


const logo = {
  src: '/Images/logo.png',
  alt: ' Logo ',
  width: 200,
  height: 200,
  quality: 100,
}

const carouselImages = [
  { src: "/Images/restview1.jpg", alt: "Restaurant view 1" },
  { src: "/Images/restview2.jpg", alt: "Restaurant view 2" },
  { src: "/Images/restview3.jpg", alt: "Restaurant view 3" },
  { src: "/Images/getstarted.jpg", alt: "Restaurant view 4" }
];

export default function Home() {
  return (
    <div className="p-4 flex-1 bg-gray-100 h-full">
      <div className="flex justify-end pr-8">
        <ModeToggle />
        <Button variant={'default'} className="text-xl font-bold cursor-pointer p-6 rounded-2xl">
          Join Watlist
        </Button>
      </div>
      <div className="flex justify-center">
        <Image
          src={logo.src}
          alt="logo.alt"
          width={logo.width}
          height={logo.height}
          quality={logo.quality}
        />
      </div>

      <div className="flex items-center flex-col ">
        <h1 className="text-4xl font-bold">
          Get Early Access
        </h1>
        <p className="text-2xl font-semibold pt-4">
          Be the First to Experience What is Next.
        </p>
        <p className="text-lg pt-4 text-center ">
          The Watilist is more than just a queue it is the inner circle of our community.
        </p>
        <p className="text-lg pt-4 text-center ">
          Join us to be part of the final development stage.
        </p>
        <div className="pt-4">
          <Popup />
        </div>
      </div>
      <PanoramicCarousel images={carouselImages} />
    </div>
  );
}
