'use client'
import useIntersectObserver from "@/hooks/useIntersectObserver";

const Header = () => {
const [ref, entry] = useIntersectObserver<HTMLDivElement>();
 const scrolled = entry ? !entry.isIntersecting : false;

  return (
    <div className="px-auto py-5 grid gap-4 grid-flow-col place-items-center text-white bg-[#1053F3]" ref={ref}>  
      <h1>DOGGO</h1>
      <div className="grid gap-4 grid-flow-col max-w-fit text-base"> 
        <p>About</p>
        <p>Company</p>
        <p>FAQ's</p>
      </div>
      <button className="px-10 py-2 rounded-full bg-white text-base text-[#1053F3]">
        Starts Free
      </button>
    </div>
  );
};

export default Header;