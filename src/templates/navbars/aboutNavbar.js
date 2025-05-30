import { Link }         from "react-router-dom";
import Logo             from "../../media/logo.webp";
import                       "../../css/navbar.css";

const navbar = () => {
    return (
        <div className="navbar0">
            <header>
                <div>
                    <Link className="logo" to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                    <Link className="logo" to="/">
                        <h1>PaRaMeRoS</h1>
                    </Link>
                </div>
                <ul className="nav0">
                    <li><Link to="/">
                        Home
                    </Link></li>
                    <li><Link to="/about" id="active">
                        About
                    </Link></li>
                    <li><Link to="/events">
                        Events
                    </Link></li>
                    <li><Link to="/terminal">
                        Log In
                    </Link></li>
                </ul>
            </header>
            <div className="main0">
                <div>
                    <h2 className="no">About Us</h2>
                </div>
            </div>
        </div>
    );
}

export default navbar;
