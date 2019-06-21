import React from 'react';
import './Card.css'




const Card = (props) => {
    var { id, name, jobtitle, linkedin, image } = props;

    if (image === '') {
        image = `https://robohash.org/${id}?set=set3`;
    }
    if (linkedin === '') {
        var linkedinPresent = false;

    }

    return (
        <div className='card' >
            <div className="card-img"><img alt="User Imamge" src={image} height="100px" width="100px" /></div>
            <div className="card-text">
                <h1>{name}</h1>
                <p>{jobtitle}</p>
                <div className={`linklogo`} >
                    <div className={` ${(linkedinPresent === false) ? `hide` : 'show'}`}>
                        <a href={linkedin}><p className={`linkedinlogo `}>in</p></a>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Card;