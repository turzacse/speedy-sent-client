import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [wrong, setwrong] = useState("");

    const form = location.state?.form?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        //console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                setwrong("Your Email or Passwoard is wrong!!!")
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-orange-50">
                <div className="hero-content flex gap-10 flex-col lg:flex-row">
                    <div>
                    <img className='w-[600px] ' src="https://i.ibb.co/GQ7tg9q/c.webp" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                        onSubmit={handleLogin}
                        className="card-body">
                            <h2 className='text-3xl font-bold text-orange-400'>Speedy Sent || <span className='text-[#05b37e]'>Login</span></h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                name='email'
                                type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                name='password'
                                type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#05b37e] text-white ">Login</button>
                            </div>
                            {
                                wrong? <>
                                <p className='text-red-600 text-center'>{wrong}</p>
                                </>
                                :
                                <>
                                </>
                            }
                            <p>New in our website? Please <Link to="/register" className='text-[#05b37e]'>Register </Link></p>
                        </form>
                        <div className='divider'></div>
                        <div className='flex justify-center items-center'>
                        <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
//bg-[#05b37e]