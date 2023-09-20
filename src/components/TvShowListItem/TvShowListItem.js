import s from './style.module.css'
import {SMALL_IMG_COVER_BASE_URL} from "../../config";

function TvShowListItem({tvShow, onClick}) {
    return (
        <div onClick={() => onClick(tvShow)} className={s.container}>
            <img src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path} alt={tvShow.original_title} className={s.img}/>
            <div className={s.title}>{tvShow.original_title}</div>
        </div>
    );
}

export default TvShowListItem;