const Vouchers = () => {
  return (
    <section
      id="vouchers"
      className="relative w-full flex flex-col items-center md:flex-row text-center text-white py-[10vw] px-[5vw] md:p-[5.6vw]"
    >
      <picture className="object-cover w-full z-0 mt-[50px] md:mt-0 basis-1/2">
        <source
          media="(min-width: 768px)"
          srcSet="/assets/img/vouchers.png"
          className="select-none"
        />
        <img
          src="/assets/img/vouchers_sm.png"
          alt="Watch the Way you Want on a Variety of Devices shown here"
          className="select-none"
        />
      </picture>

      <div className="basis-1/2 px-[2vw]">
        <h1 className="text-[26px] font-bold mb-[24px] md:text-[28px] lg:text-[40px] text-left">
          Give away magical streaming moments!
        </h1>
        <ul className="text-left text-[#c0c0c0] list-disc pl-[40px] my-[18px] md:text-[18px] lg:text-[20px]">
          <li className="mb-[20px]">
            Discover our new voucher cards* - 3, 6 or 12 months full of stories,
            no automatic renewal.
          </li>
          <li className="mb-[20px]">Available now in stores.</li>
          <li className="mb-[20px]">
            Customers with an existing Disney+ subscription can only use the
            code after their existing subscription period has expired.
            Redeemable only in Germany and from the age of 18.
          </li>
        </ul>
        <p className="text-left text-[#c0c0c0] tracking wider font-thin mb-[20px] md:text-[18px]">
          *Voucher cards are available in German language only.
        </p>
      </div>
    </section>
  );
};

export default Vouchers;
