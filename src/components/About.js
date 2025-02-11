import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5 "id="about">
      <div className="md:w-1/2 py-5 " >
        <img src={AboutImg} />
      </div>

      <div className="md:w-1/2  text-white flex justify-center">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col items-center text-center">
          <h1 className=" text-4xl border-b-4 border-[#8a2be2] mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <br />
          <p>
            IT undergraduate with a passion for coding, design, and data.
            Skilled in web development, data engineering, and software
            solutions, I thrive on creating user-friendly and efficient
            applications. Currently seeking exciting internship opportunities to
            expand my skills and make a real impact
          </p>
          </div>
          <div class="mt-[50px]">
            <div className="flex flex-col items-center text-center"><h2 class="text-4xl border-b-4 border-[#8a2be2] mb-5 w-[70px] text-[30px] font-bold text-white">Skills</h2></div>
            <div class="mt-[20px] grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 text-[#C5C5C5] text-[18px]">
              <div class="flex items-center space-x-2">
                <span>💻</span>
                <p>Web Development</p>
              </div>
              <div class="flex items-center space-x-2">
                <span>📊</span>
                <p>Data Engineering</p>
              </div>
              <div class="flex items-center space-x-2">
                <span>📱</span>
                <p>Mobile Development</p>
              </div>
              <div class="flex items-center space-x-2">
                <span>📈</span>
                <p>Data Analysis</p>
              </div>
              <div class="flex items-center space-x-2">
                <span>🎨</span>
                <p>UI/UX Design</p>
              </div>
              <div class="flex items-center space-x-2">
                <span>🛠️</span>
                <p>DevOps</p>
              </div>
              <div class="flex items-center space-x-2">
                <span>📈</span>
                <p>Business Analysis</p>
              </div>

              <div class="flex items-center space-x-2">
                <span>📝</span>
                <p>Project Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
