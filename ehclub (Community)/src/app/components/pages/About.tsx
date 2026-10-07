import image_a61cbaf65d37f7a2cd07a99f20271f53af9c8b2f from 'figma:asset/a61cbaf65d37f7a2cd07a99f20271f53af9c8b2f.png'
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Eye, Target, Calendar, Users, Award } from "lucide-react";

export function About() {
  const stats = [
    { icon: Calendar, label: "Events Conducted", value: "5" },
    { icon: Users, label: "Active Members", value: "100+" },
    { icon: Award, label: "Years Active", value: "1" },
  ];

  const inauguralImages = [
    "https://i.ibb.co/BKT4cjLW/chief-guest.jpg",
    "https://i.ibb.co/5xktS85c/untitled-159-jpg.jpg",
    
    "https://i.ibb.co/ccNPX9zg/untitled-164-jpg.jpg",
    "https://i.ibb.co/FLT7Xw0M/untitled-288-jpg.jpg",
  ];

  return (
    <div className="bg-white">
      {/* Vision and Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To build a collaborative student community that designs practical, efficient, and scalable electronics and embedded systems. 
              driving innovation in areas like IoT, automation, and assistive technology to solve real-world problems.

            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To train students in circuit design, embedded systems, IoT, and hardware-software integration through hands-on learning.
              To build innovative hardware solutions for automation, assistive tech, and smart systems with real-world impact.
              To foster teamwork, rapid prototyping, and industry readiness through collaborative projects and technical challenges.

            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inauguration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          Inauguration Ceremony
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          The inauguration of our club in 2025 was a proud and exciting moment for all of us. Instead of a traditional launch, we came together as a team to design and build our own hardware, making the event truly special and meaningful. This experience marked the beginning of our journey as a club driven by curiosity, creativity, and a shared passion for building real-world solutions.
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {inauguralImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <ImageWithFallback
                src={image}
                alt={`Inauguration ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
