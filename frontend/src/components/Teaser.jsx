import "./Teaser.css";

function Teaser() {
    return (
        <div className="teaserPage">
            <div className="teaserTitle">
                <h1>Our Teaser</h1>
            </div>
            <div className="teaserVideo">
                <iframe
                    src="https://www.instagram.com/p/Czs-DNTLERV/embed/"
                    width="600"
                    height="700"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    title="Embedded Instagram Post"
                ></iframe>
            </div>
        </div>
    )
}

export default Teaser;
