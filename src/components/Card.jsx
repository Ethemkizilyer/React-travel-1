import React from "react";


const Card =({item}) => {
    const{id,title,desc,image} =item;
    console.log(title)
    return (
        <div className="card">
            <div className="title"><h1>{title}</h1></div>
            <div className="image"><img src={image} alt={title} /></div>
            <div className="desc"><p>{desc}</p></div>

        </div>
    )
}
export default Card;