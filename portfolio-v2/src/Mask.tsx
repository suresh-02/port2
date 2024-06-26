import { motion } from "framer-motion";

import { styles } from "./styles";
import { useMousePosition } from "./utils/useMousePosition";
import { useState } from "react";
import { MagneticEffect, WavyText } from "./hoc";
import { Text } from "./components/InfiniteText";
// import { Text } from "./components/InfiniteText";

export const Mask = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <motion.div
      className="mask mx-auto hidden w-full md:block"
      animate={{
        // WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskPositionX: `${x - size / 2}px`,
        WebkitMaskPositionY: `${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    >
      <div className="relative min-h-screen" id="hero">
        <div
          className={`${styles.paddingX} mx-auto flex max-w-7xl flex-col items-start gap-[80px] pt-[120px]`}
        >
          <div className="flex flex-col justify-between gap-[100px] lg:flex-row lg:items-end lg:gap-[120px]">
            <div className="flex flex-col gap-[50px] lg:gap-[120px]">
              <div
                className={`${styles.heroHeadText} text-dark relative pb-5 before:absolute before:bottom-0 before:h-3 before:w-36 before:bg-tertiary dark:before:bg-gray`}
              >
                <WavyText text="Suresh" />
                <div className="flex">
                  <WavyText text="Hariharan" delay={0.35} />
                  <span className="text-white">.</span>
                </div>
              </div>
              <div className="hero-social flex gap-x-[80px]">
                <MagneticEffect>
                  <a
                    href="https://github.com/suresh-02"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M11.25 23.75C5 25.625 5 20.625 2.5 20M20 27.5V22.6625C20.0469 22.0665 19.9664 21.4673 19.7638 20.9047C19.5612 20.3422 19.2412 19.8293 18.825 19.4C22.75 18.9625 26.875 17.475 26.875 10.65C26.8747 8.90478 26.2034 7.2265 25 5.9625C25.5698 4.43563 25.5295 2.74794 24.8875 1.25C24.8875 1.25 23.4125 0.812498 20 3.1C17.135 2.32353 14.115 2.32353 11.25 3.1C7.8375 0.812498 6.3625 1.25 6.3625 1.25C5.72047 2.74794 5.68018 4.43563 6.25 5.9625C5.03766 7.23587 4.36565 8.92933 4.375 10.6875C4.375 17.4625 8.5 18.95 12.425 19.4375C12.0137 19.8625 11.6966 20.3693 11.4941 20.9249C11.2917 21.4805 11.2085 22.0726 11.25 22.6625V27.5"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </MagneticEffect>

                <MagneticEffect>
                  <a
                    href="https://www.linkedin.com/in/suresh-hariharan-89376a21b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M19.9999 9.99998C21.989 9.99998 23.8967 10.7902 25.3032 12.1967C26.7097 13.6032 27.4999 15.5109 27.4999 17.5V26.25H22.4999V17.5C22.4999 16.8369 22.2365 16.2011 21.7676 15.7322C21.2988 15.2634 20.6629 15 19.9999 15C19.3368 15 18.701 15.2634 18.2321 15.7322C17.7633 16.2011 17.4999 16.8369 17.4999 17.5V26.25H12.4999V17.5C12.4999 15.5109 13.2901 13.6032 14.6966 12.1967C16.1031 10.7902 18.0108 9.99998 19.9999 9.99998Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 11.25H2.5V26.25H7.5V11.25Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 7.49998C6.38071 7.49998 7.5 6.38069 7.5 4.99998C7.5 3.61927 6.38071 2.49998 5 2.49998C3.61929 2.49998 2.5 3.61927 2.5 4.99998C2.5 6.38069 3.61929 7.49998 5 7.49998Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </MagneticEffect>

                {/* <MagneticEffect>
                  <a
                    href="https://www.npmjs.com/~ramanan_kb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M14.5 9.075V24.325H5.67505V5.675H24.3251V24.325H21.425V9.825C21.425 9.81359 21.4252 9.79868 21.4254 9.7811C21.4262 9.71016 21.4276 9.59563 21.4201 9.49144C21.4117 9.37385 21.388 9.15654 21.2649 8.97142L21.264 8.97008C21.109 8.7386 20.8533 8.65826 20.7141 8.62434C20.5483 8.58393 20.3661 8.56888 20.2056 8.56322C20.0412 8.55741 19.8761 8.56088 19.7385 8.56531C19.687 8.56697 19.6417 8.56864 19.6017 8.57011C19.5261 8.5729 19.4693 8.575 19.425 8.575H15H14.5V9.075Z"
                        stroke="#F2F2F2"
                      />
                    </svg>
                  </a>
                </MagneticEffect> */}

                <MagneticEffect>
                  <a
                    href="https://www.instagram.com/_.suresh.h/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M21.25 2.5H8.75C5.29822 2.5 2.5 5.29822 2.5 8.75V21.25C2.5 24.7018 5.29822 27.5 8.75 27.5H21.25C24.7018 27.5 27.5 24.7018 27.5 21.25V8.75C27.5 5.29822 24.7018 2.5 21.25 2.5Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 14.2125C20.1543 15.2528 19.9766 16.3153 19.4922 17.2488C19.0078 18.1823 18.2414 18.9393 17.302 19.4121C16.3626 19.8849 15.2981 20.0495 14.2597 19.8824C13.2214 19.7153 12.2622 19.2251 11.5185 18.4815C10.7749 17.7378 10.2847 16.7786 10.1176 15.7403C9.9505 14.7019 10.1151 13.6374 10.5879 12.698C11.0607 11.7586 11.8177 10.9922 12.7512 10.5078C13.6847 10.0234 14.7472 9.84573 15.7875 10C16.8487 10.1574 17.8311 10.6518 18.5896 11.4104C19.3482 12.1689 19.8426 13.1513 20 14.2125Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.875 8.125H21.8875"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </MagneticEffect>
              </div>
            </div>
            <div
              className="relative"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <h5
                className={`${styles.sectionSubText} animation-delay-500 text-dark animate-slideleft before:bg-white dark:before:bg-black`}
              >
                Introduction
              </h5>
              <h3 className="text-dark animation-delay-500 mt-2 animate-slideleftT2 text-[25px] font-bold text-slate-800 transition-all duration-300 dark:text-gray lg:text-[40px]">
                Article writer <br /> and Code Crafting Guru
              </h3>
              <p className="text-dark animation-delay-500 mt-2 animate-slideleftT3 !leading-9 text-slate-500 transition-all duration-300 dark:text-secondary lg:text-[20px]">
                Hey there! I'm Suresh, and I have a knack for making internet
                magic happen. My journey into web development kicked off in 2022
                when I peeked over my classmates coding journey. As it turns
                out, cobbling together custom HTML components was more fun and
                I've been coding up a storm ever since!
              </p>
            </div>
          </div>
          <div className="grid w-full place-content-center md:grid-cols-2 lg:place-content-start">
            <div className="flex w-full items-center justify-center lg:justify-normal">
              <a
                href="#about"
                className="flex items-center gap-5 font-semibold text-gray dark:text-tertiary"
              >
                <div className="flex h-16 w-9 items-start justify-center rounded-3xl border-4 border-gray p-2 dark:border-slate-800">
                  <motion.div
                    className="mb-1 h-3 w-3 rounded-full bg-gray dark:bg-slate-800"
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                </div>
                <span className="flex items-center gap-1">
                  Scroll down
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </span>
              </a>
            </div>
            <div
              className="flex gap-4"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <motion.a
                href="https://dev.to/suresh02"
                target="_blank"
                rel="noreferrer"
                className="my-5 max-w-max rounded bg-tertiary"
              >
                <motion.button
                  whileHover={{ x: -4, y: -4 }}
                  className="rounded border-2 border-[#915eff] bg-slate-100 p-3 px-6 text-lg font-medium tracking-wider text-[#915eff] dark:bg-tertiary"
                >
                  Check out my Blogs
                </motion.button>
              </motion.a>
              {/* <motion.a
                href="/RamananResume.pdf"
                download="Suresh.hariharan-Resume"
                initial={{ y: 70 }}
                animate={{ y: 0 }}
                transition={{
                  type: "tween",
                  delay: 0.6,
                }}
                className="my-5 max-w-max rounded bg-tertiary"
              >
                <motion.button
                  whileHover={{ x: -4, y: -4 }}
                  transition={{ delay: -0.6 }}
                  className="rounded border-2 border-[#915eff] bg-slate-100 p-3 px-6 text-lg font-medium tracking-wider text-[#915eff] transition-all duration-300 dark:bg-tertiary"
                >
                  Download my Resume
                </motion.button>
              </motion.a> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.padding} relative z-0 mx-auto mt-[72px] min-h-screen max-w-7xl`}
      >
        <div>
          <p className={`${styles.sectionSubText} text-dark`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} text-dark`}>
            Overview<span className="text-white">.</span>
          </h2>
        </div>
        <p
          className="text-dark mt-4 h-[120px] max-w-3xl text-[20px] leading-9"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          I create successful responsive websites that are fast, easy to use,
          and built with best practices. The main area of my expertise is
          front-end development, HTML, CSS, JS, experienced in developing
          real-time applications, animations, and coding interactive layouts.
        </p>
        <div
          className="mt-16 flex max-w-fit flex-wrap gap-10"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <Text baseVelocity={1.5} direction={1}>
            HTML * CSS * JavaScript * TypeScript * S(a|c)ss *
          </Text>
          <Text baseVelocity={1.8} direction={-1}>
            TailwindCSS * NgZorro * Framer Motion * Three.js *
          </Text>
          <Text baseVelocity={2.2} direction={1}>
            Angular * React * NextJS *
          </Text>
          <Text baseVelocity={2} direction={-1}>
            Node.js * Express.js * Sequelize
          </Text>
          <Text baseVelocity={3} direction={1}>
            Docker * Kubernetes * K8s * Lens
          </Text>
        </div>
      </div>
      {/* <div
        className={`${styles.padding} relative z-0 mx-auto mt-12 min-h-screen max-w-7xl`}
      >
        <p className={`${styles.sectionSubText} text-dark`}>
          What I have done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} text-dark`}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Work Experience<span className="text-white">.</span>
        </h2>
      </div> */}
    </motion.div>
  );
};
