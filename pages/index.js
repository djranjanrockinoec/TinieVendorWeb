
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Nav from './components/nav'

function App() {
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [otpEmail, setOtpEmail] = useState('');
    const [otpPhone, setOtpPhone] = useState('');

    const handleSubmit = (e, path) => {
        e.preventDefault();


        if (path === '/signup') {
            router.push(path)
        } else if (path === '/reset') {
            router.push(path)
        } else {return}
    };


    return (
        <div className="App">
        <Nav />
            <header className="App-header">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className="hr"></div>
                  <h2>
                    Login
                </h2>
                <div className="hr"></div>
                  
                </div>
              
                    <div style={{ margin: "50px 10px" }}>
                        <form onSubmit={(e) => { handleSubmit(e, 'none') }}>

                            <div className='form-group'>
                                <input type="email" className="form-control" name="email" style={{ borderRadius: 5, marginBottom: 20, height: 40 }} placeholder="Enter Email ID*" onChange={(e) => setEmail(e.target.value)} required />
                            </div>

                            <div className='form-group'>
                                <input type="text" className="form-control" name="otp-email" style={{ borderRadius: 5, height: 40, marginBottom: 20 }} placeholder="Enter OTP Sent to Your Email*" onChange={(e) => setOtpEmail(e.target.value)} required />
                            </div>

                            <div className='form-group'>
                                <input type="text" className="form-control" name="otp-phone" style={{ borderRadius: 5, height: 40, marginBottom: 20 }} placeholder="Enter Registered Mobile Number*" onChange={(e) => setOtpPhone(e.target.value)} required />
                            </div>

                            <div className="form-group" style={{display:'flex', justifyContent:'left'}}>
                              <button onClick={(e) => handleSubmit(e, '/signup')} type='submit' href="#." className="btn btn-success otp" name='submit' >Click to Verify Phone Number</button>
                            </div>


                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <input type="checkbox" name="marketing" />
                                        <p style={{ fontSize: 12 }}>Remember Me</p>
                                    </div>
                                </>
                <p style={{ fontSize: 12 }}><a onClick={(e) => handleSubmit(e, '/reset')}>Forgot Password?</a></p>
                            </div>
                            <button onClick={(e) => handleSubmit(e, '/signup')} type='submit' href="#." className="btn btn-success submit" name='submit' >Login</button>
                        </form>
                    </div>
              
                


            </header>
       
        </div>
        
    );
}


export default App;
