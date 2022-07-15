
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Success = () => {

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
                <div style={{padding:'30px 30px',boxShadow:'0px 0px 3px 3px #e3e3e3',borderRadius:8}}>
                    <h3 style={{color:'#222222'}}>
                        Password Reset Successful!
                    </h3>
                    <button onClick={(e) => handleSubmit(e, '/')} type='submit' href="#." className="btn btn-success" name='submit' style={{ padding: "12px 60px", margin: '30px 0' }} >Okay</button>
                </div>
                
            </header>
        </div>
    );
}

export default Success;
