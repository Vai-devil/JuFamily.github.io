import React from 'react';
import Card from './Card';
import './Card.css';

const Family = ({ memlist }) => {
    return (
        <div className="cardcontainer">
            {
                memlist.map((member, i) => {
                    return (<Card key={i}
                        id={memlist[i].id}
                        name={memlist[i].name}
                        jobtitle={memlist[i].jobtitle}
                        linkedin={memlist[i].linkedin}
                        image={memlist[i].image}
                        email={memlist[i].email}
                        insta={memlist[i].insta} />)
                })
            }

        </div>
    );
}

export default Family;