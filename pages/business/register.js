
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '../components/nav'
import styles from '../../styles/register.module.css'

const Reset = () => {
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [otpEmail, setOtpEmail] = useState('');
    const [otpPhone, setOtpPhone] = useState('');

    const handleSubmit = (e, path) => {
        e.preventDefault();


        if (path === '/business/address') {
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
                                    <input type="text" className="form-control" name="business" placeholder="Name of Your Business*" onChange={(e) => setOtpPhone(e.target.value)} required />
                                </div>
                                <div className='form-group'>
                                <select name="type" id="type" className="form-control" onChange={(e) => setType(e.target.value)} required>
                                    <option>Choose Type of Business</option>
                                    <option value="merchant">Sole</option>
                                    <option value="runner">Corporation</option>
                                </select>
                                </div>
                                <div className='form-group'>
                                    <input type="text" className="form-control" name="year" placeholder="Year of Establishment (DD/MM/YYYY)*" onChange={(e) => setOtpPhone(e.target.value)} required />
                                </div>
                            
                            <p className={styles.docs}>Business GSTIN*</p>
                            <div className='form-group'>
                                <input type="file" className="form-control" name="gstin" onChange={(e) => setOtpPhone(e.target.value)} required />
                                <p>Only PDF, JPEG & PNG Files with size Limit 5MB</p>
                            </div>
                            <p className={styles.docs}>Business PAN*</p>
                            <div className='form-group'>
                                <input type="file" className="form-control" name="pan" onChange={(e) => setOtpPhone(e.target.value)} required />
                                <p>Only PDF, JPEG & PNG Files with size Limit 5MB</p>
                            </div>
                            <p className={styles.docs}>Business License*</p>
                            <div className='form-group'>
                                <input type="file" className="form-control" name="license" onChange={(e) => setOtpPhone(e.target.value)} required />
                                <p>Only PDF, JPEG & PNG Files with size Limit 5MB</p>
                            </div>
                            <p className={styles.docs}>Incorportation Certificate*</p>
                            <div className='form-group'>
                                <input type="file" className="form-control" name="cert" onChange={(e) => setOtpPhone(e.target.value)} required />
                                <p>Only PDF, JPEG & PNG Files with size Limit 5MB</p>
                            </div>
                            <p className={styles.docs}>MOC of Business*</p>
                            <div className='form-group'>
                                <input type="file" className="form-control" name="moc" onChange={(e) => setOtpPhone(e.target.value)} required />
                                <p>Only PDF, JPEG & PNG Files with size Limit 5MB</p>
                            </div>
 
                            </form>
                    </div>
                </div>
                <button onClick={(e) => handleSubmit(e, '/business/address')} type='submit' href="#." className="btn btn-success submit" name='submit' >Next</button>
            </div>

        </div>

    );
}


export default Reset;
