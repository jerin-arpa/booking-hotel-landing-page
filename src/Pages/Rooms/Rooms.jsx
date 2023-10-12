import resort1 from "../../assets/images/resort-1.png";
import resort2 from "../../assets/images/resort-2.png";
import resort3 from "../../assets/images/resort-3.png";
import resort4 from "../../assets/images/resort-4.png";
import hotel1 from "../../assets/images/hotel-1.png";
import hotel2 from "../../assets/images/hotel-2.png";
import hotel3 from "../../assets/images/hotel-3.png";
import hotel4 from "../../assets/images/hotel-4.png";


const Rooms = () => {
    return (
        <div>
            <div className="mb-28 pt-14">
                <div className="container mx-auto px-5">
                    <div>
                        <div className="mb-8 text-center">
                            <p className="text-yellow-400 font-bold pb-2">HOTELS</p>
                            <h2 className="text-4xl text-black font-bold mb-3">Discover Comfort and Luxury in Our Hotel Rooms</h2>
                            <p>Indulge in the epitome of comfort and sophistication with our carefully designed hotel rooms. Each room is a sanctuary of relaxation, boasting modern amenities and stylish interiors. Whether you are traveling for business or leisure, our hotel rooms are tailored to meet all your needs, ensuring a restful stay. Experience the perfect blend of luxury and functionality, welcoming you to a world of exquisite comfort.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                            <img className="col-span-1 h-full" src={resort1} alt="" />
                            <img className="col-span-1 h-full" src={resort2} alt="" />
                            <img className="col-span-1 h-full" src={resort3} alt="" />
                            <img className="col-span-1 h-full" src={resort4} alt="" />
                        </div>
                    </div>

                    <div className="mb-8 text-center">
                        <p className="text-yellow-400 font-bold pb-2">RESORTS</p>
                        <h2 className="text-4xl text-black font-bold mb-3">Experience Tranquility and Elegance in Our Resort Rooms</h2>
                        <p>Step into a world of tranquility and luxury with our resort rooms, meticulously designed to immerse you in the serenity of your surroundings. Our rooms offer a seamless connection to nature, providing breathtaking views and a sense of calm. Whether you seek a beachfront escape, a mountain retreat, or a tropical oasis, our resort rooms offer a sanctuary for relaxation and rejuvenation.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                            <img className="col-span-1 h-full" src={hotel1} alt="" />
                            <img className="col-span-1 h-full" src={hotel2} alt="" />
                            <img className="col-span-1 h-full" src={hotel3} alt="" />
                            <img className="col-span-1 h-full" src={hotel4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="pb-20 text-white">
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

export default Rooms;