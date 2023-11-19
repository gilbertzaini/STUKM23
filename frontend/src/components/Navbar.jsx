import STUKM23 from "../assets/logo/STUKM23.png";
import tiktok from '../assets/logo/tiktok.svg';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="box-logo">
                        <img className="logo-stukm" src={tiktok} alt="" />
                        <a className="text-stukm">STUKM 2023</a>
                    </div>
                    <div className="box-option">
                        <a href="/vote" className="nav-vote">VOTE</a>
                        <a href="/ukm" className="nav-ukm">UKM</a>
                        <a href="/sponsor" className="nav-sponsor">SPONSOR</a>
                        <a href="/medpar" className="nav-medpar">MEDPAR</a>   
                    </div>
                </div>
            </div>      
        </>
    );
};

export default Navbar;