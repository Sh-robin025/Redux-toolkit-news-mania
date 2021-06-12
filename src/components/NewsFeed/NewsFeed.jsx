import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newsData } from '../../features/newsSlice';
// import { newsData } from '../../features/user/userSlice';
import SingleNews from './SingleNews';

const NewsFeed = () => {
    const dispatch = useDispatch()
    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=346c7bdd368b4b0fb5724669204c3d81")
            .then(res => {
                dispatch(newsData(res.data.articles))
                setNews(res.data.articles)
            })
    }, [])

    return (
        <div className="pt-5 text-center">
            {
                news.length ?
                    news.map(e => <SingleNews news={e} key={e.id}/>) : 'Loading...'
            }

        </div>
    );
};

export default NewsFeed;

// Api key
// 346c7bdd368b4b0fb5724669204c3d81