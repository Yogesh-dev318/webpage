import food1 from "../../../assets/biryani3.png";
import food2 from "../../../assets/biryani5.png";
import food3 from "../../../assets/biryani2.png";
import Vector from "../../../assets/vector3.png";
import { useState } from "react";


const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
export default function Hero(){
    const [imageId, setImageId] = useState(food1);
    const ImagesList=[
        {
            id: 1,
            img: food1,
          },
          {
            id: 2,
            img: food2,
          },
          {
            id: 3,
            img: food3,
          },
    ]
    
    return(
        <div style={bgImage} className="min-h-[550px] sm:min-h-[660px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div data-aos="zoom-out" data-aos-durtion="400" data-aos-once="true" className="flex flex-col  justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Welcome to the Foodie Zone</h1>
                        <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                        reiciendis inventore iste ratione ex alias quis magni at optio</p>
                        <div>
                        <button className="bg-primary px-4 py-1 rounded-full text-white hover:scale-110 duration-200 ">Order Now</button>
                        </div>
                    </div>
                    <div data-aos="zoom-out" data-aos-durtion="400" data-aos-once="true" className=" order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
                        
                        <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                            <img src={imageId} className="w-[300px] sm:w-[450px] spin" />
                        </div>
                        <div className="flex flex-row lg:flex-col lg:top-0  lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                            {ImagesList.map((item) => (
                                <img key={item.id} src={item.img} className="max-w-[150px] h-[100px] object-contain inline-block hover:scale-105 duration-150" onClick={() => setImageId(item.img)} />
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}