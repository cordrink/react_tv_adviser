import React from 'react';
import {Star as StarEmpty, StarFill, StarHalf} from "react-bootstrap-icons";

function FiveStarRating({rating}) {
    // Déclarer un tableau d'étoiles (jsx) vide
    const starList = [];
    // Stocker dans une variable le nombre d'etoitle pleine
    const starFillCount = Math.floor(rating);
    // Stocker dans une variable si oui ou non il y'a une demi etoile
    const starHalf = rating - starFillCount >= 0.5;
    // Stocker dans une variable le nombre d'etoile vide
    const starEmpty = 5 - starFillCount - (starHalf ? 1 : 0);
    // Pusher dans le tableau les etoiles pleine
    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={"star-fill" + i} />);
    }
    // Pusher dans le tableau les demi etoile (s'il y'en a)
    if (starHalf) {
        starList.push(<StarHalf key={"star-half"} />)
    }
    // Pusher dans le tableau les etoiles vide
    for (let i = 1; i <= starEmpty; i++) {
        starList.push(<StarEmpty key={"empty-fill" + i} />);
    }
    return (
        <div>
            {starList}
        </div>
    );
}

export default FiveStarRating;