import instagram from '../assets/logo/instagram.svg';
import tiktok from '../assets/logo/tiktok.svg';
import email from '../assets/logo/back.svg';

const Footer = () => {
    return(
        <>
            <footer className='footer'>
                <div className='contact'>
                    <h5>Contact Us</h5>
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
                <div className='be-our-sponsor'></div>
            </footer>
        </>
    )
}