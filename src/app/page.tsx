import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlert } from "react-icons/ai";
import { BiClinic } from "react-icons/bi";
import { FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";
import { LiaClinicMedicalSolid } from "react-icons/lia";
import { RiHospitalLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <div className="bg-red-400 mt-28 px-10">
        <div
          className="rounded-3xl relative flex flex-col overflow-hidden bg-none
        before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:z-[1] before:bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.55)_32%,rgba(0,0,0,0.1)_67%,rgba(0,0,0,0)_100%)]
        "
        >
          <div className="relative h-[700px] w-full">
            <Image fill src="/homepage.jpg" alt="homepage" className="" />
          </div>

          <div className="absolute ml-10 bottom-[5%] z-[1]">
            <p className="text-2xl text-white mb-1">Hello humankindness®</p>
            <p className="text-6xl text-white mb-2">Humankindness is here</p>

            <div className="bg-slate-100 rounded-2xl flex flex-col gap-5 p-8">
              <div className="w-full relative text-ppink">
                <input
                  placeholder="Search providers, specialties, locations and services"
                  className="w-full bg-white outline outline-2 outline-gray-400 shadow-none drop-shadow-none p-3 placeholder:text-ppink"
                />

                <FaMagnifyingGlass
                  size={"1.3rem"}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 "
                />
              </div>

              <div className="flex gap-3">
                <HeroActionCards />
              </div>

              <div className="flex gap-3">
                <Link
                  href="/"
                  className="text-ppink text-center font-medium border-2 border-ppink rounded-full px-3 py-2.5 hover:bg-ppink hover:text-white transition-colors duration-300"
                >
                  Schedule Care Online
                </Link>
                <Link
                  href="/"
                  className="text-ppink text-center font-medium border-2 border-ppink rounded-full px-3 py-2.5 hover:bg-ppink hover:text-white transition-colors duration-300"
                >
                  Virtual Urgent Care
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HeroActionCards = () => {
  const data = [
    {
      icon: <RiHospitalLine className="w-full h-full" />,
      title: "Hospitals",
      description: "Locations & Services",
      href: "#",
    },
    {
      icon: <AiOutlineAlert className="w-full h-full" />,
      title: "ER / Urget Care",
      description: "Locations & Services",
      href: "#",
    },
    {
      icon: <LiaClinicMedicalSolid className="w-full h-full" />,
      title: "Clinics",
      description: "Specialties & Scheduling",
      href: "#",
    },
  ];

  return data.map(({ icon, title, description, href }, index) => (
    <Link
      key={index}
      href={href}
      className="bg-white w-full rounded-lg flex flex-col p-5 gap-3 group"
    >
      <div className="w-[3.5rem] h-[3.5rem] text-[#00AE9D] group-hover:text-ppink p-1">
        {icon}
      </div>
      <div>
        <h1 className="text-2xl leading-none whitespace-nowrap">{title}</h1>
        <p className="font-medium whitespace-nowrap">{description}</p>
      </div>
      <h1 className="text-ppink flex gap-2 items-center">
        Explore
        <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
      </h1>
    </Link>
  ));
};
