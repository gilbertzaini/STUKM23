import "./Sponsor.css";
import paimon from "./paimon.png";


function Sponsor(){
    return(

        <div class="card">
            <div class="front">
                <img src={paimon} />
            </div>
            <div class="back">
                <h1>Nama Sponsor</h1>
                <p>logo</p>
                
            </div>
        </div>

    )
}

export default Sponsor;