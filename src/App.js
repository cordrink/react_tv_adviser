import React, {useEffect, useState} from 'react';
import s from './style.module.css';
import './global.css'
import {TvShowAPI} from "./api/tv-show";
import {BACKDROP_BASE_URL} from "./config";
import TvshowDetail from "./components/TvShowDetail/TvshowDetail";
import Logo from "./components/Logo/Logo";
import logo from './assets/images/logo.png'
import TvShowListItem from "./components/TvShowListItem/TvShowListItem";
import TvShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";


function App(props) {

    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    useEffect( () => {
        fetchPopular();
    }, []);
    useEffect( () => {
        if (currentTVShow) {
            fetchRecommendations(currentTVShow.id);
        }
    }, [currentTVShow]);

    async function fetchPopular() {
        const populars = await TvShowAPI.fetchPopulars();

        if (populars.length > 0) {
            setCurrentTVShow(populars[0]);
        }
    }
    async function fetchRecommendations(tvShowId) {
        const recommendations = await TvShowAPI.fetchRecommendations(tvShowId);

        if (recommendations.length > 0) {
            setRecommendationList(recommendations.slice(0, 10));
        }
    }

    const searchTVShow = async tvShowName => {
        const searchResponse = await TvShowAPI.fetchByTitle(tvShowName);

        if (searchResponse.length > 0) {
            setCurrentTVShow(searchResponse[0]);
        }
    }


    return (
        <div className={s.main_container} style={{background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` : "black"}} >
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo
                            title="Watowatch"
                            subtitle="Find a show you may like"
                            image={logo}
                        />
                    </div>
                    
                    <div className="col-sm-12 col-md-4">
                        <SearchBar onSubmit={searchTVShow} />
                    </div>
                </div>
            </div>

            <div className={s.tv_show_detail}>
                {currentTVShow && <TvshowDetail tvShow={currentTVShow}/>}
            </div>

            <div className={s.recommendations}>
                {recommendationList && recommendationList.length > 0 &&
                    <TvShowList onClickItem={setCurrentTVShow} tvShowList={recommendationList}/>
                }
            </div>
        </div>
    );
}

export default App;