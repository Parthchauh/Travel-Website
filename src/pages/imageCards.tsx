"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../app/components/ui/apple-cards-carousel";

// Define TypeScript interfaces for the data and content
interface DummyContentProps {
  content: React.ReactNode;
}

interface CardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Explore, Dream, Discover!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent: React.FC<DummyContentProps> = ({ content }) => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Discover the World with Us
          </span>{" "}
          {content}
        </p>
        <Image
          src="https://assets.aceternity.com/macbook.png"
          alt="Error"
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

const data: CardData[] = [
  {
    category: "Adventure",
    title: "Hike more, worry less.",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="Discover breathtaking destinations, from serene beaches to majestic mountains. Your next adventure awaits!" />,
  },
  {
    category: "Culture",
    title: "Immerse in New Cultures",
    src: "https://images.unsplash.com/photo-1690135330341-6fa47cf3121b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="Experience the rich heritage and traditions of diverse cultures around the globe. Embrace the local lifestyle and customs." />,
  },
  {
    category: "Relaxation",
    title: "Unwind and Relax",
    src: "https://images.unsplash.com/photo-1678914906530-86caef9f2fb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="Find your perfect escape with tranquil retreats and luxury getaways. Relaxation and rejuvenation await!" />,
  },
  {
    category: "Adventure",
    title: "Thrilling Adventures",
    src: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="Seek out the thrill of outdoor adventures, from hiking rugged trails to exploring remote islands. Adventure awaits!" />,
  },
  {
    category: "Relaxation",
    title: "Luxurious Escapes",
    src: "https://images.unsplash.com/photo-1566931789843-17380bcdd5fc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="Indulge in the finest accommodations and amenities for a truly luxurious experience. Pamper yourself and enjoy top-notch service." />,
  },
  {
    category: "Culture",
    title: "Cultural Experiences",
    src: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="Delve into the vibrant traditions and festivals of different cultures. Experience local cuisines, art, and history firsthand." />,
  },
  {
    category: "Adventure",
    title: "Explore New Horizons",
    src: "https://images.unsplash.com/photo-1491738726357-683388052ea6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="Venture beyond the familiar and explore new horizons. Discover new destinations and experiences that will leave you inspired." />,
  },
];
