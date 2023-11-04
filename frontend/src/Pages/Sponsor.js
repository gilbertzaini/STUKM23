import "./Sponsor.css";
import FlipCard from "../components/FlipCard";

function Sponsor(){
    return(
        <div class="container">
            <div class="title">
                <h1 class="title">Our Sponsor</h1>
            </div>
            
            <div class="sponsor">
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
            </div>

            
        </div>
    )
}

export default Sponsor;