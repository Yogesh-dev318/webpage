import Img from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";
const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chiken kari",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 3,
    img: Img3,
    name: "Cold Cofee",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
];
export default function Service(){
    return(
        <>
        <div className="py-10 dark:bg-gray-800">
            <div className="container">
                <div className="text-center mb-10 max-w-[500px] mx-auto p-3">
                    <p className="text-xl  text-primary">Our Services</p>
                    <h1 className="text-4xl font-bold dark:text-white">Services</h1>
                    <p className="text-xl text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis delectus architecto error nesciunt</p>
                </div>
                <div data-aos="zoom-in-up" data-aos-durtion="400" data-aos-once="true" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 ">
                    {ServicesData.map(({id,img,name,description})=>{
                        return(
                            <div className="rounded-2xl bg-white dark:bg-gray-700 hover:bg-primary transition-all p-4 duration-150 hover:text-white shadow-xl overflow-hidden m-5"  key={id}>
                                <div className="h-[100px] ">
                                    <img className="max-w-[100px] mx-auto hover:scale-150 duration-300 " src={img}/>
                                </div>
                                <div className="p-4 text-center">
                                    <h1 className="text-xl font-bold dark:text-white">{name}</h1>
                                    <p className="text-gray-400 text-sm">{description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
        
    )
}