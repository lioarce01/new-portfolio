import React from "react"
import Card1 from "./Cards/Card1"

const Carrousel = () => {
  return (
    <div className="bg-[#141414] dark:bg-[#fcf9df]">
      <h1 className="items-center justify-center flex p-4 pb-8 text-gray-300 font-bold text-2xl dark:text-[#141414]">
        Projects
      </h1>
      <div className="w-full justify-center flex items-center">
        <div className="grid grid-cols items-center">
          <Card1 />
        </div>
      </div>
      <div className="flex justify-center py-4">
        <a
          href="/works"
          className="mb-8 text-gray-300 border px-8 py-2 rounded-lg hover:bg-gray-300 hover:text-[#141414] transition duration-300 font-light dark:bg-[#FFFAF0] dark:hover:border-[#141414] dark:border-[#FFFAF0] dark:text-[#141414]"
        >
          See more
        </a>
      </div>
    </div>
  )
}

export default Carrousel
