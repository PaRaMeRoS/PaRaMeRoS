import { Link }         from "react-router-dom";
import                       "../../css/hobbies.css";
const userTemp = ({user}) => {
    return (
        <div className="info">
            <div className="content">
                <h3>{user.name}</h3>
                <p className="no-margin">E-Mail: {user.mail}</p>
                <p className="no-margin">Tel.: {user.tel}</p>
                {/*
                <p className="informations">
                    <p className="author">{user.username}</p>
                    <time>{new Date(user.createdAt).toDateString()}</time>
                </p>
                <p className="desc">{user.desc}</p>
                */}
            </div>
            {/*
            {user.photo && (
                <img className="postImg" src={process.env.REACT_APP_API + "images/" + user.photo} />
            )}
            */}
        </div>
    );
}

export default userTemp;