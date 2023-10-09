const Banner = () => {
    return (
        <div className="my-3">
            <div className="hero rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/QmDtfZK/IMG-20231009-WA0000.jpg)' }}>
                <div className="hero-overlay bg-opacity-40 rounded-xl py-56"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-20">
                    <div className="flex items-center ml-8">
                        <div>
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white"> Your Hassle-Free <br /> Hotel Booking Solution</h1>
                            <p className="mb-5 text-white">Have You ever come across a hotel that feels like home? If not, you can find the hotel here.</p>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white md:m-10 rounded-xl w-[270px] md:w-80">
                            <form className="card-body">
                                <h2 className="text-xl text-black font-bold">Booking Hotel</h2>
                                <p className="text-xs">Lets start ordering your place to stay</p>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Location</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your Location" className="input input-bordered" required />
                                </div>

                                <div className="gap-6 grid grid-cols-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Check In</span>
                                        </label>
                                        <input type="text" placeholder="date" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Check Out</span>
                                        </label>
                                        <input type="text" placeholder="date" className="input input-bordered" required />
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-yellow-400 text-white">Discover Place</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Best Offer */}
            <div>
                <div>
                    <h1 className="mb-5 text-5xl font-bold text-white"> Best Offer of the Months</h1>
                    <p className="mb-5 text-white">Explore our best offer for you stay while you are on vacation with family or business trip.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;