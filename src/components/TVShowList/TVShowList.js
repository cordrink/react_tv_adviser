import s from './style.module.css';
import TvShowListItem from "../TvShowListItem/TvShowListItem";

function TvShowList({ tvShowList, onClickItem }) {
    return (
        <>
            <div className={s.title}>You may also like</div>

            <div className={s.list}>
                {tvShowList.map((tvShow) => {
                    return  (
                        <span key={tvShow.id} className={s.tv_show_List_item}>
                            <TvShowListItem tvShow={tvShow} onClick={onClickItem} />
                        </span>
                    )
                })}
            </div>
        </>
    );
}

export default TvShowList;