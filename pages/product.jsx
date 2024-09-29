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

export default function Product() {
    return (
      <>
        <div className="w-[100%] h-[100vh] flex justify-center items-center flex-col">
          <h1 className="text-[36px] text-white font-customMono">What about store of 1,000s arts ?</h1>
          <p className="text-white">Maybe you would like to buy or use free arts</p>
       </div>
       <div className="p-[30px]">
       <h1 className="text-pink-400 text-[36px]">It free arts for expample:</h1><br />
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
        </div><br /><br />
        <h1 className="text-pink-400 text-[36px]">Maybe you want to buy VIP status</h1>
        <div className="flex justify-around mt-5">
          <div className="w-[300px] h-[400px] flex flex-col gap-5 justify-center items-center border-[1px] border-whtie rounded-lg">
            <center><h1 className="text-pink-400 text-[26px]">VIP A</h1></center>
            <ul>
              <li className="text-white">Premium arts</li>
              <li className="text-white">Art creator AI</li>
              <li className="text-white">Chating with art creators</li>
              <li className="text-white">Storage ( 1,000 + arts )</li>
              <li className="text-white">Sessions ( 3 + sessions )</li>
              <li className="text-white">Free art delivery ( 1 / week )</li>
            </ul>
            <button className="p-[10px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s]">Buy this statsus</button>
          </div>
          <div className="w-[300px] h-[400px] flex flex-col gap-5 justify-center items-center border-[1px] border-whtie rounded-lg">
            <center><h1 className="text-pink-400 text-[26px]">VIP B</h1></center>
            <ul>
              <li className="text-white">Premium arts</li>
              <li className="text-white">Art creator AI</li>
              <li className="text-white">Chating with art creators</li>
              <li className="text-white">Storage ( 10,000 + arts )</li>
              <li className="text-white">Sessions ( 5 + sessions )</li>
              <li className="text-white">Free art delivery ( 3 / week )</li>
            </ul>
            <button className="p-[10px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s]">Buy this statsus</button>
          </div>
          <div className="w-[300px] h-[400px] flex flex-col gap-5 justify-center items-center border-[1px] border-whtie rounded-lg">
            <center><h1 className="text-pink-400 text-[26px]">VIP C</h1></center>
            <ul>
              <li className="text-white">Premium arts</li>
              <li className="text-white">Art creator AI</li>
              <li className="text-white">Chating with art creators</li>
              <li className="text-white">Storage ( 100,000 + arts )</li>
              <li className="text-white">Sessions ( 7 + sessions )</li>
              <li className="text-white">Free art delivery ( 5 / week )</li>
            </ul>
            <button className="p-[10px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s]">Buy this statsus</button>
          </div>
        </div>
          <h1 className="text-[36px] text-pink-400 mt-10">More arts: ( if you want watch premium art, buy VIP A,B or C )</h1>
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
        <div className="flex">
          <div>
            <Image src={ a5 } className="size-[200px]" />
            <Image src={ a6 } className="size-[200px]" />
            <Image src={ a7 } className="size-[200px]" />
            <Image src={ a8 } className="size-[200px]" />
          </div>
          <div>
            <div className="flex">
              <Image src={ a1 } className="size-[400px]" />
              <Image src={ a2 } className="size-[400px]" />
            </div>
            <div className="flex">
              <Image src={ a3 } className="size-[400px]" />
              <Image src={ a4 } className="size-[400px]" />
            </div>
          </div>
          <div>
            <Image src={ a9 } className="size-[200px]" />
            <Image src={ a10 } className="size-[200px]" />
            <Image src={ a11 } className="size-[200px]" />
            <Image src={ a12 } className="size-[200px]" />
          </div>
        </div>
        <div className="flex">
          <div>
            <Image src={ a1 } className="size-[200px]" />
            <Image src={ a2 } className="size-[200px]" />
            <Image src={ a3 } className="size-[200px]" />
            <Image src={ a4 } className="size-[200px]" />
          </div>
          <div>
            <div className="flex">
              <Image src={ a9 } className="size-[400px]" />
              <Image src={ a10 } className="size-[400px]" />
            </div>
            <div className="flex">
              <Image src={ a11 } className="size-[400px]" />
              <Image src={ a12 } className="size-[400px]" />
            </div>
          </div>
          <div>
            <Image src={ a5 } className="size-[200px]" />
            <Image src={ a6 } className="size-[200px]" />
            <Image src={ a7 } className="size-[200px]" />
            <Image src={ a8 } className="size-[200px]" />
          </div>
        </div>
        <div className="flex">
          <div>
            <Image src={ a1 } className="size-[200px]" />
            <Image src={ a2 } className="size-[200px]" />
            <Image src={ a3 } className="size-[200px]" />
            <Image src={ a4 } className="size-[200px]" />
          </div>
          <div>
            <div className="flex">
              <Image src={ a7 } className="size-[400px]" />
              <Image src={ a9 } className="size-[400px]" />
            </div>
            <div className="flex">
              <Image src={ a1 } className="size-[400px]" />
              <Image src={ a11 } className="size-[400px]" />
            </div>
          </div>
          <div>
            <Image src={ a9 } className="size-[200px]" />
            <Image src={ a10 } className="size-[200px]" />
            <Image src={ a11 } className="size-[200px]" />
            <Image src={ a12 } className="size-[200px]" />
          </div>
        </div>
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
    );
}
