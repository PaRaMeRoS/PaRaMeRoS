import { Link }         from "react-router-dom";
import                       "../../css/footer.css";
import                       "../../css/login.css";

const footer = () => {
    return (
        <div className="footer">
            <div className="space2"></div>
            <br />
            <footer>
                <div className="waves">
                    <div className="wave2" id="wave0"></div>
                    <div className="wave2" id="wave1"></div>
                    <div className="wave2" id="wave2"></div>
                    <div className="wave2" id="wave3"></div>
                </div>
                <ul className="menu">
                    <li><Link to="/">
                        Home
                    </Link></li>
                    <li><Link to="/about">
                        About
                    </Link></li>
                    <li><Link to="/events">
                        Events
                    </Link></li>
                    <li><Link to="/terminal">
                        Log In
                    </Link></li>
                </ul>
                <p>&#169;2024 PaRaMeRoS{/*&#185;*/}</p>
                <p id="p"><Link to="/impressum">Impressum</Link> <Link to="/datenschutz">Datenschutz</Link></p>
                <br />
                {/*<p id="notice">&#185;David Frings & Maximilian Gründinger</p>*/}
            </footer>
        </div>
    );
}

export default footer;