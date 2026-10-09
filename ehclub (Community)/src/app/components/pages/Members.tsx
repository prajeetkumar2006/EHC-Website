import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Users, Award } from "lucide-react";

interface Member {
  name: string;
  designation: string;
  image: string;
  dept_year: string;
}

export function Members() {

  const faculty: Member[] = [
        {
      name: "Dr. K. Hariharan",
      designation: "Professor and Dean (Industry Institute Interaction)",
      image: "https://i.ibb.co/1fC5BcG3/khhece.jpg",
          dept_year: "Department of ECE"
    },
    {
      name: "Dr. M. Senthilarasi",
      designation: "Assistant Professor",
      image: "https://i.ibb.co/S74XFxGr/Screenshot-2026-03-03-005830.png",
      dept_year: "Department of ECE"
    },
  ];
  
  const leadership: Member[] = [
    {
      name: "Hirthik Bala U",
      designation: "President",
      image: "https://i.ibb.co/HLX7Fb3B/Whats-App-Image-2026-03-02-at-7-35-50-PM-6.jpg",
      dept_year: "ECE - 4th year"
    },
    {
      name: "Visves T R",
      designation: "Vice President",
      image: "https://i.ibb.co/yB6rfqX6/Whats-App-Image-2026-03-02-at-7-35-50-PM-9.jpg",
      dept_year: "ECE - 4th year"
    },
    {
      name: "Shivani B",
      designation: "General Secretary",
      //image: "https://i.ibb.co/7djxQXKh/Whats-App-Image-2026-03-02-at-7-35-50-PM-2.jpg",
      image: "https://i.postimg.cc/3xb4fjj0/Whats-App-Image-2026-10-09-at-2-38-45-PM.jpg",
      dept_year: "ECE - 4th year"
    },
    {
      name: "Dheepika R",
      designation: "Executive Coordinator",
      image: "https://i.ibb.co/GvtL7XLn/Whats-App-Image-2026-03-02-at-7-35-49-PM.jpg",
      dept_year: "ECE - 4th year"
    },
    {
      name: "Vetrivelan B R",
      designation: "Executive Coordinator",
      image: "https://i.ibb.co/Q3wY6VBx/Whats-App-Image-2026-03-02-at-7-35-50-PM-7.jpg",
      dept_year: "ECE - 4th year"
    }   
  ];

  const officeBearers: Member[] = [
    
    {
      name: "Rathika V",
      designation: "Organising Team",
      image: "https://i.ibb.co/Tqpjq4f3/EH-Club-PPT-26-27-1.png",
      dept_year: "EEE - 3rd year"
    },
    
    {
      name: "Rohith R",
      designation: "Organising Team",
      image: "https://i.ibb.co/b508g2xS/EH-Club-PPT-26-27.png",
      dept_year: "ECE - 3rd year"
    },
  
    {
      name: "Sundharamahalingam N",
      designation: "Organising Team",
      image: "https://i.ibb.co/m5CzbVMr/EH-Club-PPT-26-27-2.png",
      dept_year: "MECT - 3rd year"
    },
      
    
    {
      name: "Devadharshini L",
      designation: "Documentation Team",
      image: "https://i.ibb.co/vvQpF7HX/EH-Club-PPT-26-27-8.png",
      dept_year: "MECT - 3rd year"
    },
    
    {
      name: "Nithvika Shri D",
      designation: "Documentation Team",
      image: "https://i.ibb.co/2376CLXL/EH-Club-PPT-26-27-7.png",
      dept_year: "ECE - 3rd year"
    },
    {
      name: "Ramya Priyadharshini. M",
      designation: "Documentation Team",
      image: "https://i.ibb.co/1YyWjS4g/EH-Club-PPT-26-27-6.png",
      dept_year: "ECE - 3rd year"
    },

    
    {
      name: "Dhanashree M",
      designation: "Design Team",
      image: "https://i.ibb.co/7tWH8yP4/EH-Club-PPT-26-27-12.png",
      dept_year: "ECE - 3rd year"
    },
      {
    
      name: "Henthika P",
      designation: "Design Team",
      image: "https://i.ibb.co/fY3yLDGf/EH-Club-PPT-26-27-13.png",
      dept_year: "ECE - 3rd year"
    },
    {
      name: "Ponmangai A",
      designation: "Design Team",
      image: "https://i.ibb.co/ksyfzwtY/EH-Club-PPT-26-27-14.png",
      dept_year: "ECE - 3rd year" 
    },

        {
      name: "Bala Priya Dharshini P",
      designation: "Social Engagement Team",
      image: "https://i.ibb.co/WpgBHqh9/EH-Club-PPT-26-27-23.png",
      dept_year: "ECE - 3rd year"
    },
      {
      
      name: "Bhuvishaa Sri M A",
      designation: "Social Engagement Team",
      image: "https://i.ibb.co/8D2Rb79j/EH-Club-PPT-26-27-22.png",
      dept_year: "EEE - 3rd year"
    },
    {
      name: "Tejashwar S A",
      designation: "Social Engagement Team",
      image: "https://i.ibb.co/bR3gLthd/EH-Club-PPT-26-27-21.png",
      dept_year: "MECT - 3rd year"
    },

    
  ];

    const HeadMembers: Member[] = [
      {
      name: "Dharanisri V",
      designation: "Organising Team",
      image: "https://i.ibb.co/ycd657Vr/EH-Club-PPT-26-27-5.png",
      dept_year: "EEE - 2rd year"
    },
      {
        name: "Gowtham I",
      designation: "Organising Team",
      image: "https://i.ibb.co/1f8jBYWr/EH-Club-PPT-26-27-3.png",
      dept_year: "ECE - 2rd year"   
    },
    {
      name: "Suriya A",
      designation: "Organising Team",
      image: "https://i.ibb.co/R4B5ppzk/EH-Club-PPT-26-27-4.png",
      dept_year: "ECE - 2rd year"
    },
      
    {
     
      name: "Mithilesh K M",
      designation: "Documentation Team",
      image: "https://i.ibb.co/Y4SyG6FJ/EH-Club-PPT-26-27-9.png",
      dept_year: "ECE - 2rd year"
    },
    
    {
      name: "Rakshitha S",
      designation: "Documentation Team",
      image: "https://i.ibb.co/rKdH1P9Z/EH-Club-PPT-26-27-10.png",
      dept_year: "ECE - 2rd year"
    },
        {
       name: "Sree Deshna A",
      designation: "Documentation Team",
      image: "https://i.ibb.co/MxxBZzjS/EH-Club-PPT-26-27-11.png",
      dept_year: "ECE - 2rd year"
    },
      
    {
      name: "Abinaya S",
      designation: "Design Team",
      image: "https://i.ibb.co/bMg9Mzg2/EH-Club-PPT-26-27-17.png",
      dept_year: "ECE - 2rd year"
    },
    
    {
      name: "Aswin S",
      designation: "Design Team",
      image: "https://i.ibb.co/pBLBKgHn/EH-Club-PPT-26-27-16.png",
      dept_year: "ECE - 2rd year"
    },
    {
      name: "Mrithika R",
      designation: "Design Team",
      image: "https://i.ibb.co/qS0BPWg/EH-Club-PPT-26-27-15.png",
      dept_year: "ECE - 2rd year"
    },

    {
      name: "Shambath S V",
      designation: "Social Engagement Team",
      image: "https://i.ibb.co/prG0qgDC/EH-Club-PPT-26-27-19.png",
      dept_year: "EEE - 2rd year"
    },
    {
      name: "Shanmugapriya",
      designation: "Social Engagement Team",
      image: "https://i.ibb.co/pBxN3X5Y/EH-Club-PPT-26-27-20.png",
      dept_year: "EEE - 2rd year"
    },
    {
      name: "Srinithi M",
      designation: "Social Engagement Team",
      image: "https://i.ibb.co/272nR21L/EH-Club-PPT-26-27-18.png",
      dept_year: "ECE - 2rd year"
    }

    ];


  const totalOfficeBearers = officeBearers.length;
  const totalMembers = 100+;

  return (
    <div className="bg-white min-h-screen">
      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{totalOfficeBearers}</div>
              <div className="text-gray-600">Office Bearers</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{totalMembers}</div>
              <div className="text-gray-600">Total Members</div>
            </div>
          </div>
        </div>
      </section>

            {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="bg-white border-2 border-blue-200 rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-blue-100"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
  {member.dept_year}
</p>
              <p className="text-lg text-blue-600 font-medium">{member.designation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {leadership.map((member, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-blue-200 rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow ${
              index === leadership.length - 1 ? "md:col-span-2 md:w-1/2 md:justify-self-center" : ""
}`}            >
              <div className="mb-4">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-blue-100"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
  {member.dept_year}
</p>
              <p className="text-lg text-blue-600 font-medium">{member.designation}</p>
              
            </div>
          ))}
        </div>
      </section>

      {/* Office Bearers Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Team Heads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeBearers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-gray-200"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
  {member.dept_year}
</p>
                <p className="text-gray-600">
  {member.designation}
</p>


              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Heads Section */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Team Members</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {HeadMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="mb-4">
            <ImageWithFallback
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-gray-200"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
  {member.dept_year}
</p>

          <p className="text-gray-600">
  {member.designation}
</p>


        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}
