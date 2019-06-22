import React from 'react';
import './Card.css';


const Card = (props) => {
    var { id, name, insta, jobtitle, email, linkedin, image } = props;

    if (image === '') {
        image = `https://robohash.org/${id}?set=set3`;
    }
    if (linkedin === '') {
        var linkedinPresent = false;
    }
    if (insta === '') {
        var instapresent = false;
    }

    return (
        <div className='card' >
            <div className="card-img"><img alt="User Imamge" src={image} height="100px" width="100px" /></div>
            <div className="card-text">
                <h1>{name}</h1>
                <p>{jobtitle}</p>
                <div className={`linklogo`} >
                    <div className={` ${(linkedinPresent === false) ? `hide` : 'show'}`}>
                        <a href={linkedin}><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="show">
                        <a href={`mailto:${email}`} ><i className="fas fa-envelope-open-text email"></i></a>
                    </div>
                    <div className={` ${(instapresent === false) ? `hide` : 'show'}`}>
                        <a href={`https://www.instagram.com/${insta}/`} ><i className="fab fa-instagram email"></i></a>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Card;