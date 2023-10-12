import { useLoaderData } from "react-router-dom";
import Hotel from "../../Components/Hotel/Hotel";

const Hotels = () => {

    const data = useLoaderData();

    return (
        <div>
            <div className="mb-10 py-20">
                <div className="container mx-auto px-5 ">
                    <div className="mb-8 text-center">
                        <p className="text-yellow-400 font-bold pb-2">HOTELS</p>
                        <h2 className="text-4xl text-black font-bold mb-3">Discover Exceptional Hotels for Your Ideal Stay</h2>
                        <p>Welcome to our carefully curated selection of hotels, offering a delightful range of accommodations to suit your every need. <br /> Whether you are traveling for business or leisure, our diverse collection of hotels ensures that you find the perfect home away from home.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            data.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
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

export default Hotels;