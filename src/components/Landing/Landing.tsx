'use client';
import Image from "next/image";
import ImgButton from "./ImgButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Landing = () => {
  const router = useRouter();
  return (
    <section className="grid grid-flow-row place-content-center">
      <div className="px-auto bg-[#1053F3] grid grid-flow-row gap-1">
        <div className="justify-self-center xs:w-full xs:h-10 sm:w-96 sm:h-28 lg:w-[762px] lg:h-[227px] relative"> 
          <Image alt={'landing-image'} fill={true} src={'/img/landing-animals.png'}/>
        </div>
          <p className="text-center sm:text-[2rem] lg:text-4xl text-white leading-tight">Meet the best companion of your life!</p>
          <p className="mb-20 text-center sm:text-md lg:text-xl text-white font-normal">we expect you to have adorable experience with our 3D based web.</p>
      </div>
      <div className="md:px-60 lg:px-96">
        <p className="mt-20 text-xl text-[#1053F3]">- About DOGGO</p> 
        <ImgButton type="Dog"/>
        <div className="mt-10 border border-[#EFF6FF] rounded-3xl shadow-lg p-10 grid grid-auto-row gap-2">
          <div className="sm:w-full lg:w-3/5 grid grid-flow-row gap-4">
            <p className="text-[#1053F3] md:text-xl lg:text-3xl font-bold">Meet the best companion of your life!</p>
            <p className="text-[#0F172A] font-normal">The “platform” accent font pairs well with the readable “forma djr” typeface. In addition to arranging uniform blocks and organizing content there, we also drew a line of force for headings and typesetting. As a result, the layout looks much more cohesive and the user does not get confused.</p>
          </div>
          <Link className="mt-2 border border-[#bdc7de] text-center text-[#1053F3] rounded-2xl px-4 py-1" href='/world' >Start free</Link>
        </div>
        <ImgButton type="Cat"/>
        <div className="mt-10 border border-[#EFF6FF] rounded-3xl shadow-lg p-10 grid grid-auto-row gap-2">
          <div className="sm:w-full lg:w-3/5 grid grid-flow-row gap-4">
            <p className="text-[#1053F3] md:text-xl lg:text-3xl font-bold">Meet the best companion of your life!</p>
            <p className="text-[#0F172A] font-normal">The “platform” accent font pairs well with the readable “forma djr” typeface. In addition to arranging uniform blocks and organizing content there, we also drew a line of force for headings and typesetting. As a result, the layout looks much more cohesive and the user does not get confused.</p>
          </div>
          <Link className="mt-2 border border-[#bdc7de] text-center text-[#1053F3] rounded-2xl px-4 py-1" href='/world' >Start free</Link>
        </div>
        <p className="mt-20 text-xl text-[#1053F3]">- Play</p> 
      </div>
      <div className="mt-40 bg-[#F4F9FF] px-[400px] w-screen h-[640px] flex flex-col gap-1 place-content-center items-center">
          <p className="text-center text-4xl text-[#1053F3]">Meet the best companion of your life!</p>
          <div className="mt-16 grid grid-flow-col gap-4">
            <div className="w-[494px] h-[320px] bg-white border border-[#EFF6FF] shadow-sm rounded-2xl"></div>
            <div className="w-[494px] h-[320px] bg-white border border-[#EFF6FF] shadow-sm rounded-2xl"></div>
            <div className="w-[494px] h-[320px] bg-white border border-[#EFF6FF] shadow-sm rounded-2xl"></div>
            <div className="w-[494px] h-[320px] bg-white border border-[#EFF6FF] shadow-sm rounded-2xl"></div>
          </div>
      </div>
    </section>
  );  
};
export default Landing;