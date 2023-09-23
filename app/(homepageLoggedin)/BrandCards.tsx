import Image from "next/image";
import disney from "../../public/assets/img/brands/disney.png";
import pixar from "../../public/assets/img/brands/pixar.png";
import marvel from "../../public/assets/img/brands/marvel.png";
import starwars from "../../public/assets/img/brands/starwars.png";
import natgeo from "../../public/assets/img/brands/natgeo.png";
import star from "../../public/assets/img/brands/star.png";
import Link from "next/link";

const BrandCards = () => {
  return (
    <div className="brand-cards">
      <Link href="/brands/disney" className="brand group relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="brand-vid"
        >
          <source src="assets/img/brands/disney-vid.mp4" type="video/mp4" />
        </video>
        <Image src={disney} alt="Disney" className="brand-img" />
      </Link>
      <Link href="/brands/pixar" className="brand group relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="brand-vid"
        >
          <source src="assets/img/brands/pixar-vid.mp4" type="video/mp4" />
        </video>
        <Image src={pixar} alt="Pixar" className="brand-img" />
      </Link>
      <Link href="/brands/marvel" className="brand group relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="brand-vid"
        >
          <source src="assets/img/brands/marvel-vid.mp4" type="video/mp4" />
        </video>
        <Image src={marvel} alt="Marvel" className="brand-img" />
      </Link>
      <Link href="/brands/starwars" className="brand group relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="brand-vid"
        >
          <source src="assets/img/brands/starwars-vid.mp4" type="video/mp4" />
        </video>
        <Image src={starwars} alt="Star Wars" className="brand-img" />
      </Link>
      <Link href="/brands/nationalgeographic" className="brand group relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="brand-vid"
        >
          <source src="assets/img/brands/natgeo-vid.mp4" type="video/mp4" />
        </video>
        <Image src={natgeo} alt="National Geographic" className="brand-img" />
      </Link>
      <Link href="/brands/star" className="brand group relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="brand-vid"
        >
          <source src="assets/img/brands/star-vid.mp4" type="video/mp4" />
        </video>
        <Image src={star} alt="Star" className="brand-img" />
      </Link>
    </div>
  );
};

export default BrandCards;
