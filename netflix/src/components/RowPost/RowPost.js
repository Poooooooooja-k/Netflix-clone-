import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Axios from '../../Axios'
import { API_KEY,imageUrl } from '../../constants/Constants'
import Youtube from 'react-youtube'
import axios from 'axios'
function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState("")
    useEffect(()=>{
        Axios.get(props.url).then(response=>{
            console.log("data from rowposter:",response.data)
            setMovies(response.data.results)
           
        }).catch(err=>{
            //  alert('error')
        })
    },[])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    const handleMovie=(id)=>{
        console.log(id)
        Axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          if(response.data.results.length!==0){
            console.log('hanlemovie:',response.data)
            setUrlId(response.data.results)
          }else{
            console.log('Array empty')
          }
        })
    }
  return (
    <div className='row'> 
      <h2>{props.title}</h2>
      <div className='posters'>
        {
        movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)}
            className= {props.isSmall?'smallPoster':'poster'} 
            src= {`${imageUrl+obj.backdrop_path}`}
            alt= "poster" />
        )}

      </div>
     {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}
export default RowPost
