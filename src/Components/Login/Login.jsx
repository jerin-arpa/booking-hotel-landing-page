import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="flex justify-center my-16 ">
                <div className="bg-base-300 rounded-lg w-full md:w-3/4 lg:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center pt-7">Login your account</h2>
                    <div className="flex justify-center">
                        <hr className="bg-black h-1 mt-6 w-1/2" />
                    </div>
                    <form className="card-body">
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
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                    </form>


                    <div className="flex justify-center mb-4">
                        <h2>Do not have an account? <Link to='/signup' className="text-blue-500 underline font-bold">SignUp</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;