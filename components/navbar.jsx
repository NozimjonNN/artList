import Image from "next/image";
import logo from "../pages/img/logo.png"
import bg from "../pages/img/bg.png"

export default function Navbar() {
    return (
      <>
            <nav className="flex p-[10px] w-[100%] items-center justify-around bg-black ">
                <Image src={ logo } className="size-[70px] rounded-full" />
                <ul className="list-none flex gap-3 items-center justify-around">
                    <li><a className="text-white" href="/">Home</a></li>
                    <li><a className="text-white" href="/about">About us</a></li>
                    <li><a className="text-white" href="/product">Our products</a></li>
                    <li><a className="text-white" href="/categ">Catygories</a></li>
                    <li><a className="text-white" href="/test">Testiomonals</a></li>
                    <li><a className="text-white" href="/contact">Contuct us</a></li>
                </ul>
            </nav>
      </>
    );
}


// bg-[url('../pages/img/bg.png')]
