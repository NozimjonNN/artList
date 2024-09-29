import Image from "next/image";
import team from "./img/team.png"
import m1 from "./img/members/1.jpg"
import m2 from "./img/members/2.jpg"
import m3 from "./img/members/3.jpg"

export default function About() {
    return (
      <>
        <div className="w-[100%] h-[100vh] flex justify-center items-center flex-col">
          <h1 className="text-[36px] text-white font-customMono">Do you want to know more <span className="text-pink-400">about us</span> ?</h1>
          <p className="text-white">In this page you will know more about our team, peolple and helpers !</p>
        </div>
        <div className="p-[30px]">
            <div className="flex">
            <div>
                <h1 className="text-pink-400 font-customMono text-[36px]">About our team !</h1>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius placeat maxime, modi at reprehenderit deserunt provident neque. Laudantium optio, in ex iste at omnis magnam id porro nisi quo doloremque mollitia illum repellendus exercitationem nam facilis similique culpa, perspiciatis eaque eius, tenetur saepe laborum vero iure. Ducimus dignissimos unde numquam possimus quisquam dolorum soluta earum, maxime dolores tempore vitae nam nulla quibusdam minima officiis, quos laborum odit rem repellat deleniti voluptatum? Exercitationem velit dignissimos esse pariatur eos odit in, atque ipsa rem minus natus veritatis aliquam ratione quas error earum reiciendis accusamus neque eligendi assumenda! Eaque culpa impedit iusto perspiciatis.</p>
            </div>
                <Image src={ team } className="size-[500px] rounded-lg " />
            </div>
            <center><h1 className="text-pink-400 font-customMono text-[36px] ">Our members</h1></center>
            <div className="rounded-lg border-[1px] border-white flex">
                <div className="p-[20px]">
                  <h1 className="text-pink-400 font-customMono text-[36px]">Stephan Karlos</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius placeat maxime, modi at reprehenderit deserunt provident neque. Laudantium optio, in ex iste at omnis magnam id porro nisi quo doloremque mollitia illum repellendus exercitationem nam facilis similique culpa, perspiciatis eaque eius, tenetur saepe laborum vero iure. Ducimus dignissimos unde numquam possimus quisquam dolorum soluta earum, maxime dolores tempore vitae nam nulla quibusdam minima officiis, quos laborum odit rem repellat deleniti voluptatum? Exercitationem velit dignissimos esse pariatur eos odit in, atque ipsa rem minus natus veritatis aliquam ratione quas error earum reiciendis accusamus neque eligendi assumenda! Eaque culpa impedit iusto perspiciatis.</p>
                  <br />
                  <button className="p-[10px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s]">Chat with him</button>
                </div>
                <Image src={ m1 } className="w-[500px] h-[335] rounded-lg border-[1px] border-white" />
            </div>
            <br /><br />
            <div className="rounded-lg border-[1px] border-white flex">
                <Image src={ m2 } className="w-[500px] h-[335] rounded-lg border-[1px] border-white" />
                <div className="p-[20px]">
                  <h1 className="text-pink-400 font-customMono text-[36px]">Frank Fosper</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius placeat maxime, modi at reprehenderit deserunt provident neque. Laudantium optio, in ex iste at omnis magnam id porro nisi quo doloremque mollitia illum repellendus exercitationem nam facilis similique culpa, perspiciatis eaque eius, tenetur saepe laborum vero iure. Ducimus dignissimos unde numquam possimus quisquam dolorum soluta earum, maxime dolores tempore vitae nam nulla quibusdam minima officiis, quos laborum odit rem repellat deleniti voluptatum? Exercitationem velit dignissimos esse pariatur eos odit in, atque ipsa rem minus natus veritatis aliquam ratione quas error earum reiciendis accusamus neque eligendi assumenda! Eaque culpa impedit iusto perspiciatis.</p>
                  <br />
                  <button className="p-[10px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s]">Chat with him</button>
                </div>
            </div>
            <br /><br />
            <div className="rounded-lg border-[1px] border-white flex">
                <div className="p-[20px]">
                  <h1 className="text-pink-400 font-customMono text-[36px]">Alex Doe</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius placeat maxime, modi at reprehenderit deserunt provident neque. Laudantium optio, in ex iste at omnis magnam id porro nisi quo doloremque mollitia illum repellendus exercitationem nam facilis similique culpa, perspiciatis eaque eius, tenetur saepe laborum vero iure. Ducimus dignissimos unde numquam possimus quisquam dolorum soluta earum, maxime dolores tempore vitae nam nulla quibusdam minima officiis, quos laborum odit rem repellat deleniti voluptatum? Exercitationem velit dignissimos esse pariatur eos odit in, atque ipsa rem minus natus veritatis aliquam ratione quas error earum reiciendis accusamus neque eligendi assumenda! Eaque culpa impedit iusto perspiciatis.</p>
                  <br />
                  <button className="p-[10px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s]">Chat with her</button>
                </div>
                <Image src={ m3 } className="w-[500px] h-[335] rounded-lg border-[1px] border-white" />
            </div>
        </div>
      </>
    );
  }
