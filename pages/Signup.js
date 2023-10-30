import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../img/hero_bg.png";
import Link from "next/link";

export default function Signup() {
  return (
    <div>
      <Header />
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ] h-[150vh]">
        <div className="absolute !top-[300px] !left-[80px]">
          <Image
            src={HeroBg}
            alt="hero bg"
            width={700}
            height={250}
            style={{ opacity: "0.2" }}
          />
        </div>
        <div className="flex flex-row w-full h-full justify-center items-center">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex flex-col justify-center items-center -mb-20">
            <h1 className=" text-[40px] text-[#F7BC06] font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              Welcome
            </h1>
            <div className="w-2/3 !bg-white/20 rounded-3xl flex flex-col justify-center p-10">
              <h1 className="text-[24px] text-[#F7BC06]">Name</h1>
              <input
                placeholder="Name*"
                className=" bg-transparent border-b-2 outline-none !focus:outline-none active:border-none p-1 border-[#F7BC06]"
              />
              <h1 className="text-[24px] mt-10 text-[#F7BC06]">Address</h1>
              <input
                placeholder="Address*"
                className=" bg-transparent border-b-2 outline-none !focus:outline-none active:border-none p-1 border-[#F7BC06]"
              />
              <h1 className="text-[24px] mt-10 text-[#F7BC06]">Phone</h1>
              <input
                placeholder="Phone*"
                className=" bg-transparent border-b-2 outline-none !focus:outline-none active:border-none p-1 border-[#F7BC06]"
              />
              <h1 className="text-[24px] mt-10 text-[#F7BC06]">Email</h1>
              <input
                placeholder="Email*"
                className=" bg-transparent border-b-2 outline-none !focus:outline-none active:border-none p-1 border-[#F7BC06]"
              />
              <h1 className="text-[24px] mt-10 text-[#F7BC06]">Password</h1>
              <input
                placeholder="Password*"
                type="password"
                className=" bg-transparent border-b-2 outline-none !focus:outline-none active:border-none p-1 border-[#F7BC06]"
              />
              <h1 className="text-[24px] mt-10 text-[#F7BC06]">
                Confirm Password
              </h1>
              <input
                placeholder="Confirm Password*"
                type="password"
                className=" bg-transparent border-b-2 outline-none !focus:outline-none active:border-none p-1 border-[#F7BC06]"
              />
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
                  terms and conditions
                </span>{" "}
                and give my consent to receive advertising messages
              </label>
              <button className="mt-10 bg-[#F7BC06] w-full px-6 rounded-full py-2 text-[24px] font-bold">
                Sign Up
              </button>
              <button className="mt-5 bg-white w-full flex items-center justify-center px-6 rounded-full py-2 text-[24px] font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  className=" mr-2"
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
