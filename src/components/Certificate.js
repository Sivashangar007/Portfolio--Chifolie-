import pro1 from "../assets/python.png";
import pro2 from "../assets/sql.png";
import pro3 from "../assets/power.png";
import pro4 from "../assets/tableau.png";
import pro5 from "../assets/excel.png";
import pro6 from "../assets/hnd.jpg";

export default function Certificate() {
  return (
    <section className="flex flex-col px-10 py-20 justify-center bg-[#8a2be2] text-white" id="certificate">
      <div className="md:w-full text-white flex justify-center px-32">
  <div className="flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl border-b-4 border-[#120436] mb-5 w-[190px] font-bold">
      Certificates
    </h1>
    <p className="px-14">Here are my online course certificates for review.</p>
  </div>
</div>


      <div className="w-full ">
        <div className="flex flex-col md:flex-row md:justify-items-center-center px-32 py-20 gap-40">
        <div className="relative  ">
            <img
              src={pro1}
              className="h-[100px] w-[150px] transition-transform duration-500 ease-in-out hover:scale-150 md:h-[200px] md:w-[300px]"
            />
          </div>
          <div className="relative ">
            <img
              src={pro2}
              className="h-[100px] w-[150px] transition-transform duration-500 ease-in-out hover:scale-150 md:h-[200px] md:w-[300px]"
            />
          </div>
          <div className="relative ">
            <img
              src={pro3}
              className="h-[100px] w-[150px] transition-transform duration-500 ease-in-out hover:scale-150 md:h-[200px] md:w-[300px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-items-center-center px-32 py-20 gap-40">
        <div className="relative ">
            <img
              src={pro4}
              className="h-[100px] w-[150px] transition-transform duration-500 ease-in-out hover:scale-150 md:h-[200px] md:w-[300px]"
            />
          </div>
          <div className="relative ">
            <img
              src={pro5}
              className="h-[100px] w-[150px]  transition-transform duration-500 ease-in-out hover:scale-150 md:h-[200px] md:w-[300px]"
            />
          </div>
          <div className="relative ">
            <img
              src={pro6}
              className="h-[100px] w-[150px] transition-transform duration-500 ease-in-out hover:scale-150 md:h-[200px] md:w-[300px]"
              />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
