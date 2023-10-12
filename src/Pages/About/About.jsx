import image1 from "../../assets/images/hotel-6.png";
import image2 from "../../assets/images/hotel-7.png";
import image3 from "../../assets/images/hotel-8.png";
import image4 from "../../assets/images/hotel-5.png";


const About = () => {
    return (
        <div className="container mx-auto px-5 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="col-span-1">
                    <div className="grid grid-cols-2">
                        <img className="col-span-1 h-full" src={image1} alt="" />
                        <img className="col-span-1 h-full" src={image2} alt="" />
                    </div>
                    <div className="grid grid-cols-2">
                        <img className="col-span-1 h-full" src={image4} alt="" />
                        <img className="col-span-1 h-full" src={image3} alt="" />
                    </div>
                </div>


                <div className="mb-8 col-span-1">
                    <div>
                        <p className="text-yellow-400 font-bold pb-2 mt-3">ABOUT US</p>
                        <h2 className="text-4xl text-black font-bold mb-3 mt-5">Streamline Operations and Elevate Guest Experiences with our Hotel Management System</h2>
                        <p className="mt-10">Welcome to our advanced Hotel Management System, designed to revolutionize the way you manage your hotel operations and enhance guest satisfaction. Our comprehensive platform offers a seamless blend of cutting-edge technology and intuitive features, empowering hoteliers to streamline day-to-day tasks, optimize resource allocation, and deliver exceptional services to guests. From efficient reservation handling and guest check-ins to precise billing and insightful analytics, our system is a one-stop solution for the modern hotelier. Experience the power of innovation as we help you unlock operational efficiencies and exceed guest expectations in the dynamic world of hospitality. Elevate your hotel performance and guest experiences with our robust Hotel Management System.</p>
                    </div>
                </div>
            </div>



            <section className="py-20 text-white">
                <div className="container mx-auto">
                    <div className="hero py-44 rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/LZJ6Cvc/IMG-20231009-WA0003.jpg)' }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center">
                            <div className="w-4/5 lg:w-full text-white  my-5">
                                <div className="flex gap-3 justify-center">
                                    <p className="mb-3 text-yellow-400 font-bold">ABOUT THE HOTEL</p>
                                </div>
                                <h1 className="text-3xl lg:text-4xl font-bold">Want to Enjoy Your Trips or Business Trips <br /> Get Booked Now</h1>
                                <button className="btn btn-warning mt-5 text-white">Book Hotel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;