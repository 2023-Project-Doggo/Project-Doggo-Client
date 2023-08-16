import Image from "next/image";

interface ButtonProps {
    type: 'Dog' | 'Cat';
}

const ImgButton = ({type = 'Dog'} : ButtonProps) => {
  return ( 
      <div className="mt-4 z-10 bg-white absolute right-80 border border-[#EFF6FF] max-w-fit max-h-fit rounded-[40px] shadow-lg text-center place-content-center items-center">
          <Image alt={'landing-image'} width={172} height={172} src={`/img/${type === 'Dog' ? 'dog' : 'cat'}.png`}/>
      </div> 
  );  
};
export default ImgButton;