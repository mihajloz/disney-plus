import Image from "next/image";

const Features = () => {
  return (
    <section
      id="features"
      className="relative w-full flex flex-col text-center text-white py-[10vw] px-[5vw] md:p-[5.6vw]"
    >
      <div className="">
        <h1 className="text-[26px] font-bold mb-[24px] md:text-[32px] lg:text-[44px]">
          Watch the way you want
        </h1>
        <p className="text-[#c0c0c0] tracking wider font-thin mb-[20px] md:text-[18px] lg:text-[20px]">
          Enjoy the world&apos;s greatest stories - anytime, anywhere.
        </p>
      </div>

      <picture className="object-cover w-full z-0 mt-[50px] md:mt-0">
        <source
          media="(min-width: 768px)"
          srcSet="/assets/img/devices.jpeg"
          className="select-none"
        />
        <img
          src="/assets/img/devices_sm.jpeg"
          alt="Watch the Way you Want on a Variety of Devices shown here"
          className="select-none"
        />
      </picture>

      <ul className="flex justify-center flex-wrap md:flex-nowrap gap-[24px] my-4 w-full">
        <li>
          <Image
            width={1000}
            height={1000}
            src="/assets/img/movie_reel_icon.png"
            alt="Icon"
          />
          <h3 className="text-[22px] my-[20px] font-bold tracking-wide md:text-[24px] lg:text-[28px]">
            Endless entertainment
          </h3>
          <p className="text-[#c0c0c0] mb-[20px] tracking-wide md:text-[18px] lg:text-[20px]">
            Explore thousands of hours of TV series, movies and originals.
          </p>
        </li>
        <li>
          <Image
            width={1000}
            height={1000}
            src="/assets/img/devices_icon.png"
            alt="Icon"
          />
          <h3 className="text-[22px] my-[20px] font-bold tracking-wide md:text-[24px] lg:text-[28px]">
            Available on your favourite devices
          </h3>
          <p className="text-[#c0c0c0] mb-[20px] tracking-wide md:text-[18px] lg:text-[20px]">
            Stream on up to four screens at once on compatible devices.
          </p>
        </li>
        <li>
          <Image
            width={1000}
            height={1000}
            src="/assets/img/devices_icon.png"
            alt="Icon"
          />
          <h3 className="text-[22px] my-[20px] font-bold tracking-wide md:text-[24px] lg:text-[28px]">
            Easy-to-use parental controls
          </h3>
          <p className="text-[#c0c0c0] mb-[20px] tracking-wide md:text-[18px] lg:text-[20px]">
            Keep your family safe with our intuitive parental controls.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Features;
