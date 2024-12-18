import Image from "next/legacy/image";
import UserImg from "../img/user.png";
import PepperBG from "../img/BG_Images/pepper.png";
import LeafBG from "../img/BG_Images/Leaf2.png";
import DotBG from "../img/BG_Images/dot2.png";
import ChiefBG from "../img/BG_Images/chief.png";

export default function Feedback() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="lg:text-[40px] md:text-[35px] text-[25px] text-center mt-[100px] mb-[50px] xs:mb-0 font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
        <span className="text-[#F7BC06]">Discover</span> What Others Say
      </h1>
      <section class="container flex justify-center items-center">
        <div
          id="carousel"
          className="flex justify-center items-center w-full ml-[30%]"
        >
          <figure className="flex lg:flex-row flex-col w-full">
            <div className="flex flex-row justify-center items-center lg:w-1/2">
              <div>
                <Image src={UserImg} alt="user ing" />
              </div>
              <div className="flex flex-col justify-start text-[12px] ml-2 text-start">
                <h1>Name</h1>
                <p>5 September 2023</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-row">
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
              </div>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </figure>
          <figure className="flex lg:flex-row flex-col w-full">
            <div className="flex flex-row justify-center items-center lg:w-1/2">
              <div>
                <Image src={UserImg} alt="user ing" />
              </div>
              <div className="flex flex-col justify-start text-[12px] ml-2 text-start">
                <h1>Name</h1>
                <p>5 September 2023</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-row">
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
              </div>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </figure>
          <figure className="flex lg:flex-row flex-col w-full">
            <div className="flex flex-row justify-center items-center lg:w-1/2">
              <div>
                <Image src={UserImg} alt="user ing" />
              </div>
              <div className="flex flex-col justify-start text-[12px] ml-2 text-start">
                <h1>Name</h1>
                <p>5 September 2023</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-row">
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
              </div>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </figure>
          <figure className="flex lg:flex-row flex-col w-full">
            <div className="flex flex-row justify-center items-center lg:w-1/2">
              <div>
                <Image src={UserImg} alt="user ing" />
              </div>
              <div className="flex flex-col justify-start text-[12px] ml-2 text-start">
                <h1>Name</h1>
                <p>5 September 2023</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-row">
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
                <svg
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    fill="#F7BC06"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
              </div>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </figure>
        </div>
      </section>
      <div className=" absolute right-0 lg:w-[200px] w-[80px] lg:mt-10 -mt-14 lg:mr-28 h-auto">
        <Image src={LeafBG} className="" />
      </div>
      <div className=" absolute left-0 lg:w-[100px] w-[60px] -mt-56 lg:ml-[100px] ml-2 h-auto">
        <Image src={PepperBG} className="" />
      </div>
      <div className=" absolute right-0 lg:w-[30px] w-[15px] lg:mt-96 mt-80 lg:mr-64 mr-80 h-auto">
        <Image src={DotBG} className="" />
      </div>

      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover w-full">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain  lg:px-[120px]">
            <h1 className="text-white text-center pt-10 lg:text-[40px] md:text-[35px] text-[25px] font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              Leave your <span className="text-[#F7BC06]">feedback</span>
            </h1>
            <p className="text-white  mt-4 mb-4 text-center">
              Your opinion is important to us
            </p>
            <div className="w-full flex justify-center items-center">
              <div className="text-white w-2/3">
                <div class="relative z-0 my-8">
                  <input
                    type="text"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-[20px] text-white bg-transparent border-0 border-b-2 border-white/50 appearance-none focus:outline-none focus:ring-0 focus:border-[#F7BC06] peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-[20px] text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#F7BC06] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Your Name
                  </label>
                </div>
                <div class="relative z-0 my-8">
                  <input
                    type="number"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-[20px] text-white bg-transparent border-0 border-b-2 border-white/50 appearance-none focus:outline-none focus:ring-0 focus:border-[#F7BC06] peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-[20px] text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#F7BC06] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Phone
                  </label>
                </div>
                <div class="relative z-0 my-8">
                  <input
                    type="text"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-[20px] text-white bg-transparent border-0 border-b-2 border-white/50 appearance-none focus:outline-none focus:ring-0 focus:border-[#F7BC06] peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-[20px] text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#F7BC06] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email
                  </label>
                </div>
                <div class="relative z-0 my-8">
                  <input
                    type="text"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-[20px] text-white bg-transparent border-0 border-b-2 border-white/50 appearance-none focus:outline-none focus:ring-0 focus:border-[#F7BC06] peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-[20px] text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#F7BC06] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Your Message
                  </label>
                </div>
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
                    <a href={"/TermsandConditions"}>terms and conditions</a>
                  </span>{" "}
                  and give my consent to receive advertising messages
                </label>
                <br />
                <button
                  className="bg-[url('../img/btn_border_white.png')] lg:ml-28 bg-no-repeat bg-center bg-contain p-8 mt-10 text-white w-fit"
                  href={"/"}
                >
                  LEAVE A REVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute lg:w-[200px] w-[80px] lg:-mt-44 lg:ml-28 -mt-[90px] rotate-180 h-auto">
          <Image src={LeafBG} className="" />
        </div>
        <div className=" absolute lg:w-[30px] w-[15px] -mt-72 ml-56 h-auto">
          <Image src={DotBG} className="" />
        </div>
        <div className=" absolute lg:w-[200px] w-[110px] lg:-mt-[340px] lg:mr-28 -mt-[180px] mr-2 right-0 h-auto">
          <Image src={ChiefBG} className="" />
        </div>
      </div>
    </div>
  );
}
