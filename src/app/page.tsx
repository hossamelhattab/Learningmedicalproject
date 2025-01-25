import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlert } from "react-icons/ai";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { LiaClinicMedicalSolid } from "react-icons/lia";
import { LuBrain } from "react-icons/lu";
import { RiHospitalLine, RiMicrosoftLoopLine } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      {/* Hero */}
      <div className="bg-red-400 mt-32 px-10">
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

      {/* Sec 1 */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-20 px-10 lg:gap-20 gap-6 w-full lg:max-w-none max-w-[570px] mx-auto">
        <div className="flex flex-1 justify-center items-start">
          <Image
            src="/home_1.jpg"
            alt="homepage"
            width={700}
            height={700}
            // fill
            className="rounded-3xl"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 text-lg text-gray-700 items-start">
          <h1 className="text-5xl text-black" style={{ lineHeight: "3.5rem" }}>
            Building healthy communities
          </h1>
          <p>
            Hello humankindness. It&apos;s more than a tagline. Humankindness is
            one of the many things we all have in common. It&apos;s the good
            within us. The power that connects us. And at CommonSpirit Health,
            we fuse it into heartfelt healing, inspired innovation, and mindful
            medicine. It&apos;s in how we provide treatment and the way we treat
            patients.
          </p>
          <p>
            Our communities need caring, and our families need support.
            CommonSpirit is committed to building healthy communities by
            advocating for those who are poor and vulnerable, and innovating how
            and where healing can happen. Because the way care is provided is
            often as meaningful as the care itself.{" "}
          </p>

          <Link
            href="/"
            className="self-stretch lg:self-start text-white bg-ppink text-center font-medium border-2 border-ppink rounded-full px-3 py-2.5 hover:bg-white hover:text-ppink transition-colors duration-300"
          >
            About Infinity Medicine
          </Link>
        </div>
      </div>

      {/* Sec 2 */}
      <Section2 />
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

const Section2 = () => {
  const dataRight = [
    {
      title: "Orthopedics",
      href: "#",
      icon: <GiCrossedBones size={"2rem"} className="text-ppink" />,
    },
    {
      title: "Cancer Care",
      href: "#",
      icon: <RiMicrosoftLoopLine size={"2rem"} className="text-ppink" />,
    },
    {
      title: "Heart & Vascular",
      href: "#",
      icon: <FaHeartbeat size={"2rem"} className="text-ppink" />,
    },
    {
      title: "Neuroscience",
      href: "#",
      icon: <LuBrain size={"2rem"} className="text-ppink" />,
    },
  ];

  return (
    <div className="w-full bg-slate-100 flex items-center justify-center mt-20 ">
      <div className="w-full flex flex-col lg:flex-row py-20 gap-10 max-w-[30rem] lg:max-w-[1300px]">
        <div className="flex flex-col flex-[2] gap-5">
          <h1 className="text-2xl">Our services</h1>
          <h1 className="text-5xl">Find the care you need</h1>
          <Link
            href="/"
            className="flex gap-2 items-center group text-ppink bg-white font-medium border-2 border-ppink rounded-2xl px-3 py-2.5 hover:bg-ppink hover:text-white transition-colors duration-300"
          >
            <div className="w-14 h-14 flex justify-center items-center rounded-full text-white bg-ppink">
              <BsCalendarDateFill size={"2rem"} />
            </div>
            <span className="text-lg">
              Schedule a primary care appointment online
            </span>
            <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
          </Link>

          <Link
            href="/"
            className="flex gap-2 items-center group text-ppink bg-white font-medium border-2 border-ppink rounded-2xl px-3 py-2.5 hover:bg-ppink hover:text-white transition-colors duration-300"
          >
            <div className="w-14 h-14 flex justify-center items-center rounded-full text-white bg-ppink">
              <AiOutlineAlert size={"2rem"} />
            </div>
            <span className="text-lg">View ER & urgent care locations</span>
            <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
          </Link>
        </div>

        <div className="flex-[3] flex flex-col gap-4 justify-center mt-10">
          <div className="grid-cols-2 grid-rows-2 gap-3 lg:grid flex flex-col">
            {dataRight.map(({ title, href, icon }, index) => (
              <Link
                key={index}
                href={href}
                className="p-4 w-full bg-white rounded-2xl flex gap-3 items-center hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
              >
                {icon}
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl">{title}</h1>
                  <div className="flex items-center text-ppink gap-2">
                    Learn more
                    <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="#"
            className="p-4 bg-white rounded-2xl flex text-lg text-ppink gap-2 justify-center items-center hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
          >
            <SlOptionsVertical />
            Explore all of our services
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
