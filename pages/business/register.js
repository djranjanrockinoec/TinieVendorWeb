
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../style/css'

function Register() {

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [otpEmail, setOtpEmail] = useState('');
    const [otpPhone, setOtpPhone] = useState('');

    const handleSubmit = (e, path) => {
        e.preventDefault();


        if (path === '/') {
            router.push(path)
        } else {
            return
        }
    };


    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    Register Your Business Details
                </h2>
                <div style={{ padding: '30px 0px', width: 400, boxShadow: '0px 0px 3px 3px #e3e3e3', borderRadius: 8 }}>
                    <div style={{ margin: "50px 10px" }}>
                        <h4 style={{color:'#222222',textAlign:"left",padding:'0 10px'}}>Basic Information</h4>
                        <p style={{ textAlign: 'left', fontSize: 16, padding: '0 10px' }}>Outlet Owner Details</p>
                        <form onSubmit={(e) => { handleSubmit(e) }}>

                            <div className='form-group'>
                                <input type="text" className="form-control" name="name" style={{ borderRadius: 5, marginBottom: 20, height: 40 }} placeholder="Enter Name*" onChange={(e) => setEmail(e.target.value)} required />
                            </div>

                            <div className='form-group'>
                                <input type="email" className="form-control" name="email" style={{ borderRadius: 5, height: 40, marginBottom: 20 }} placeholder="Enter Email ID*" onChange={(e) => setOtpEmail(e.target.value)} required />
                            </div>

                            <div className='form-group'>
                                <input type="text" className="form-control" name="phone" style={{ borderRadius: 5, height: 40, marginBottom: 20 }} placeholder="Mobile Number*" onChange={(e) => setOtpPhone(e.target.value)} required />
                            </div>

                            <div className='form-group'>
                                <input type="text" className="form-control" name="otp" style={{ borderRadius: 5, height: 40, marginBottom: 20 }} placeholder="Enter OTP Sent to the Mobile Number*" onChange={(e) => setOtpPhone(e.target.value)} required />
                            </div>

                            <button onClick={(e) => handleSubmit(e, '/')} type='submit' href="#." className="btn btn-success" name='submit' style={{ padding: "12px 60px", margin: '30px 0' }} >Next</button>
                        </form>
                    </div>
                </div>

            </header>
            <style jsx global>
                {styles}
            </style>
        </div>
    );
}

export default Register;
