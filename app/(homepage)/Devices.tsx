import Image from "next/image";

const Devices = () => {
  return (
    <div
      id="devices"
      className="relative w-full flex flex-col text-center text-white py-[10vw] px-[5vw] md:p-[5.6vw]"
    >
      <div className="">
        <h1 className="text-[26px] font-bold mb-[24px] md:text-[32px] lg:text-[44px]">
          Available on your favourite devices
        </h1>
      </div>

      <ul className="flex flex-wrap justify-center gap-[24px] my-4 w-full">
        <li className="w-[calc(50%-12px)] md:w-[calc(25%-18px)] flex flex-col">
          <Image
            width={1000}
            height={1000}
            src="/assets/img/tv_i.png"
            alt="TV"
          />
          <h3 className="text-[22px] my-[20px] font-bold tracking-wide md:text-[24px] lg:text-[28px]">
            TV
          </h3>
          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#c0c0c0]">
            Amazon Fire TV
            <br />
            Android TV devices
            <br />
            Apple TV
            <br />
            Chromecast
            <br />
            LG TVs
            <br />
            Samsung
            <br />
            MagentaTV Stick
            <br />
            Panasonic
          </p>
        </li>
        <li className="w-[calc(50%-12px)] md:w-[calc(25%-18px)] flex flex-col">
          <Image
            width={1000}
            height={1000}
            src="/assets/img/computer_i.png"
            alt="Computer"
          />
          <h3 className="text-[22px] my-[20px] font-bold tracking-wide md:text-[24px] lg:text-[28px]">
            Computer
          </h3>
          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#c0c0c0]">
            Chrome OS
            <br />
            MacOS
            <br />
            Windows PC
          </p>
        </li>
        <li className="w-[calc(50%-12px)] md:w-[calc(25%-18px)] flex flex-col">
          <Image
            width={1000}
            height={1000}
            src="/assets/img/mobile_i.png"
            alt="Mobile"
          />
          <h3 className="text-[22px] my-[20px] font-bold tracking-wide md:text-[24px] lg:text-[28px]">
            Mobile & Tablet
          </h3>
          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#c0c0c0]">
            Amazon Fire Tablets
            <br />
            Android Phones & Tablets
            <br />
            iPhone & iPad
          </p>
        </li>
        <li className="w-[calc(50%-12px)] md:w-[calc(25%-18px)] flex flex-col">
          <Image
            width={1000}
            height={1000}
            src="/assets/img/console_i.png"
            alt="Console"
          />
          <h3 className="text-[22px] my-[20px] font-bold tracking-wide md:text-[24px] lg:text-[28px]">
            Game Consoles
          </h3>
          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#c0c0c0]">
            PS4
            <br />
            PS5 <br />
            Xbox One
            <br />
            Xbox Series X
            <br />
            Xbox Series S
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Devices;
