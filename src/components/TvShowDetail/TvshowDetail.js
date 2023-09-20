import React from 'react';
import s from './style.module.css';
import FiveStarRating from "../FiveStarRating/FiveStarRating";


function TvshowDetail({tvShow}) {
    const rating = tvShow.vote_average / 2;

    return (
        <div>
            <div className={s.title}>{tvShow.original_title}</div>

            <div className={s.rating_container}>
                <FiveStarRating rating={rating} />
                <div className={s.rating}>{rating}/5</div>
            </div>

            <div className={s.overview}>{tvShow.overview}</div>
        </div>
    );
}

export default TvshowDetail;