import BiryaniImg from "../../assets/biryani5.png";
<<<<<<< HEAD
// import Vector from "../../assets/vector3.png";
=======
>>>>>>> bd9e88d (first)
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
<<<<<<< HEAD
  // const bgImage = {
  //   backgroundImage: `url(${Vector})`,
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   height: "100%",
  //   width: "100%",
  // };
=======
//   const bgImage = {
//     backgroundImage: `url(${Vector})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     height: "100%",
//     width: "100%",
//   };
>>>>>>> bd9e88d (first)
  return (
    <>
      <div className="min-h-[550px] dark:bg-gray-800 ">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image section */}
              <div className="flex justify-center items-center">
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[500px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className=" flex flex-col justify-center items-center gap-6 sm:pt-0">
                <div className=" flex flex-col">
                <h1 className="text-3xl sm:text-4xl text-center font-bold dark:text-white">
                  Lorem, ipsum dolor.
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ab sed, exercitationem minima aliquid eligendi
                  distinctio? Fugit repudiandae numquam hic quo recusandae.
                  Excepturi totam ad nam velit quasi quidem aspernatur.
                </p>
                </div>
                
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
