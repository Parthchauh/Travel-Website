"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "../app/components/ui/images-slider";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useRouter } from 'next/navigation';
import Link from "next/link";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../app/components/ui/animated-modal";
import Image from "next/image";

export function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1690135330341-6fa47cf3121b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1678914906530-86caef9f2fb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1566931789843-17380bcdd5fc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1491738726357-683388052ea6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Explore the World Discover <br /> Amazing Destinations
        </motion.p>
        <Modal>
          <ModalTrigger className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book Your Journey →
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              ✈️
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Book your trip to{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  Bali
                </span>{" "}
                now! ✈️
              </h4>
              <div className="flex justify-center items-center">
                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 - 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt="bali images"
                      width="500"
                      height="500"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                <div className="flex items-center justify-center">
                  <CheckCircleOutlineRoundedIcon className="mr-1 text-emerald-500 h-4 w-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    5 connecting flights
                  </span>
                </div>
                <div className="flex items-center justify-center ml-3">
                  <CheckCircleOutlineRoundedIcon className="mr-1 text-emerald-500 h-4 w-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    12 hotels
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircleOutlineRoundedIcon className="mr-1 text-emerald-500 h-4 w-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    69 visiting spots
                  </span>
                </div>
                <div className="flex items-center justify-center ml-9">
                  <CheckCircleOutlineRoundedIcon className="mr-1 text-emerald-500 h-4 w-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Good food everyday
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircleOutlineRoundedIcon className="mr-1 text-emerald-500 h-4 w-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Open Mic
                  </span>
                </div>
                <div className="flex items-center justify-center mx-20">
                  <CheckCircleOutlineRoundedIcon className="mr-1 text-emerald-500 h-4 w-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Paragliding
                  </span>
                </div>
              </div>
            </ModalContent>
            <ModalFooter className="gap-5 py-1">
              <Link href="/booking">
                <button className="content-start bg-white text-black dark:bg-black dark:text-white text-sm px-2 py-1.5 rounded-md border border-white transform hover:-translate-y-1 transition duration-400 font-bold w-28">
                  Book Now
                </button>
              </Link>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </motion.div>
    </ImagesSlider>
  );
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14.639 10.265l-7.63-6.395c-.322-.272-.719-.42-1.134-.423l-.302-.002c-.808-.004-1.537.519-1.788 1.289l-2.095 6.372c-.063.191-.094.392-.094.594 0 .657.33 1.272.88 1.632l7.63 6.395c.322.272.719.42 1.134.423h.302c.808.004 1.537-.519 1.788-1.289l2.095-6.372c.064-.192.095-.393.095-.595 0-.657-.33-1.272-.88-1.632z"></path>
      <path d="M8.268 11.783l5.43 4.56m-.215-3.215l1.07 4.28m-5.43-4.56l4.215 1.07"></path>
    </svg>
  );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v18a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
      <path d="M10 9l2 -2l2 2"></path>
      <path d="M10 14l2 2l2 -2"></path>
      <path d="M10 5h4"></path>
      <path d="M10 19h4"></path>
    </svg>
  );
};

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 6c.305 0 .59.138.77.37l1.23 1.63h12a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z"></path>
      <path d="M16 9v-2a2 2 0 0 0 -2 -2"></path>
      <path d="M2 10h17"></path>
      <path d="M9 15h1"></path>
      <path d="M12 15h4"></path>
      <path d="M11 18v3"></path>
      <path d="M8 18v3"></path>
      <path d="M14 18v3"></path>
      <path d="M17 18v3"></path>
      <path d="M6 10v-2"></path>
      <path d="M18 10v-2"></path>
      <path d="M9 12v2"></path>
      <path d="M15 12v2"></path>
      <path d="M12 12v2"></path>
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 10v8a1 1 0 0 0 1 1h4v-6l-1 -2l-4 -2"></path>
      <path d="M11 12v7h4v-7l-2 -3z"></path>
      <path d="M8 3v4c0 1 .89 1.333 2 2c.5 -.672 2 -.555 2 -2v-4"></path>
      <path d="M20 10v8a1 1 0 0 1 -1 1h-4v-6l1 -2l4 -2"></path>
      <path d="M16 7v-2c0 -1 -1.5 -2 -2 -2s-2 1 -2 2v2"></path>
    </svg>
  );
};

const MicIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 5a3 3 0 0 1 6 0v6a3 3 0 0 1 -6 0z"></path>
      <path d="M5 10a7 7 0 0 0 14 0"></path>
      <path d="M8 21l8 0"></path>
      <path d="M12 17l0 4"></path>
    </svg>
  );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12l-2 9h4l-2 -9z"></path>
      <path d="M11 12h-7.5c-2.5 -5 2.5 -10 8.5 -10"></path>
      <path d="M13 12h7.5c2.5 -5 -2.5 -10 -8.5 -10"></path>
      <path d="M8 4.5l8 0"></path>
      <path d="M7 17h10"></path>
    </svg>
  );
};
