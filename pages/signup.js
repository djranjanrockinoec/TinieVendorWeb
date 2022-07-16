
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Nav from './components/nav'

const Signup = () => {
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [otpEmail, setOtpEmail] = useState('');
    const [otpPhone, setOtpPhone] = useState('');

    const handleSubmit = (e, path) => {
        e.preventDefault();


        if (path === '/business') {
            router.push(path)
        } else { return }
    };


    return (
        <div className="App">
            <Nav />
            <header className="App-header">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="hr"></div>
                    <h2>
                        Sign Up
                    </h2>
                    <div className="hr"></div>

                </div>

                <div style={{ margin: "50px 10px" }}>
                    <form onSubmit={(e) => { handleSubmit(e, 'none') }}>

                         <div className='form-group'>
                            <input type="text" className="form-control" name="name" placeholder="Enter Your Name*" onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className='form-group'>
                            <input type="email" className="form-control" name="email" placeholder="Enter Email ID*" onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className='form-group'>
                            <input type="text" className="form-control" name="otp-email" placeholder="Enter OTP Sent to Your Email*" onChange={(e) => setOtpEmail(e.target.value)} required />
                        </div>

                        <div className='form-group'>
                            <input type="text" className="form-control" name="pass" placeholder="Enter Password*" onChange={(e) => setOtpPhone(e.target.value)} required />
                        </div>


                        <button onClick={(e) => handleSubmit(e, '/business')} type='submit' href="#." className="btn btn-success submit" name='submit' >Submit</button>
                    </form>
                </div>




            </header>

        </div>

    );
}


export default Signup;
