import EventLogo from "../assets/event-logo.png"

function Home () {
    return (
        <>
        <section className="Home">
            <div className="Home-content">
                <h1>PASSION. TEAMWORK.</h1>
                <h2>VICTORY.</h2>

                <p>The official platform for frisbee community competition. Celebrate excellence within the frisbee community.</p>

                <a className="btn-1" href="#">Register Your Team</a>
                <a className="btn-1" href="#">View Event</a>
            </div>
        </section>

        <section className="Events">
            <div className="card">
                <h2>UPCOMING EVENT</h2>
                <div className="body">
                <div className="img-box square">
                    <img src={EventLogo} alt="Event logo"/>
                </div>
                <div className="info">
                    <h3>Maasin Frisbee Cup 2026</h3>
                    <p><span>📅</span> August 23 - 24, 2026</p>
                    <p><span>📍</span> Maasin City, Pilot School</p>
                    <p className="desc">Get Ready for the biggest frisbee Tournament...</p>
                    <a className="btn-light" href="#">view Details</a>
                </div>
                </div>
            </div>

            <div className="card">
                <h2>LATEST CHAMPION</h2>
                <div className="body">
                <div className="img-box pill">
                    <img src={EventLogo} alt="Event logo" />
                </div>
                <div className="info">
                    <h3>Team Alpha</h3>
                    <p className="highlight"><span>🏆</span> Champion</p>
                    <p>Maasin Frisbee Cup 2025</p>
                    <a className="btn-light" href="#">View All Champion</a>
                </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Home