import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Resort from "../Resort/Resort";

const Home = () => {

    const resorts = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            <div className="container mx-auto px-5 mb-28">
                <div className="mb-8">
                    <p className="text-yellow-400 font-bold pb-2">HOT OFFER</p>
                    <h2 className="text-4xl text-black font-bold mb-3">Best offer of the month</h2>
                    <p>Explore our best offer for your stay while you are on vaccation with family or business trip.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        resorts.map(resort => <Resort key={resort.id} resort={resort}></Resort>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;