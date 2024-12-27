import { useEffect }    from "react";
import { useState }     from "react";
import axios            from "axios";
import Navbar           from "../navbars/teamNavbar";
import Footer           from "../footers/footer";
import User             from "./user";
import                       "../../css/hobbies.css";

const team = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const getTeam = async () => {
            const res = await axios.get(process.env.REACT_APP_API + "team");
            setTeam(res.data)
        }
        getTeam();
    }, []);

    return (
        <div className="events">
            <Navbar/>
            <div className="infos">
                <br />
                <br />
                <br />
                <br />
                <br />
                {/*
                <div className="info info1">
                    <div className="content l">
                        <h3>Hobbys hinzufügen?</h3>
                        <p>Mail uns!</p>
                        <form action='https://formsubmit.co/PaRaMeRoS@mein.gmx' className="email" method='POST'>
                            <label htmlFor="name">Name:</label>
                            <input type='text' name='name' required/>
                            <label htmlFor="email">Deine Email:</label>
                            <input type="email" name="email" required/>
                            <label htmlFor="message">Dein Hobby:</label>
                            <textarea name='message' required placeholder=''/>
                            <input type='submit' value='Senden'/>
                        </form>
                    </div>
                </div>
                */}
                {team.map(p => (
                    <User user={p}/>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default team;