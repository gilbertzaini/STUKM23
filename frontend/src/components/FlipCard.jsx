import "./FlipCard.css";
import paimon from "../assets/image/paimon.png";
import instagram from "../assets/logo/instagram.svg";
import tiktok from "../assets/logo/tiktok.svg";

function FlipCard(){
    return(
        <div class="maincontainer">
        <div class="card">
            <div class="front">
                <img src={paimon} />
            </div>
            <div class="back">
                <h1>Nama Sponsor</h1>
                <div class="social-media">
                    <div class="social-item">
                        <img src={instagram} alt="Instagram Logo" />
                        <p>username_ig</p>
                    </div>
                    <div class="social-item">
                        <img src={tiktok} alt="Tiktok Logo" />
                        <p>username_tt</p>
                    </div>
                </div>

            </div>
        </div>
        </div>

    )
}

export default FlipCard;