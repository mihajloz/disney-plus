import Image from "next/image";

const footerLabels: string[] = [
  "Subscriber Agreement",
  "Privacy Policy",
  "UK & EU Privacy Rights",
  "Cookies Policy",
  "Interest-Based Ads",
  "Supported Devices",
  "Imprint",
  "Cancel Subscription Here",
  "Help Centre",
  "Manage Preferences",
];

const PageFooter = () => {
  return (
    <footer
      id="footer"
      className="mt-[60px] bg-[#040714] relative w-full flex flex-col mx-auto justify-center text-center py-[10vw] px-[5vw] lg:py-[26px] lg:px-2 md:text-left text-[#c0c0c0] text-[11px] md:text-[12px]"
    >
      <Image
        src="/assets/img/logo.svg"
        alt="Disney"
        className="w-[80px] mx-auto mb-[20px]"
        width={80}
        height={80}
      />
      <ul className="flex flex-wrap justify-center mb-[15px]">
        {footerLabels.map((label) => (
          <li key={label} className="px-3 py-2 hover:text-white cursor-pointer">
            {label}
          </li>
        ))}
      </ul>
      <p className="text-center mb-[20px]">
        © 2023 Disney and its related entities. All Rights Reserved.
      </p>
    </footer>
  );
};

export default PageFooter;
