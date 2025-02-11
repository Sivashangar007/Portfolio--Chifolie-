import pro1 from "../assets/pro4.png";
import pro2 from "../assets/ma1.png";
import pro3 from "../assets/pro6.png";

export default function Project() {
  return (
    <section
      className="flex flex-col px-5 py-10 justify-center bg-primary text-white"
      id="project"
    >
      <div className="w-full flex flex-col items-center pt-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl border-b-4 border-[#120436] mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with React,
            MERN, Tailwind CSS, HTML, PHP, and CSS. Check them out!
          </p>
        </div>
      </div>

      <div className="w-full ">
        <div className="flex flex-col md:flex-row md:justify-end px-30 py-20 gap-40">
          <div className="relative ">
            <img src={pro1} className="h-[300px] w-[500px]" />
            <div className="absolute left-0 right-0  top-0 bottom-[15px] bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 font-bold ">
                Vehicle Services Management System Ryome Auto Cares Kottawa
              </p>
              <br />
              <p className="px-2 text-center">
                I developed a web-based application using the MERN stack
                (MongoDB, Express.js, React, Node.js). During the development
                process, I utilized GitHub for version control, efficiently
                managing and tracking changes to ensure smooth collaboration and
                code management throughout the project.{" "}
              </p>
              <div className="flex justify-center items-center h-14  ">
                <a href="#" className="font-bold button px-5 ">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="relative ">
            <img src={pro2} className="h-[300px] w-[500px]" />
            <div className="absolute left-0 right-0  top-0 bottom-[15px] bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 font-bold ">
              Routine Tracker Mobile App
              </p>
              <br />
              <p className="px-2 text-center">
              “Routine Tracker” is a mobile app developed in Kotlin for Android Studio that helps users monitor and manage their daily routines. It offers intuitive features for setting, tracking, and analyzing habits and tasks, making it easier to stay organized and maintain productivity throughout the day.{" "}
              </p>
              <div className="flex justify-center items-center h-24 ">
                <a href='https://github.com/Chiyaanvijay/Routine_Tracker.git' className="font-bold button px-5">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="relative ">
            <img src={pro3} className="h-[300px] w-[500px]" />
            <div className="absolute left-0 right-0  top-0 bottom-[15px] bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 font-bold ">Portfolio Website</p>
              <br />
              <p className="px-2 text-center">
                I created a portfolio website using React to showcase my skills
                and projects. This practice project involves implementing
                interactive features and responsive design to present my work
                effectively. The site will leverage React’s capabilities to
                deliver a dynamic and engaging user experience, highlighting my
                development skills.
              </p>
              <div className="flex justify-center items-center h-14 ">
                <a href="#" className="font-bold button px-5">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
