import { FaStethoscope, FaFlask, FaSyringe, FaChild, FaBaby, FaFemale, FaHeartbeat, FaMale, FaHandsHelping, FaUsers, FaWheelchair } from 'react-icons/fa';

import React from "react";

const services = [
  {
    icon: <FaStethoscope />,
    title: 'General Medicine',
    image: '/General-Medicine.png',
    description: 'Comprehensive medical care for all ages, focusing on diagnosis and treatment of various health conditions.'
  },
  {
    icon: <FaFlask />,
    title: 'Laboratory Services',
    image: '/lab.png',
    description: 'State-of-the-art diagnostic tests and screenings to ensure accurate results for better treatment.'
  },
  {
    icon: <FaSyringe />,
    title: 'Minor Surgery',
    image: '/minorsurgery.png',
    description: 'Safe and effective minor surgical procedures performed by skilled professionals.'
  },
  {
    icon: <FaChild />,
    title: 'Pediatric Medicine',
    image: '/PediatricMedicine.jpg',
    description: 'Specialized care for children, ensuring their health and well-being at every stage of growth.'
  },
  {
    icon: <FaBaby />,
    title: 'Antenatal Care',
    image: '/images.jpeg',
    description: 'Comprehensive care for expectant mothers to ensure a healthy pregnancy and delivery.'
  },
  {
    icon: <FaBaby />,
    title: 'Post-natal Care',
    image: '/mani.jpg',
    description: 'Support and care for mothers and newborns after delivery to promote recovery and bonding.'
  },
  {
    icon: <FaFemale />,
    title: 'Gynaecology and Obstetric Care',
    image: 'gyna.jpeg',
    description: 'Expert care for women’s health, including pregnancy, childbirth, and reproductive health.'
  },
  {
    icon: <FaHeartbeat />,
    title: 'Blood Pressure Measurement',
    image: '/blood.png',
    description: 'Accurate monitoring and management of blood pressure to prevent complications.'
  },
  {
    icon: <FaMale />,
    title: 'Adult Male Circumcision',
    image: '/adult.png',
    description: 'Safe and hygienic circumcision procedures for adult males.'
  },
  {
    icon: <FaHandsHelping />,
    title: 'HIV Counselling and Testing',
    image: '/hiv.png',
    description: 'Confidential and supportive HIV testing and counselling services.'
  },
  {
    icon: <FaUsers />,
    title: 'Family Planning Services',
    image: '/family.jpeg',
    description: 'Guidance and support for family planning to ensure healthy and planned parenthood.'
  },
  {
    icon: <FaWheelchair />,
    title: 'Elderly Medical Care (Diabetes and Hypertension)',
    image: '/adulta.png',
    description: 'Specialized care for elderly patients managing chronic conditions like diabetes and hypertension.'
  }
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
          <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
          <div className="text-blue-500 text-3xl mb-2">{service.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm text-center">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;