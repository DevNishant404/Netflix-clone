import { useEffect, useState } from "react";
import backArrowIcon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from "react-router-dom";
function Player() {
    const navigate=useNavigate()
    const {id}=useParams()
    const[apiData,setApiData]=useState({
        name:"",
        key:"",
        published_at:"",
        type:"",
    })
    console.log(apiData)

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjFjMzMyNmYwMTQxNDg4MmE5ZTcxZDA5M2IxNzViNyIsIm5iZiI6MTczNjYxNDU5NC4wNDksInN1YiI6IjY3ODJhMmMyNjAxYWNmZTdiZDRlZjczYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAlGhuq0DyqPxQ1PghdtQkQL8KsvfhF3wXGM3tjL2Pk'
        }
      };
      
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
      },[])



    return ( 
        <div className="h-[100vh] flex flex-col justify-center items-center">
            <img
            onClick={()=>{navigate(-2)}}
            className="absolute top-[0px] left-[20px] w-[40px] cursor-pointer" src={backArrowIcon} alt="" />
            <iframe
            className="rounded-md"
            width={"95%"} height={"80%"} src={`https://www.youtube.com/embed/${apiData.key}`}
            title="trailer"
            frameBorder={"0"}
            allowFullScreen
            ></iframe>
            <div className="flex items-center justify-between w-[95%]">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p className="max-w-[150px] whitespace-nowrap text-ellipsis overflow-hidden">{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
     );
}

export default Player;