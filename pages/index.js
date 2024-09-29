import Image from "next/image";
import a1 from "./img/arts/1.jpg"
import a2 from "./img/arts/2.jpg"
import a3 from "./img/arts/3.jpg"
import a4 from "./img/arts/4.jpg"
import a5 from "./img/arts/5.jpg"
import a6 from "./img/arts/6.jpg"
import a7 from "./img/arts/7.jpg"
import a8 from "./img/arts/8.jpg"
import a9 from "./img/arts/9.jpg"
import a10 from "./img/arts/10.jpg"
import a11 from "./img/arts/11.jpg"
import a12 from "./img/arts/12.jpg"

export default function Home() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center flex-col">
        <h1 className="text-[36px] text-white font-customMono">Welcome to website <span className="text-pink-400">ART LIST</span> !</h1>
        <p className="text-white">In our website you can find many interesting arts</p>
      </div>
      <div className="p-[30px] *:font-roboto">
        <div className="flex gap-10">
          <Image src={ a1 } className="size-[450px] rounded-lg" />
          <div>
            <h1 className="text-pink-400 text-[36px] font-customMono">The best unique arts</h1><br />
            <p className="text-white ">Discover an exclusive collection of one-of-a-kind art pieces on our website! Immerse yourself in the captivating world of unique creations crafted by legendary artists. Each artwork is not just a piece of art, but a heartfelt expression, created with passion and dedication over the years. From stunning images to intricate hardware works, our collection offers something truly special for every art lover. Remember, these masterpieces are available only on our website, so don’t miss the chance to own a piece of art that speaks to your soul!</p>
            <br /><button className="p-[10px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s]"><a href="/product">Our products</a></button>
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div>
            <h1 className="text-pink-400 text-[36px] font-customMono">Dark and really strange arts !</h1><br />
            <p className="text-white ">Create your own account today and unlock a world of artistic possibilities! With your account, you can enjoy a wide range of features, from viewing free artworks to purchasing exclusive VIP pieces. You’ll even have the chance to connect directly with the creator of this website for a truly personalized experience. Our platform offers numerous free functions—simply register or log in if you already have an account, and start exploring! Watch videos on how to craft your own unique and beautiful art, browse through creations made by other talented artists, and immerse yourself in a vibrant community of art enthusiasts. Join us now and take full advantage of the many free and valuable features our website has to offer!</p>
            <br /><div className="flex gap-5"><button className="p-[10px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s]">Login to yout accout</button><button className="p-[10px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s]">Register new account</button></div>
          </div>
          <Image src={ a2 } className="size-[450px] rounded-lg" />
        </div>
        <h1 className="text-pink-400 text-[36px]">Let's watch our arts galary !</h1><br />
        <div className="flex">
          <div>
            <Image src={ a1 } className="size-[200px]" />
            <Image src={ a2 } className="size-[200px]" />
            <Image src={ a3 } className="size-[200px]" />
            <Image src={ a4 } className="size-[200px]" />
          </div>
          <div>
            <div className="flex">
              <Image src={ a5 } className="size-[400px]" />
              <Image src={ a6 } className="size-[400px]" />
            </div>
            <div className="flex">
              <Image src={ a7 } className="size-[400px]" />
              <Image src={ a8 } className="size-[400px]" />
            </div>
          </div>
          <div>
            <Image src={ a9 } className="size-[200px]" />
            <Image src={ a10 } className="size-[200px]" />
            <Image src={ a11 } className="size-[200px]" />
            <Image src={ a12 } className="size-[200px]" />
          </div>
        </div>
      </div>
    </>
  )
}
