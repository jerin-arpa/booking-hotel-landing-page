import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className='py-10'>
            <div className="flex justify-center my-12 container mx-auto px-5">
                <div className="bg-gray-50 rounded-xl w-full md:w-3/4 lg:w-2/4 py-8">
                    <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className='text-yellow-400'>SignUp</span> your account</h2>
                    <form className="px-4 md:px-14">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password" placeholder="Enter your Password" className="input input-bordered w-full" required />

                        </div>

                        <div className="flex gap-3 mt-5">
                            <div className='flex items-center'>
                                <input className='checkbox checkbox-warning checkbox-xs md:checkbox-sm' type="checkbox" name="terms" id="" />
                            </div>
                            <label htmlFor="terms" className="text-xs md:text-lg">Accept our terms and conditions</label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-yellow-400 border-yellow-400 hover:bg-white hover:text-yellow-400 text-white font-bold">Sign Up</button>
                        </div>
                    </form>

                    <div className="flex justify-center mb-4">
                        <h2 className="text-xs md:text-lg mt-6 md:mt-8 mb-6">Already have an account? <Link to='/login' className="text-yellow-400 underline font-bold">Login</Link></h2>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUp;