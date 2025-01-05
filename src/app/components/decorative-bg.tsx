import DecorativeTopLines from "../../../public/lines-top.svg";
import DecorativeBottomLines from "../../../public/lines-bottom.svg";
import Sparkle from "../../../public/sparkle-long.svg";
export default function DecorativeBackground() {
  return (
    <>
      <DecorativeTopLines className="icon-socials pointer-events-none size-auto absolute top-0 left-0 z-10 w-[25rem] h-auto" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-8 left-[21rem] top-[9rem]" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-8 left-[5rem] top-[7.5rem]" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-5 left-[18rem] top-[1.75rem]" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-5 left-[26rem] top-[4.25rem]" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-5 left-[1rem] top-[11rem]" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-5 left-[4rem] top-[18rem]" />

      <DecorativeBottomLines className="icon-socials pointer-events-none size-auto absolute bottom-0 right-0 z-10 w-[52.5rem] h-auto" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-8 right-[38.5rem] bottom-[6rem]" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-8 right-[47rem] bottom-[10.5rem]" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-8 right-[1rem] bottom-[24.5rem]" />

      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-5 right-[42rem] bottom-[16.5rem]" />

      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-5 right-[4.5rem] bottom-[32.25rem]" />
      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-5 right-[11rem] bottom-[27rem]" />

      <Sparkle className="icon-socials pointer-events-none size-auto absolute z-10 w-5 right-[43rem] bottom-[1rem]" />
    </>
  );
}
