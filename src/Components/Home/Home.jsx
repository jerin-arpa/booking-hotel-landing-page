import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Resort from "../Resort/Resort";
import { GrGamepad } from 'react-icons/gr';
import { IoIosFitness } from 'react-icons/io';
import { GiHotMeal } from 'react-icons/gi';
import { TbHotelService } from 'react-icons/tb';
import { ImQuotesLeft } from 'react-icons/im';
import Hotel from "../Hotel/Hotel";

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            {/* Best offer */}
            <div className="mb-28 bg-gray-50 py-20">
                <div className="container mx-auto px-5 ">
                    <div className="mb-8">
                        <p className="text-yellow-400 font-bold pb-2">HOT OFFER</p>
                        <h2 className="text-4xl text-black font-bold mb-3">Best offer of the month</h2>
                        <p>Explore our best offer for your stay while you are on vacation with family or business trip.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            data.slice(0, 6).map(resort => <Resort key={resort.id} resort={resort}></Resort>)
                        }
                    </div>
                </div>
            </div>


            {/* Hotel Facility */}
            <section className="mb-20 py-20">
                <div className="flex flex-col lg:flex-row relative container mx-auto px-5 gap-10">
                    <div className="flex-1 ">
                        <div>
                            <img className="h-[600px] rounded-3xl" src="https://i.ibb.co/QdXpcY8/IMG-20231012-WA0000.jpg" alt="" />
                        </div>
                        <div className="absolute top-40 left-56 bg-white p-4 rounded-3xl">
                            <img className="w-96  rounded-3xl" src="https://i.ibb.co/zScbXP6/IMG-20231012-WA0001.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-10">
                            <p className="text-yellow-400 font-bold pb-2">BENEFIT</p>
                            <h2 className="text-4xl text-black font-bold mb-3">Comfortable Facility <br /> Around Hotel</h2>
                            <p>
                                Welcome to our luxurious Comfortable Facility Around Hotel, where comfort meets elegance and convenience, With our platform, we also give customer the best facilities to enjoy while they stay in their favorite hotels. Nestled in the heart of a vibrant city, our hotel promises a truly remarkable and relaxing stay for both leisure and business travelers.</p>
                        </div>


                        <div className="mt-7">
                            <div className="flex gap-5 mb-5">
                                <div className="flex items-center text-2xl bg-gray-200 p-5 rounded-full">
                                    <GrGamepad></GrGamepad>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Free Accommodation</h3>
                                    <p>Accommodation for you to enjoy exploring around the hotel.</p>
                                </div>
                            </div>

                            <div className="flex gap-5 mb-5">
                                <div className="flex items-center text-2xl bg-gray-200 p-5 rounded-full">
                                    <IoIosFitness></IoIosFitness>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Fitness Center</h3>
                                    <p>For those who likes to do fitness thing, fitness is free.</p>
                                </div>
                            </div>

                            <div className="flex gap-5 mb-5">
                                <div className="flex items-center text-2xl bg-gray-200 p-5 rounded-full">
                                    <GiHotMeal></GiHotMeal>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Free Breakfast</h3>
                                    <p>Whose does not like meal in the morning, breakfast is free.</p>
                                </div>
                            </div>

                            <div className="flex gap-5 mb-5">
                                <div className="flex items-center text-2xl bg-gray-200 p-5 rounded-full">
                                    <TbHotelService></TbHotelService>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Free Breakfast</h3>
                                    <p>Our professional staff are committed to providing service. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Hotels of the months */}
            <div className="mb-28 bg-gray-50 py-20">
                <div className="container mx-auto px-5 ">
                    <div className="mb-8">
                        <p className="text-yellow-400 font-bold pb-2">RECOMMENDED HOTEL</p>
                        <h2 className="text-4xl text-black font-bold mb-3">Hotel of the month</h2>
                        <p>Discover our top recommended hotels for you to stay while <br /> on vacation or even a business trip.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            data.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                        }
                    </div>
                </div>
            </div>


            {/* FAQ */}
            <section className="container mx-auto px-5 my-20 pb-10">
                <div className="mb-10 text-center">
                    <p className="text-yellow-400 font-bold pb-2">FAQS</p>
                    <h2 className="text-4xl text-black font-bold mb-3">Frequently ask question</h2>
                    <p>Everything you need to know right here all your fingertips. Ask question, browse around <br /> for answer, or submit your feature requests.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                        <div className="collapse collapse-arrow bg-white border mb-2">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-bold">
                                How do I make a reservation at a resort or hotel?
                            </div>
                            <div className="collapse-content">
                                <p>Making a reservation is easy! Simply visit our website, search for your desired destination, select the dates of your stay, choose from the available resorts or hotels, and proceed to book.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white border mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-bold">
                                Can I modify or cancel my reservation?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you can modify or cancel your reservation, depending on the cancellation policy of the specific resort or hotel. Please check the cancellation policy provided during the booking process for more details.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white  border mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-bold">
                                Are there any additional fees or hidden charges?
                            </div>
                            <div className="collapse-content">
                                <p>We believe in transparency. The price displayed during the booking process includes all applicable taxes and fees. There are no hidden charges.</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex-1">
                        <div className="collapse collapse-arrow bg-white border mb-2">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-bold">
                                What payment options are available for booking?
                            </div>
                            <div className="collapse-content">
                                <p>We accept various payment methods, including major credit/debit cards and secure online payment gateways. Select your preferred payment option during the booking process.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white border mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-bold">
                                Can I request specific amenities or room preferences?
                            </div>
                            <div className="collapse-content">
                                <p>Absolutely! During the booking process, you can request specific amenities or room preferences in the Special Requests section. While we wll do our best to accommodate your requests, they are subject to availability.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white  border mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-bold">
                                Is my personal information secure?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, we prioritize the security and privacy of our users. Our website uses industry-standard encryption to protect your personal information. Please refer to our Privacy Policy for more details on data security and usage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Review */}
            <section className=" bg-gray-50 py-20">
                <div className="flex flex-col lg:flex-row gap-10 container mx-auto px-5">
                    <div className="flex-1">
                        <div>
                            <img src="https://i.ibb.co/44Y5NpN/IMG-20231012-WA0010.jpg" alt="" />
                        </div>
                    </div>


                    <div className="mb-10 flex-1">
                        <p className="text-yellow-400 font-bold pb-2">REVIEW</p>
                        <h2 className="text-4xl text-black font-bold mb-10">What Our <br /> Customer Say</h2>

                        <div className="w-5/6">
                            <div className="bg-white p-10 rounded-3xl text-black">
                                <div className="flex gap-5">
                                    <div>
                                        <ImQuotesLeft></ImQuotesLeft>
                                    </div>
                                    <p>I recently booked a stay at Paradise Beach Resort through this website, and it was an incredible experience! The booking process was seamless, and the resort exceeded all expectations. The picturesque views and top-notch service made my vacation truly memorable.</p>
                                </div>

                                <div className="mt-5">
                                    <h3 className="text-xl font-bold">Review by Sarah R.</h3>
                                    <p>Lovely Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;