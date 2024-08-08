import React from "react";
import img1 from '../../Image/training card.png';
import img2 from '../../Image/consultancy card.png';
import img3 from '../../Image/internships card.png';
import img4 from '../../Image/master class card.png';

const services = [
  {
    title: "Trainings",
    text1: "devops1",
    text2: "devops2",
    text3: "devops3",
    text4: "devops4",
    image: img1, // Corrected image assignment
  },
  {
    title: "Consultancy",
    text1: "devops5",
    text2: "devops6",
    text3: "devops7",
    text4: "devops8",
    image: img2,
  },
  {
    title: "Internship",
    text1: "devops9",
    text2: "devops10",
    text3: "devops11",
    text4: "devops12",
    image: img3,
  },
  {
    title: "Master Class",
    text1: "devops13",
    text2: "devops14",
    text3: "devops15",
    text4: "devops16",
    image: img4,
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient font-bold text-black dark:text-white">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative group rounded-lg overflow-hidden"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full  object-cover p-"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold mb-2">
              {service.title}
            </span>
            <span className="text-white text-lg">{service.text1}</span>
            <span className="text-white text-lg">{service.text2}</span>
            <span className="text-white text-lg">{service.text3}</span>
            <span className="text-white text-lg">{service.text4}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
