import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlert } from "react-icons/ai";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaExternalLinkAlt, FaHeartbeat } from "react-icons/fa";
import {
  FaMagnifyingGlass,
  FaArrowRight,
  FaUserDoctor,
  FaHandHoldingHeart,
} from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { LiaClinicMedicalSolid } from "react-icons/lia";
import { LuBrain } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import {
  RiHospitalFill,
  RiHospitalLine,
  RiMicrosoftLoopLine,
} from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import CarouselSection from "@/components/CarouselSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <div className="mt-32 px-10">
        {/* Hero 2 */}
        <div
          className="relative flex flex-col justify-center bg-[#F2F3F7]
         lg:!items-start lg:bg-none lg:overflow-hidden lg:pb-[56.25%] lg:mx-[5rem] lg:rounded-[2rem] lg:!h-auto
         lg:before:content-[''] lg:before:w-full lg:before:h-full lg:before:absolute lg:before:top-0 lg:before:z-[1] lg:before:bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.55)_32%,rgba(0,0,0,0.1)_67%,rgba(0,0,0,0)_100%)]
         before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:z-[1] before:bg-[linear-gradient(to_top,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.55)_32%,rgba(255,255,255,0.1)_67%,rgba(255,255,255,0)_100%)]
         "
        >
          <div
            className="lg:!absolute lg:top-0 lg:left-0 lg:w-full lg:h-full
          relative h-[500px]
          "
          >
            <Image
              fill
              src="/homepage.jpg"
              alt="homepage"
              className="object-cover"
            />
          </div>

          <div
            className="lg:mt-0 lg:bg-none lg:!absolute lg:px-[3rem] lg:bottom-[5%]
            z-[2] pb-[2rem] -mt-[4rem] bg-transparent

          "
          >
            <div className="lg:block hidden">
              <p className="text-2xl text-white mb-5">Hello humankindness®</p>
              <p className="text-6xl text-white mb-6">Humankindness is here</p>
            </div>

            <div
              className="
              lg:p-[3rem] lg:m-w-[84rem] lg:bg-[#F2F2F2]
              rounded-[2rem] bg-white p-[2rem]
              flex flex-col gap-5
              shadow-xl
            "
            >
              <div className="lg:hidden block text-ppink">
                <p className="text-xl mb-1">Hello humankindness®</p>
                <p className="text-3xl mb-2">Humankindness is here</p>
              </div>

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

              <div className="flex lg:flex-row flex-col gap-3">
                <HeroActionCards />
              </div>

              <div
                className="
                lg:flex-row
                flex flex-col gap-3
              "
              >
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

      {/* Sec 3 */}
      <div className="w-full p-24 items-center flex flex-col">
        <h1 className="text-6xl text-center mb-10">
          Your personalized health portal — anytime, anywhere.
        </h1>

        <div className="flex lg:flex-row flex-col gap-10">
          <div
            className="flex flex-col justify-center gap-5 bg-ppink text-white rounded-2xl p-10 shadow-xl"
            style={{ flex: "0 0 360px" }}
          >
            <ul className="list-disc text-xl" style={{ lineHeight: "2.5rem" }}>
              <li>Schedule appointments</li>
              <li>Get virtual urgent care</li>
              <li>View lab results</li>
              <li>Message your care team</li>
              <li>Request refills</li>
              <li>Access medical records</li>
            </ul>
            <br />
            <h1 className="text-xl font-bold">Do you have an account?</h1>
            <p className="text-lg">
              Sign up now or access services as a guest.{" "}
            </p>
            <Link href={""} className="flex gap-2 font-bold">
              Visit the MyCommonSpirit – Mountain patient portal Visit the
              MyCommonSpirit – Mountain patient portal
              <FaExternalLinkAlt />
            </Link>
          </div>

          <Image
            src="/home_2.jpg"
            alt="homepage"
            width={897}
            height={897}
            className="rounded-3xl flex-[2]"
            style={{ flex: "1 1" }}
          />
        </div>
      </div>

      {/* Sec 4 */}
      <Section4 />

      {/* Colorado map */}

      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('colorado_map.png')",
          backgroundAttachment: "fixed",
          height: "90vh",
        }}
      ></div>

      {/* Carousel */}
      <Section5 />
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
      className="
      bg-slate-100 w-full rounded-lg flex flex-row p-5 gap-3 group
      lg:bg-white lg:!flex-col 
      "
    >
      <div className="w-[3.5rem] h-[3.5rem] text-[#00AE9D] group-hover:text-ppink p-1">
        {icon}
      </div>
      <div>
        <h1 className="text-2xl leading-none whitespace-nowrap">{title}</h1>
        <p className="font-medium whitespace-nowrap">{description}</p>
      </div>
      <h1 className="text-ppink flex gap-2 items-center ml-auto lg:!ml-0">
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
    <div className="p-10 w-full bg-slate-100 flex items-center justify-center mt-20 ">
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

const Section4 = () => {
  const data = [
    {
      label: "21,000+",
      description: "Incredible Caregivers",
      icon: <FaUserDoctor size={"3rem"} className="" />,
    },
    {
      label: "240+",
      description: "Physician/Provider Practices and Clinics",
      icon: <MdLocationPin size={"3rem"} className="" />,
    },
    {
      label: "20",
      description: "Hospitals Across Colorado, Kansas and Utah",
      icon: <RiHospitalFill size={"3rem"} className="" />,
    },
    {
      label: "1",
      description: "Mission",
      icon: <FaHandHoldingHeart size={"3rem"} className="" />,
    },
  ];

  return (
    <div className="w-full p-20 bg-slate-100 flex items-center flex-col gap-2">
      <h1 className="text-5xl text-center mb-10">
        Meet Our Connected System of Hospitals, Clinics and Caregivers
      </h1>
      <h1 className="text-lg text-center text-ppink max-w-[50rem]">
        From big cities to small towns, our physicians and caregivers are proud
        members of the communities they serve.
      </h1>

      <div className="w-full flex justify-around">
        {data.map(({ label, description, icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 max-w-[14rem]"
          >
            <div className="w-20 h-20 flex justify-center items-center rounded-full text-[#00AE9D]">
              {icon}
            </div>
            <h1 className="text-4xl">{label}</h1>
            <p className="text-lg text-slate-600 text-center">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div className="w-full h-[900px] p-20 bg-slate-100 relative">
      <Image src={"/home_3.jpg"} alt="homepage" fill className="object-cover" />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 ">
        <CarouselSection />
      </div>
    </div>
  );
};
