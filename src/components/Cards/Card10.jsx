import React from "react"
import thumbTerminal from "../../assets/images/thumbTerminal.png"
import { AiOutlineGithub } from "react-icons/ai"
import { HiExternalLink } from "react-icons/hi"

const Card = () => {
  return (
    <div className="mx-6 mb-4">
      <div className="bg-[#141414] max-w-xs md:max-w-md rounded overflow-hidden shadow-lg border border-[#3b3b3b] dark:bg-[#FFFAF0] dark:border-[#FFFAF0]">
        <img className="w-full" src={thumbTerminal} alt="Terminal Emulator" />
        <div className="px-2">
          <div className="font-bold text-gray-300 text-xl my-2 dark:text-[#141414]">
            Terminal emulator website
          </div>
          <p className="text-gray-300 font-light text-base dark:text-[#141414]">
            Terminal emulator website with ReactJS and CSS
          </p>
        </div>
        <div className="flex items-center justify-between px-2 py-4">
          <a
            href="https://github.com/lioarce01/react-terminal"
            className="inline-block rounded-md mr-2 px-3 border py-1 text-sm font-semibold text-white mb-2 hover:bg-gray-300 hover:text-[#141414] transition duration-300 dark:border-[#FFFAF0] dark:hover:border-[#141414] dark:hover:bg-[#FFFAF0] dark:shadow-lg"
          >
            <AiOutlineGithub className="w-[25px] h-auto dark:text-[#141414]" />
          </a>
          <a
            href="https://react-terminal-la.vercel.app"
            className="inline-block rounded-md px-3 border py-1 text-sm font-semibold text-white mb-2 hover:bg-gray-300 hover:text-[#141414] transition duration-300 dark:border-[#FFFAF0] dark:hover:border-[#141414] dark:hover:bg-[#FFFAF0] dark:shadow-lg"
          >
            <HiExternalLink className="w-[25px] h-auto dark:text-[#141414]" />
          </a>
          <div className="flex items-end justify-end mx-4 text-gray-300">
            <p className="mx-[1px] rounded-xl p-1 hover:bg-gray-300 transition duration-300 hover:text-[#141414] md:mx-[2px] dark:text-[#141414] dark:bg-[#fcf9df]">
              #ReactJs
            </p>
            <p className="mx-[1px] rounded-xl p-1 hover:bg-gray-300 transition duration-300 hover:text-[#141414] md:mx-[2px] dark:text-[#141414] dark:bg-[#fcf9df]">
              #CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
