import "./Sponsor.css";
import FlipCard from "../components/FlipCard";
import {sponsorList} from "../data/sponsorlist";

const Sponsor = () =>{
    const firstSponsor = sponsorList[0];
    const secondSponsor = sponsorList[1];
    const thirdSponsor = sponsorList[2];

    return(
        <div class="container">
            <div class="title">
                <h1 class="title">Our Sponsor</h1>
            </div>
            
            <div class="sponsor">
                <FlipCard sponsor={firstSponsor}/>
                <FlipCard sponsor={secondSponsor}/>
                <FlipCard sponsor={thirdSponsor}/>
            </div>   
        </div>
    )
}

export default Sponsor;