import Image from "next/image";
import logo from "../pages/img/logo.png"

export default function Footer() {
    return (
      <>
        <footer className="flex justify-around items-center p-[40px]">
            <Image src={ logo } className="size-[100px] rounded-full"/>
            <ul>
                <li><a href="/" className="text-white hover:text-pink-400 duration-[0.5s]">Home</a></li>
                <li><a href="/about" className="text-white hover:text-pink-400 duration-[0.5s]">About us</a></li>
                <li><a href="/contact" className="text-white hover:text-pink-400 duration-[0.5s]">Join us</a></li>
                <li><a href="/product" className="text-white hover:text-pink-400 duration-[0.5s]">Our products</a></li>
            </ul>
            <ul>
                <li><a href="/test" className="text-white hover:text-pink-400 duration-[0.5s]">Testemplate</a></li>
                <li><a href="" className="text-white hover:text-red-500 duration-[0.5s]">YouTube</a></li>
                <li><a href="" className="text-white hover:text-blue-400 duration-[0.5s]">Discord</a></li>
                <li><a href="" className="text-white hover:text-pink-400 duration-[0.5s]">Instagram</a></li>
            </ul>
        </footer>
      </>
    );
}
