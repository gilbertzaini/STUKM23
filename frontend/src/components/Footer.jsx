import instagram from '../assets/logo/instagram.svg';
import tiktok from '../assets/logo/tiktok.svg';
import email from '../assets/image/email.png';
import whatsapp from '../assets/image/whatsapp.png';

import './Footer.css'

const Footer = () => {
    return(
        <>
            <footer className='footer'>
                <div className='wrapper'>
                    <div className='contact'>
                        <h4>Contact Us</h4>
                        <div className='sosmed-wrapper'>
                            <div className='sosmed'>
                                <img src={instagram} alt='instagram-icon' />
                                <a target='_blank' href='https://www.instagram.com/serahtahunanumn/'>@serahtahunanumn</a>
                            </div>
                            <div className='sosmed'>
                                <img src={tiktok} alt='tiktok-icon' />
                                <a target='_blank' href='https://www.tiktok.com/@serahtahunan.umn'>@serahtahunanumn</a>
                            </div>
                            <div className='sosmed'>
                                <img src={email} alt='email-icon' />
                                <a target='_blank'>@serah.tahunan@umn.ac.id</a>
                            </div>
                        </div>
                    </div>
                    <div className='be-our-sponsor'>
                        <h4>Be Our Sponsor!</h4>
                        <div className='contact-wrapper'>
                            <div className='cp'>
                                <img src={whatsapp} alt='whatsapp-icon' />
                                <a target='_blank'>081278461663 (Septhia Rosa Tambunan)</a>
                            </div>
                            <div className='cp'>
                                <img src={whatsapp} alt='whatsapp-icon' />
                                <a target='_blank'>082249520937 (Deryan Richardo Nugraha)</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>This website is managed by STUKM’s website team</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;