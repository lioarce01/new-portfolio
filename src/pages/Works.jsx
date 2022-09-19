import React from "react"
import Contact from "../components/Contact"
import Card1 from "../components/Cards/Card1"
import Card2 from "../components/Cards/Card2"
import Card3 from "../components/Cards/Card3"
import Card4 from "../components/Cards/Card4"
import Card5 from "../components/Cards/Card5"
import Card6 from "../components/Cards/Card6"
import Card7 from "../components/Cards/Card7"
import Card8 from "../components/Cards/Card8"
import Card9 from "../components/Cards/Card9"
import Card10 from "../components/Cards/Card10"

const Works = () => {
  return (
    <div className="bg-[#141414] h-full text-start justify-center flex dark:bg-[#fcf9df]">
      <div className="w-[100vh]">
        <div className="py-8 text-2xl font-bold">
          <h1 className="text-gray-300 px-8 dark:text-[#141414]">Works</h1>
        </div>
        <div className="pl-6 grid-cols md:grid md:grid-cols-2">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
          <Card6 />
          <Card7 />
          <Card8 />
          <Card9 />
          <Card10 />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Works
