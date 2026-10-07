import { ImageWithFallback } from "../figma/ImageWithFallback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import visionImage from "figma:asset/ee2a05eb64c947f5629b0e9ac1af79d470f77ba8.png";
import objectivesImage from "figma:asset/e76f56496a38eb6bed99dd2a53603d254f74b97d.png";

// Custom arrow components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const carouselImages = [
    {
      src: "https://i.ibb.co/43nvVRz/untitled-15.jpg",
      alt: "Club Vision"
    },
    {
      src: "https://i.ibb.co/hxkTmFGt/untitled-163.jpg",
      alt: "Club Objectives"
    },
    {
      src: "https://i.ibb.co/hvX6vzj/Whats-App-Image-2026-03-02-at-11-58-49-PM.jpg",
      alt: "Electronics Circuit Board"
    },
    {
      src: "https://i.ibb.co/R4MFyd5K/Whats-App-Image-2026-03-03-at-12-00-05-AM.jpg",
      alt: "Robotics and Automation"
    },
    {
      src: "https://i.ibb.co/4wcn6SDB/Screenshot-2026-03-03-002704.png",
      alt: "IoT and Embedded Systems"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">ELECTRONICS HARDWARE CLUB</h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Empowering students through innovation, technology, and collaborative learning
          </p>
        </div>
        
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl relative">
          <Slider {...sliderSettings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="outline-none">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}