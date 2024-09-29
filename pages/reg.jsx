
export default function Reg() {
    return (
      <>
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
          <form className="p-[40px] border-[1px] border-white rounded-lg flex flex-col gap-5">
            <center className="text-pink-400 text-[36px]">Register new account</center>
            <div className="mt-4">
              <h3 className="text-white text-[20px]">Your login</h3>
              <input type="text" className="w-[100%] text-[15px] rounded-sm p-1 " />
            </div>
            <div>
              <h3 className="text-white text-[20px]">Your Password</h3>
              <input type="text" className="w-[100%] text-[15px] rounded-sm p-1 " />
            </div>
            <div>
              <h3 className="text-white text-[20px]">Your Mail</h3>
              <input type="mail" className="w-[100%] text-[15px] rounded-sm p-1 " />
            </div>
            <button className="mt-10 p-[5px] flex rounded-lg bg-black text-white border-white border-[1px] hover:bg-white hover:text-black duration-[0.5s] justify-center items-center">Register</button>
            <a href="/login" className="text-white duration-[0.5s] hover:text-pink-400">I already have an account</a>
            </form>
        </div>
      </>
    );
}
