const Exclusive = () => {
  return (
    <section
      id="exclusive"
      className="relative w-full flex flex-col text-center text-white py-[10vw] px-[5vw] md:p-0 md:text-left"
    >
      <div className="md:absolute z-10 md:pl-[5vw] md:w-[40%] md:text-[18px] flex flex-col justify-center h-full">
        <h1 className="text-[26px] font-bold mb-[24px] md:text-[32px] lg:text-[44px]">
          Only on Disney+
        </h1>
        <p className="text-[#c0c0c0] w-full tracking-wide font-thin mb-[20px] md:text-[18px] lg:text-[20px]">
          Exclusive movies, series and originals you won&apos;t find on any
          other streaming service.
        </p>
        <div className="hidden md:block md:mb-[160px]"></div>
      </div>
      <picture className="object-cover w-full z-0 mt-[50px] md:mt-0 md:relative">
        <source
          media="(min-width: 768px)"
          srcSet="/assets/img/original.jpeg"
          className="select-none"
        />
        <img
          src="/assets/img/original_sm.jpeg"
          alt="Original Content by Disney"
          className="select-none"
        />
      </picture>
    </section>
  );
};

export default Exclusive;
