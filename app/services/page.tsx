import React from "react";
import { Card } from "../components/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "../components/nav";

const services = [
  {
    name: "CAD / CAE Services",
    description:
      "We specialize in designing and creating custom mechanical components for various industries.",
    image: "/images/mechanical-design.jpg",
  },
  {
    name: "New Product Development",
    description:
      "We help businesses develop innovative products that meet their customers' needs.",
    image: "/images/new-product-development.jpg",
  },
  {
    name: "Digital Marketing",
    description:
      "We help businesses create strong online presence and attract customers.",
    image: "/images/marketing-promotion.jpg",
  },
  {
    name: "Interior Design",
    description:
      "We create visually appealing and functional interior spaces that enhance the overall look and feel of a home.",
    image: "/images/interior-design.jpg",
  },
  {
    name: "Web Developement",
    description:
      "We help businesses create engaging and user-friendly websites that meet their customers' needs.",
    image: "/images/web-development.jpg",
  },
  {
    name: "Part Manufaturing",
    description:
      "We help businesses create and maintain custom parts that meet their customers' needs.",
    image: "/images/part-manufacturing.jpg",
  },
  {
    name: "Graphic Designing",
    description:
      "We help businesses create visually appealing and functional marketing materials that attract customers.",
    image: "/images/graphic-designing.jpg",
  },
  {
    name: "R & D Projects",
    description:
      "We help businesses develop innovative solutions for various industries.",
    image: "/images/research-and-development.jpg",
  },
  {
    name: "Talent Acquisition",
    description:
      "We help businesses acquire and develop talent that meets their customers' needs.",
    image: "/images/talent-acquisition.jpg",
  },
];

const servicesPage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 py-32 w-full h-full min-h-screen">

      {/* <div className="top-0 z-50 fixed inset-x-0 border-zinc-800 bg-zinc-900/500 backdrop-blur border-b duration-200">
        <div className="flex flex-row-reverse justify-between items-center mx-auto p-6 container">
          <div className="flex justify-between gap-8">
            <a
              className="text-zinc-400 hover:text-zinc-100 duration-200"
              href="/services"
            >
              Services
            </a>
            <a
              className="text-zinc-400 hover:text-zinc-100 duration-200"
              href="/contact"
            >
              Contact
            </a>
          </div>
          <a
            className="text-zinc-300 hover:text-zinc-100 duration-200"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-6 h-6"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </a>
        </div>
      </div> */}
      <Navigation/>

      <div className="gap-5 grid grid-cols-2 w-full max-w-[1200px]">
        <div className="col-span-2">
          <h2 className="font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight">Services</h2>
          <p className="mt-4 text-zinc-400">
            We offer a wide range of services to help businesses achieve their goals.
          </p>
        </div>
        <div className="col-span-2 bg-zinc-800 mt-10 mb-8 w-full h-px"></div>
        {services.map((service, index) => (
          <div className="relative">
            <Card key={index}>
              <div className="p-5 text-[#f4f4f5]">
                <h2 className="font-semibold text-3xl"> {service.name} </h2>
                <p className="mt-5 text-zinc-300"> {service.description} </p>
                <Link
                  className="flex items-center gap-3 mt-5 text-sm text-zinc-400 underline underline-offset-2"
                  href={""}
                >
                  more details <ArrowRight size={15} />{" "}
                </Link>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default servicesPage;
