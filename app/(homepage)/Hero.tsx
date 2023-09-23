import Image from "next/image";
import HeroScrollTo from "./HeroScrollTo";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center relative min-h-[70vh] lg:justify-start lg:items-center lg:min-h-[100vh]"
    >
      <div className="w-full max-w-[550px] md:max-w-[700px] pt-[50vw] px-[5vw] pb-[20vw] md:pt-[40vw] md:pb-[10vw] lg:p-[5.6vw] z-10 flex flex-col items-center lg:items-start lg:max-w-[800px] lg:text-left">
        <Image
          src="/assets/img/logo.svg"
          alt="Logo"
          className="w-[130px] md:w-[160px] lg:w-[180px] m-auto mb-[20px] lg:mx-0 lg:mt-0 lg:mb-[2vw]"
          width={130}
          height={80}
        />
        <h1 className="text-white text-[26px] md:text-[32px] lg:text-[44px] font-bold mb-[24px]">
          + More than you&apos;d ever imagine
        </h1>
        <p className="text-[#c0c0c0] font-normal tracking-wide mb-[20px] md:text-[18px]">
          Enter your email to create or restart your subscription.
        </p>
        <form className="flex flex-col gap-3 mb-[15px] w-full md:flex-row md:gap-0 md:mb-[24px]">
          <input
            placeholder="Email"
            className="w-full p-3 rounded bg-[#31343e] text-[#c0c0c0] placeholder:text-[#c0c0c0] outline-none border-[1px] border-transparent focus:border-[#c0c0c0] md:rounded-r-none"
          />
          <Link href="/api/auth/signin">
            <button className="bg-[#0063e5] p-[15px] rounded text-white tracking-wider text-[15px] md:text-[18px] uppercase md:rounded-l-none md:px-[50px]">
              Continue
            </button>
          </Link>
        </form>

        <p className="text-[#c0c0c0] font-thin tracking-wider mb-[20px] md:text-[18px]">
          Get 12 months for the price of 10 when you sign up for an annual
          Disney+ subscription, compared to paying monthly.
        </p>
        <HeroScrollTo />
      </div>

      <div
        style={{ backgroundImage: "url(/assets/img/banner.jpeg)" }}
        className="absolute bg-cover hidden lg:block w-full h-full bg-no-repeat pointer-events-none bg-[50%]"
      ></div>
      <div
        style={{ backgroundImage: "url(/assets/img/banner_md.jpeg)" }}
        className="absolute bg-contain hidden md:block lg:hidden w-full h-full bg-no-repeat pointer-events-none bg-top bg-full"
      ></div>
      <div
        style={{ backgroundImage: "url(/assets/img/banner_sm.jpeg)" }}
        className="absolute bg-cover md:hidden w-full h-full bg-no-repeat pointer-events-none bg-top bg-full"
      ></div>
    </section>
  );
};

export default Hero;
