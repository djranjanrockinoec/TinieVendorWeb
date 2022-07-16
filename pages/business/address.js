
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../../styles/address.module.css'

const Reset = () => {
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
            <div className={styles.contain}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <p className={styles.basic}>Basic Information</p>
                    <p className={styles.business}>Business Information</p>
                    <p className={styles.address}>Address</p>
                </div>
                <div className={styles.box}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '52px 32px'}}>
                        <form onSubmit={(e) => { handleSubmit(e, 'none') }}>
                                <div className='form-group'>
                                    <input type="text" className="form-control" name="address" placeholder="Address (House No, Street)*" onChange={(e) => setOtpPhone(e.target.value)} required />
                                </div>
                                <div className='form-group'>
                                    <input type="text" className="form-control" name="pincode" placeholder="Pincode*" onChange={(e) => setOtpPhone(e.target.value)} required />
                                </div>
                                <div className='form-group'>
                                    <input type="text" className="form-control" name="pincode" placeholder="City*" onChange={(e) => setOtpPhone(e.target.value)} required />
                                </div>
                            <div className='form-group'>
                                <input type="text" className="form-control" name="pincode" placeholder="State*" onChange={(e) => setOtpPhone(e.target.value)} required />
                            </div>
 
                            </form>   
                    </div>
                    <div id="googleMap" style={{ width: '100%', height: 400 }}></div>
                </div>
                <button onClick={(e) => handleSubmit(e, '/business')} type='submit' href="#." className="btn btn-success submit" name='submit' >Next</button>
            </div>

            {
                function myMap() {
                    var mapProp = {
                        center: new google.maps.LatLng(51.508742, -0.120850),
                        zoom: 5,
                    };
                    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                }
            }

            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>

        </div>

    );
}


export default Reset;
