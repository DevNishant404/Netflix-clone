import { useEffect, useRef, useState } from "react";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

function TitleCard({title,category}) {

    const [apiData,setApiData]=useState([])

   




  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjFjMzMyNmYwMTQxNDg4MmE5ZTcxZDA5M2IxNzViNyIsIm5iZiI6MTczNjYxNDU5NC4wNDksInN1YiI6IjY3ODJhMmMyNjAxYWNmZTdiZDRlZjczYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAlGhuq0DyqPxQ1PghdtQkQL8KsvfhF3wXGM3tjL2Pk'
    }
  };
  


  function handleWheel(event) {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="mt-[20px] mb-[0px]">
      <h2 className="text-2xl mb-[8px] lg:mx-0 mx-3">{title?title:"Popular on Netflix"}</h2>
      <div
        className="flex gap-[10px] overflow-x-scroll scrollbar-hide"
        ref={cardsRef}
      >
        {apiData.map((card, idx) => {
          return (
            <Link
            to={`/player/${card.id}`}
            className="relative" key={idx}>
              <img
                className="min-w-[190px] sm:min-w-[240px] cursor-pointer h-auto object-cover rounded-[4px]"
                src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
                alt=""
              />
              <p className="absolute bottom-[10px] right-[10px]">{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCard;
