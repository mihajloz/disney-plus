import Accordion from "./Accordion";
const Faq = () => {
  return (
    <section
      id="faq"
      className="py-[10vw] px-[5vw] md:p-[5.6vw] text-center text-white flex flex-col w-full"
    >
      <h2 className="text-[24px] md:text-[28px] lg:text-[40px] font-bold mb-[16px] lg:mb-[24px]">
        Frequently Asked Questions
      </h2>
      <Accordion title="What is Disney+?">
        <p>
          Disney+ is the streaming home for entertainment from Disney, Pixar,
          Marvel, Star Wars, National Geographic, Star and more.
        </p>
        <br />
        <p>
          Disney+ has a number of benefits included in the standard subscription
          price:
        </p>
        <ul className="list-disc pl-[40px]">
          <li className="mt-[16px]">
            Exclusive Originals you can&apos;t see anywhere else, blockbuster
            movies, bingeable shows, snackable shorts, and inspiring
            documentaries
          </li>
          <li className="mt-[16px]">
            Unlimited downloads on up to 10 devices and up to 7 different
            profiles
          </li>
          <li className="mt-[16px]">
            4K UHD streaming with Dolby Vision and Dolby Atmos support on
            compatible devices for no extra cost
          </li>
          <li className="mt-[16px]">
            A robust parental controls system including dedicated profiles for
            children
          </li>
          <li className="mt-[16px]">
            Up to 4 screens can stream simultaneously
          </li>
          <li className="mt-[16px]">
            Host virtual viewing parties for up to 5 personal friends with
            Groupwatch
          </li>
        </ul>
      </Accordion>
      <Accordion title="What can I watch on Disney+?">
        <p>
          With thousands of films and series from the greatest storytellers
          around the globe and more added each month, you will always find
          something to watch on Disney+
        </p>
        <br />
        <ul className="list-disc pl-[40px]">
          <li className="mt-[16px]">
            The latest live-action and animated blockbusters from Disney, like
            Encanto
          </li>
          <li className="mt-[16px]">
            Heart-warming storytelling for all ages from the masterminds at
            Pixar such as the must-see coming-of-age adventure Turning Red
          </li>
          <li className="mt-[16px]">
            Experience the ever-growing story of the Marvel Cinematic Universe
            like never before with must-see exclusive Original series from
            Marvel Studios - WandaVision, The Falcon and The Winter Soldier,
            Loki and Hawkeye
          </li>
          <li className="mt-[16px]">
            Relive the epic Skywalker Saga or stream the world&apos;s first ever
            live-action Star Wars series, The Mandalorian
          </li>
          <li className="mt-[16px]">
            Open your eyes to the beauty of our planet with fearless National
            Geographic explorers and a number of insightful documentaries
          </li>
          <li className="mt-[16px]">
            With Star you will find bingeable series that everyone is talking
            about like the 11th season of the global phenomenon The Walking Dead
            and the new Season 18 of Grey&apos;s Anatomy
          </li>
        </ul>
      </Accordion>
      <Accordion title="How much does Disney+ cost?">
        <p>
          Disney+ subscription costs €8,99 a month. Alternatively, save 15%*
          with the annual subscription at €89,90 a year and get 12 months for
          the price of 10.
        </p>
        <br />
        <p>
          *Savings compared to 12 months (€107.88) of the monthly subscription
          price
        </p>
      </Accordion>
      <Accordion title="What devices are supported?">
        <p>
          Disney+ supports mobile devices, web browsers, game consoles, set-top
          boxes, and smart TVs.
        </p>
        <br />
        <p>
          Click{" "}
          <a
            href="https://help.disneyplus.com/csp?id=csp_article_content&article=devices-supported"
            target="_blank"
            className="underline"
          >
            here
          </a>{" "}
          for the full list.
        </p>
      </Accordion>
      <Accordion title="Is there any commitment when signing up for Disney+?">
        <p>
          There are no commitments and you can cancel at any time, effective at
          the end of your current payment period. Just follow the below 5 easy
          steps:
        </p>
        <br />
        <ul className="list-decimal pl-[40px]">
          <li className="mt-[16px]">Go to www.disneyplus.com and log in</li>
          <li className="mt-[16px]">Select your Profile</li>
          <li className="mt-[16px]">Select Account</li>
          <li className="mt-[16px]">Select Cancel Subscription</li>
          <li className="mt-[16px]">Select Complete Cancellation to confirm</li>
        </ul>
        <br />
        <p>
          For more information click{" "}
          <a
            href="https://help.disneyplus.com/csp?id=csp_article_content&article=devices-supported"
            target="_blank"
            className="underline"
          >
            here.
          </a>{" "}
        </p>
      </Accordion>
    </section>
  );
};

export default Faq;
