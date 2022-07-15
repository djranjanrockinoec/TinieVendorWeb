
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '../components/nav'
import styles from '../../styles/business.module.css'

const Reset = () => {
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [otpEmail, setOtpEmail] = useState('');
    const [otpPhone, setOtpPhone] = useState('');

    const handleSubmit = (e, path) => {
        e.preventDefault();


        if (path === '/business/register') {
            router.push(path)
        } else { return }
    };


    return (
        <div className="App">
            <Nav />
            <div className={styles.contain}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <p className={styles.basic}>Basic Information</p>
                    <p className={styles.business}>Business Information</p>
                    <p className={styles.address}>Address</p>
                </div>
                <div className={styles.box}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '52px 32px' }}>
                        <h2 style={{ marginRight: 103 }}>Outlet Owner Details</h2>
                        <form onSubmit={(e) => { handleSubmit(e, 'none') }}>
                            <div className='form-group'>
                                <input type="text" className="form-control" name="name" style={{ borderRadius: 5, height: 40, marginBottom: 20 }} placeholder="Enter Name*" onChange={(e) => setOtpPhone(e.target.value)} required />
                            </div>
                            <div className='form-group'>
                                <input type="email" className="form-control" name="otp" style={{ borderRadius: 5, height: 40, marginBottom: 20 }} placeholder="Enter Email ID*" onChange={(e) => setOtpPhone(e.target.value)} required />
                            </div>
                            <div className='form-group'>
                                <input type="text" className="form-control" name="number" style={{ borderRadius: 5, height: 40, marginBottom: 20 }} placeholder="Enter Mobile Number*" onChange={(e) => setOtpPhone(e.target.value)} required />
                            </div>
                            <div className="form-group" style={{ display: 'flex', justifyContent: 'left' }}>
                                <button onClick={(e) => handleSubmit(e, '/signup')} type='submit' href="#." className="btn btn-success otp" name='submit' >Click to Verify Phone Number</button>
                            </div>
                            <p>Upload Proof of Identification*</p>
                            <div className='form-group'>
                                <input type="file" className="form-control" name="id" style={{ borderRadius: 5, height: 40, marginBottom: 20 }} onChange={(e) => setOtpPhone(e.target.value)} required />
                                <p>Only PDF, JPEG & PNG Files with size Limit 5MB</p>
                            </div>

                        </form>
                    </div>

                </div>
                <button onClick={(e) => handleSubmit(e, '/business/register')} type='submit' href="#." className="btn btn-success submit" name='submit' >Next</button>
            </div>

        </div>

    );
}


export default Reset;
