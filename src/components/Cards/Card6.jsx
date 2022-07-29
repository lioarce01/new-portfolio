import React from "react"
import thumbFinance from "../../assets/images/thumbFinance.png"
import { AiOutlineGithub } from "react-icons/ai"
import { HiExternalLink } from "react-icons/hi"

const Card = () => {
  return (
    <div className="mb-4 mx-6">
      <div className="bg-[#141414] max-w-xs md:max-w-md rounded overflow-hidden shadow-lg border border-[#3b3b3b] dark:bg-[#FFFAF0] dark:border-[#FFFAF0]">
        <img className="w-full" src={thumbFinance} alt="Crypto Tracker" />
        <div className="px-2">
          <div className="font-bold text-gray-300 text-xl my-2 dark:text-[#141414]">
            Data Finance Website
          </div>
          <p className="text-gray-300 font-light text-base dark:text-[#141414]">
            Data Finance Frontend Website with ReactJS and TailwindCSS
          </p>
        </div>
        <div className="py-4 px-2 items-center justify-between flex">
          <a
            href="https://github.com/lioarce01/data-finance-react-app"
            className="inline-block rounded-md mr-2 px-3 border py-1 text-sm font-semibold text-white mb-2 hover:bg-gray-300 hover:text-[#141414] transition duration-300 dark:border-[#FFFAF0] dark:hover:border-[#141414] dark:hover:bg-[#FFFAF0] dark:shadow-lg"
          >
            <AiOutlineGithub className="w-[25px] h-auto dark:text-[#141414]" />
          </a>
          <a
            href="https://data-finance-react-app.vercel.app"
            className="inline-block rounded-md px-3 border py-1 text-sm font-semibold text-white mb-2 hover:bg-gray-300 hover:text-[#141414] transition duration-300 dark:border-[#FFFAF0] dark:hover:border-[#141414] dark:hover:bg-[#FFFAF0] dark:shadow-lg"
          >
            <HiExternalLink className="w-[25px] h-auto dark:text-[#141414]" />
          </a>
          <div className="justify-end flex items-end mx-4 text-gray-300">
            <p className="mx-[1px] rounded-xl p-1 hover:bg-gray-300 transition duration-300 hover:text-[#141414] md:mx-[2px] dark:text-[#141414] dark:bg-[#fcf9df]">
              #ReactJs
            </p>
            <p className="mx-[1px] rounded-xl p-1 hover:bg-gray-300 transition duration-300 hover:text-[#141414] md:mx-[2px] dark:text-[#141414] dark:bg-[#fcf9df]">
              #TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
