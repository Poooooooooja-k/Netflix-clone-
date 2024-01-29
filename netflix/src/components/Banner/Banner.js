import React, { useEffect ,useState} from 'react';
import { API_KEY ,imageUrl} from '../../constants/Constants';
import './Banner.css';
import Axios from '../../Axios';

const Banner = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        Axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                // console.log(response.data.results[1]);
                // setMovie(response.data.results[1]);
                const movies = response.data.results;
                const randomIndex = Math.floor(Math.random() * movies.length);
                const randomMovie = movies[randomIndex];
                console.log(randomMovie);
                setMovie(randomMovie);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie.title}</h1>
                <div className='banner-btns'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie? movie.overview:""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
};

export default Banner;
