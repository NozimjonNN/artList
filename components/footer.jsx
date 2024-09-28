import Image from "next/image";
import logo from "../pages/img/logo.png"

export default function Footer() {
    return (
      <>
        <footer className="flex justify-around items-center p-[40px]">
            <Image src={ logo } className="size-[100px] rounded-full"/>
            <ul>
                <li><a href="/" className="text-white">Home</a></li>
                <li><a href="/about" className="text-white">About us</a></li>
                <li><a href="/contact" className="text-white">Join us</a></li>
                <li><a href="/product" className="text-white">Our products</a></li>
            </ul>
            <ul>
                <li><a href="/test" className="text-white">Testemplate</a></li>
                <li><a href="" className="text-white">YouTube</a></li>
                <li><a href="" className="text-white">Discord</a></li>
                <li><a href="" className="text-white">Instagram</a></li>
            </ul>
        </footer>
      </>
    );
}
