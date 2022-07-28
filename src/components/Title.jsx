import React from "react"
import TypeWriterEffect from "react-typewriter-effect"

const Hero = () => {
  return (
    <div className="w-full bg-[#141414] flex justify-center dark:bg-[#fcf9df]">
      <div className="p-8 sm:w-[500px]">
        <div className="p-3 px-6 text-xl text-gray-300 bg-[#3b3b3b] bg-opacity-40 rounded-xl dark:text-[#141414] dark:bg-[#FFFAF0]">
          <TypeWriterEffect
            textStyle={{
              fontSize: "1.1rem",
              textAlign: "center",
            }}
            startDelay={100}
            cursorColor="#fff"
            multiText={[
              "Hi, I'm Lionel Arce",
              "I'm a Fullstack developer based in Argentina!",
            ]}
            typeSpeed={75}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
