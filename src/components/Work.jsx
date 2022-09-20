import React from "react"

const Work = () => {
  return (
    <div className="bg-[#141414] text-start justify-center flex dark:bg-[#fcf9df]">
      <div className="w-[65vh] text-gray-300 dark:text-[#141414]">
        <div className="p-4">
          <div className="p-4">
            <h1 className="text-2xl font-bold">Lionel Arce</h1>
            <h2 className="text-gray-300 font-light dark:text-[#636363]">
              Fullstack Developer
            </h2>
          </div>
          <div className="p-4">
            <h1 className="pb-2 text-xl font-bold">Work</h1>
            <p className="text-justify">
              Lionel Arce is a full-stack developer based in Argentina with a
              great passion for designing and building websites.
              He has worked with different technologies such as Javascript, ReactJS, NextJS, 
              NodeJS. He is currently studying Fullstack Development at Henry and learning
              new technologies every day. At the moment he is looking for his first job as a
              software developer.
            </p>
          </div>
          <div className="flex justify-center py-4">
            <a
              href="https://github.com/lioarce01"
              className="border px-8 py-2 rounded-lg hover:bg-gray-300 hover:text-[#141414] transition duration-300 font-light dark:bg-[#FFFAF0] dark:hover:border-[#141414] dark:border-[#FFFAF0]"
            >
              My portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
