import React from "react"
import Card10 from "./Cards/Card10"

const Carrousel = () => {
  return (
    <div className="bg-[#141414] dark:bg-[#fcf9df]">
      <h1 className="items-center justify-center flex p-4 pb-8 text-gray-300 font-bold text-2xl dark:text-[#141414]">
        Latest Project
      </h1>
      <div className="flex items-center justify-center w-full">
        <div className="grid items-center grid-cols">
          <Card10 />
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
