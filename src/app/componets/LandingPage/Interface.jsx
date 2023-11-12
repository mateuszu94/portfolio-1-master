"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";


let size = 40;

const Section = (props) => {
  const { children } = props;

  return (
    <section
      className={` ml-5 h-screen w-[70vW] max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center`}
    >
      {children}
    </section>
  );
};





const AboutSection = ( props) => {

  
  
  return (
    <Section>
      {  props.showGames=== false &&
      <motion.div
         className="relative z-30"
      >
        <div>
          <h1 className=" text-6xl font-bold leading-relaxed">
            {" "}
            <span>Witaj jestem</span>
            <br />
            <span className="bg-blue-600 rounded-full ml-32 mt-4 text-black italic p-2">
              Mateusz
            </span>
          </h1>
          <h2 className="ml-52 font-bold">
            Jestem aspirujacym full stack developerem
          </h2>
        </div>
        <motion.div
          className="mask absolute top-0"

          initial={{
            WebkitMaskSize:"20px 20px",
    WebkitMaskPositionX:"10%"

          }}
  animate={{
    WebkitMaskSize:["0px", "100px", "500px", "0px"],
    WebkitMaskPositionX:["0%", "20%" , "75%" , "150%"]
  }}
  transition=
  {{duration: 3,
   repeat: Infinity,
   repeatDelay: 1,
   times: [0, 0.25, 0.5, 1],
   ease: "easeInOut",}}

        >
          <h1 className="text-6xl font-bold text-white leading-relaxed">
            {" "}
            <span>Witaj jestem</span>
            <br />
            <span className="bg-black rounded-full ml-32 mt-4 text-blue-600 italic p-2">
              Mateusz
            </span>
          </h1>
          <h2 className="ml-52 font-bold text-white">
            Jestem aspirujacym full stack developerem
          </h2>
          <h2 className="ml-52 text-3xl font-bold text-white">
            Poznaj mnie bardziej prezeszukujac pokój
          </h2>
        </motion.div>
      </motion.div>}
      {  props.showGames=== true&& 
      <div className="w-1/2 flex flex-col justify-center items-center ">
        <div className="text-2xl textBorder font-bold text-center">
          <h2 className=" text-white font-serif"> 
          Jedną z moich ulubionych form rozrywki są gry komputerowe
          </h2>
          <p className="text-yellow-600 p-6">Moje Polecenia:</p>
          </div>
        <div>
        </div>
      </div>}
      
    </Section>
  );
};

const Skills = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Umiejętnośći :</h2>
      <div className="bg-gray  w-1/3 h-14 border border-black rounded-t-xl"></div>
      <div className="bg-white  w-1/3 h-14 border border-black "></div>
      <div className="bg-white  w-1/3 h-14 border border-black "></div>
      <div className="bg-white  w-1/3 h-14 border border-black "></div>
      <div className="bg-white  w-1/3 h-14 border border-black rounded-b-xl"></div>
    </Section>
  );
};

export const Interface = ({useshowGames ,showGames}) => {
  const [isloaded, setIsloaded] = useState(true);

  useEffect(()=>{
    setIsloaded(false)
  },[])


  if(isloaded){
    return null
  }


  return (
    <div className="flex flex-col  justify-start  items-start">
      <AboutSection  useshowGames={useshowGames} showGames={showGames} />
      <Skills />
      <Section>
        <h1>Projekty</h1>
      </Section>
      <Section>
        <h1>Kontakt</h1>
      </Section>
    </div>
  );
};
