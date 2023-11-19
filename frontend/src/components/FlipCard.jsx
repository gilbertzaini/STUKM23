import "./FlipCard.css";

const FlipCard= (props) =>{
    return(
        <div class="maincontainer">
        <div class="card">
            <div class="front">
                <img src={props.sponsor.logo} />
            </div>
            <div class="back">
                <h1>{props.sponsor.nama}</h1>
                <div class="social-media">
                    <a class="social-item" href={props.sponsor.linksosmed1}>
                        <img src={props.sponsor.logososmed1} alt="Logo Sosmed1"/>
                        <p>{props.sponsor.sosmed1}</p>
                    </a>
                    <a class="social-item" href={props.sponsor.linksosmed2}>
                        <img src={props.sponsor.logososmed2} alt="Logo Sosmed2"/>
                        <p>{props.sponsor.sosmed2}</p>
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FlipCard;