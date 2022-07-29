import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { IoLogoDiscord } from "react-icons/io5"

const Contact = () => {
  return (
    <div className="bg-[#141414] text-center flex justify-center items-end h-[300px] dark:bg-[#fcf9df]">
      <div className=" text-gray-300">
        <div className="py-4">
          <h1 className=" py-3 font-bold text-2xl text-center dark:text-[#141414]">
            Contact
          </h1>
          <div className="flex my-4 justify-center">
            <a
              className="flex justify-center p-3 items-center rounded-md hover:bg-gray-300 hover:text-[#141414] transition duration-300 font-light md:mx-2 dark:text-[#141414] dark:bg-[#FFFAF0] dark:border-[#FFFAF0] dark:hover:border-[#141414]"
              href="https://github.com/lioarce01"
            >
              <AiOutlineGithub />
              <p className="px-1">Github</p>
            </a>
            <a
              className="flex justify-center p-3 items-center rounded-md hover:bg-gray-300 hover:text-[#141414] transition duration-300 font-light md:mx-2 dark:text-[#141414] dark:bg-[#FFFAF0] dark:border-[#FFFAF0] dark:hover:border-[#141414]"
              href="https://www.linkedin.com/in/lionel-arce-62b873177/"
            >
              <AiOutlineLinkedin />
              <p className="px-1">LinkedIn</p>
            </a>
            <a
              className="flex justify-center p-3 items-center rounded-md hover:bg-gray-300 hover:text-[#141414] transition duration-300 font-light md:mx-2 dark:text-[#141414] dark:bg-[#FFFAF0] dark:border-[#FFFAF0] dark:hover:border-[#141414]"
              href="/"
            >
              <IoLogoDiscord />
              <p className="px-1">Lzvick#5874</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
