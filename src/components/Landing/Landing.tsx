"use client";
import Image from "next/image";
import ImgButton from "./ImgButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Landing = () => {
  const router = useRouter();
  return (
    <section className="px-auto grid grid-flow-row place-content-center">
      <div className="px-auto bg-[#1053F3] grid grid-flow-row gap-1">
        <div className="justify-self-center xs:w-full xs:h-10 sm:w-96 sm:h-28 lg:w-[762px] lg:h-[227px] relative">
          <Image
            alt={"landing-image"}
            fill={true}
            src={"/img/landing-animals.png"}
          />
        </div>
        <p className="text-center sm:text-[2rem] lg:text-4xl text-white leading-tight">
          Meet the best companion of your life!
        </p>
        <p className="mb-20 text-center sm:text-md lg:text-xl text-white font-normal">
          we expect you to have adorable experience with our 3D based web.
        </p>
      </div>
      <div className="px-auto lg:px-96">
        <p className="mt-20 text-xl text-[#1053F3]">- About DOGGO</p>
        <ImgButton type="Dog" />
        <div className="mt-10 border border-[#EFF6FF] rounded-3xl shadow-lg p-10 grid grid-auto-row gap-2">
          <div className="sm:w-full lg:w-3/5 grid grid-flow-row gap-4">
            <p className="text-[#1053F3] md:text-xl lg:text-3xl font-bold">
              Customize your own pet!
            </p>
            <p className="text-[#0F172A] font-normal">
              The DogGo platform allows users to customize your own virtual pet!
              Users can put in different colors for each part of the pet's body,
              making your virtual pet more unique. Also, users can save the
              customized pet and see it in the following "town" page.
            </p>
          </div>
          <Link
            className="mt-2 border border-[#bdc7de] text-center text-[#1053F3] rounded-2xl px-4 py-1"
            href="/world">
            Start free
          </Link>
        </div>
        <ImgButton type="Cat" />
        <div className="mt-10 border border-[#EFF6FF] rounded-3xl shadow-lg p-10 grid grid-auto-row gap-2">
          <div className="sm:w-full lg:w-3/5 grid grid-flow-row gap-4">
            <p className="text-[#1053F3] md:text-xl lg:text-3xl font-bold">
              Meet your pet in the town!
            </p>
            <p className="text-[#0F172A] font-normal">
              The DogGo platform allows users to communicate with each other in
              the "Town" area and socialize. With the customized pet user just
              has made previously, the user can walk around the town, taking the
              virtual pet on a virtual walk!
            </p>
          </div>
          <Link
            className="mt-2 border border-[#bdc7de] text-center text-[#1053F3] rounded-2xl px-4 py-1"
            href="/world">
            Start free
          </Link>
        </div>
        <p className="mt-20 text-xl text-[#1053F3]">- Play</p>
      </div>
      <div className="mt-40 bg-[#F4F9FF] px-[400px] w-screen h-[640px] flex flex-col gap-1 place-content-center items-center">
        <p className="text-center text-4xl text-[#1053F3]">
          Here are the actual footage of DogGo!
        </p>
        <div className="mt-16 grid sm:grid-flow-row md:grid-flow-col gap-4">
          <div className="relative sm:w-[358px] sm:h-[232px] md:w-[494px] md:h-[320px] bg-white border-8 border-[#FFFFFF] shadow-sm sm:rounded-lg md:rounded-2xl">
            <Image alt={"doggo-footage"} fill src={"/img/footage_1.png"} />
          </div>
          <div className="relative sm:w-[358px] sm:h-[232px] md:w-[494px] md:h-[320px] bg-white border-8 border-[#FFFFFF] shadow-sm sm:rounded-lg md:rounded-2xl">
            <Image alt={"doggo-footage"} fill src={"/img/footage_1.png"} />
          </div>
          <div className="relative sm:w-[358px] sm:h-[232px] md:w-[494px] md:h-[320px] bg-white border-8 border-[#FFFFFF] shadow-sm sm:rounded-lg md:rounded-2xl">
            <Image alt={"doggo-footage"} fill src={"/img/footage_1.png"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
