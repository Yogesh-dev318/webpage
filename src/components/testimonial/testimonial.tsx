import Slider from "react-slick";
const testimonialData = [
    {
        id: 1,
        name: "Samuel",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];
export default function Testimonial() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <>
            <div className="py-10 dark:bg-gray-800">
                <div className="container">
                    <div className="text-center mb-10 max-w-[500px] mx-auto p-3">
                         <p className="text-xl  text-primary">Testimonial</p>
                        <h1 className="text-4xl font-bold dark:text-white">Testimonial</h1>
                         <p className="text-xl text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Perspiciatis delectus architecto error nesciunt</p>
                   </div>
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
                        <Slider {...settings}>
                            {testimonialData.map((data) => {
                                return(
                                    <div className="" key={data.id}>
                                        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 rounded-xl shadow-xl my-4 bg-primary/20 dark:bg-gray-700 p-4">
                                            <img className="rounded-full" src={data.img}/>
                                            <h1 className="text-xl font-bold dark:text-white" >{data.name}</h1>
                                            <p className="text-gray-500 text-sm">{data.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}