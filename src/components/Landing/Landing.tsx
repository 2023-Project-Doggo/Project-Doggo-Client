import Image from "next/image";
import ImgButton from "./ImgButton";
const Landing = () => {
  return (
    <section className="grid grid-flow-row place-items-center">
      <div className="bg-[#1053F3] px-[400px] w-screen h-screen flex flex-col gap-1 place-content-center items-center">
          <Image alt={'landing-image'} width={762} height={227} src={'/img/landing-animals.png'}></Image>
          <p className="text-center text-[4rem] text-white">Meet the best companion of your life!</p>
          <p className="text-2xl text-white font-normal">we expect you to have adorable experience with our 3D based web.</p>
      </div>
      <div className="px-[400px]">
        <p className="mt-20 text-2xl text-[#1053F3]">- About DOGGO</p> 
        <ImgButton type="Dog"/>
        <div className="mt-10 border border-[#EFF6FF] rounded-3xl shadow-lg p-10">
          <div className="w-2/5 grid grid-flow-row gap-4">
            <p className="text-[#1053F3] text-4xl font-bold">Meet the best companion of your life!</p>
            <p className="text-[#0F172A] font-normal">The “platform” accent font pairs well with the readable “forma djr” typeface. In addition to arranging uniform blocks and organizing content there, we also drew a line of force for headings and typesetting. As a result, the layout looks much more cohesive and the user does not get confused.</p>
          </div>
          <button className="mt-20 border border-[#1053F3] text-[#1053F3] rounded-2xl px-4 py-1">Starts free</button>
        </div>
        <ImgButton type="Cat"/>
        <div className="mt-20 border border-[#EFF6FF] rounded-3xl shadow-lg p-10">
          <div className="w-2/5 grid grid-flow-row gap-4">
            <p className="text-[#1053F3] text-4xl font-bold">Meet the best companion of your life!</p>
            <p className="text-[#0F172A] font-normal">The “platform” accent font pairs well with the readable “forma djr” typeface. In addition to arranging uniform blocks and organizing content there, we also drew a line of force for headings and typesetting. As a result, the layout looks much more cohesive and the user does not get confused.</p>
          </div>
          <button className="mt-20 border border-[#1053F3] text-[#1053F3] rounded-2xl px-4 py-1">Starts free</button>
        </div>
        <p className="mt-20 text-2xl text-[#1053F3]">- Play</p> 
      </div>
      <div className="mt-20 w-[1440px] h-[810px] border border-[#EFF6FF] rounded-3xl shadow-lg"></div>
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