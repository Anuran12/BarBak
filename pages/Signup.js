import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../img/Signup.png";
import Link from "next/link";

export default function Signup() {
  return (
    <div>
      <Header />
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ] lg:h-[150vh] py-24 lg:py-0">
        <div className="absolute !top-[20px] !left-[80px] hidden lg:block">
          <Image src={HeroBg} alt="hero bg" width={700} height={700} />
        </div>
        <div className="flex flex-row w-full h-full justify-center items-center">
          <div className="lg:w-1/2"></div>
          <div className="lg:w-1/2 w-[80%] flex flex-col justify-center items-center -mb-20">
            <h1 className=" text-[40px] text-[#F7BC06] font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              Welcome
            </h1>
            <div className="lg:w-2/3 w-[100%] !bg-white/20 rounded-3xl flex flex-col justify-center lg:p-10 p-5">
              <div class="">
                <label class="block mb-2 text-[24px] text-[#F7BC06]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name*"
                  class="block w-full px-5 py-2.5 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-[24px] text-[#F7BC06]">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address*"
                  class="block w-full px-5 py-2.5 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-[24px] text-[#F7BC06]">
                  Mobile Number
                </label>
                <input
                  type="number"
                  placeholder="Mobile Number*"
                  class="block w-full px-5 py-2.5 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-[24px] text-[#F7BC06]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email*"
                  class="block w-full px-5 py-2.5 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-[24px] text-[#F7BC06]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password*"
                  class="block w-full px-5 py-2.5 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-[24px] text-[#F7BC06]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  class="block w-full px-5 py-2.5 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className=" flex flex-row mt-6">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree to the{" "}
                  <span className="text-[#F7BC06] underline underline-offset-2">
                    <Link href="/TermsandConditions">terms and conditions</Link>
                  </span>{" "}
                  and give my consent to receive advertising messages
                </label>
              </div>

              <button class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 overflow-hidden relative hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-6 py-2 mt-10 font-bold lg:text-[24px] w-full flex items-center justify-center rounded-full  group">
                <span class="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Sign Up
              </button>
              <button class="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 overflow-hidden relative hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-6 py-2 mt-5 font-bold md:text-[24px] w-full flex items-center justify-center rounded-full  group">
                <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  className=" mr-2 lg:w-10 w-7 h-auto"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Signup With Google
              </button>
            </div>
            <h1 className="text-white mt-6 text-[20px]">
              Already have an account?{" "}
              <Link href={"/Login"}>
                <span className="text-[#F7BC06] underline">Sign In</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
