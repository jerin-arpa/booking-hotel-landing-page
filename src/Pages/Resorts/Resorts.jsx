import { useLoaderData } from "react-router-dom";
import Resort from "../../Components/Resort/Resort";

const Resorts = () => {

    const data = useLoaderData();
    return (
        <div>
            <div className="mb-20 py-20">
                <div className="container mx-auto px-5 ">
                    <div className="mb-8 text-center">
                        <p className="text-yellow-400 font-bold pb-2">RESORTS</p>
                        <h2 className="text-4xl text-black font-bold mb-3">Explore Exquisite Resorts for Your Ultimate Getaway</h2>
                        <p>Welcome to our curated collection of luxurious resorts, each handpicked to provide you with an unparalleled retreat experience. Immerse yourself in the  <br /> lap of luxury and relaxation, surrounded by stunning natural beauty and exceptional amenities.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            data.map(resort => <Resort key={resort.id} resort={resort}></Resort>)
                        }
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

export default Resorts;