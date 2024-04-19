import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../Shared/NavBar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext (AuthContext);

    const location = useLocation();

    console.log(location)

    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn (email, password)
        .then ( result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/'); 
        })
        .catch (error => {
            console.error(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center my-10 font-bold">Please Login</h2>

            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

            <p className="text-center mt-4 font-medi">Don't have an Account <Link className="text-blue-400 ml-2" to={"/register"}>Register</Link></p>
        </div>
    );
};

export default Login;