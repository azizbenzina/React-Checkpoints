import { useState} from "react";   
import MovieCard from "./MovieCard";
import Filter from './Filter';


function MovieList() {
  
    const [movieList,SetmovietList]= useState([
        {
        title:'Bright',
        description:'Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.',
        posterUrl:'https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg',
        date:'2017, David Ayer',
        genre:'Action, Crime, Fantasy',
        duration:'117 min',
        rating:7.5,
        trailer:'www.youtube.com/watch?v=6EZCBSsBxko'
    },
    {
        title:'Tomb Raider',
        description:'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
        posterUrl:'https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg',
        date:'2018, Roar Uthaug',
        genre:'Action, Fantasy',
        duration:'125 min',
        rating:7.0,
        trailer:'https://www.youtube.com/watch?v=8ndhidEmUbI'
    },
    {
        title:'Black Panther',
        description:"T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
        posterUrl:'https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg',
        date:'2018, Ryan Coogler',
        genre:'Action, Adventure, Sci-Fi',
        duration:'134 min',
        rating:8.0,
        trailer:'https://www.youtube.com/watch?v=xjDjIWPwcPU'
    },]);

     const [FiltredList,SeFiltredList]= useState([]);

    return (
      <div className="MovieList">
                <Filter list={movieList} SeFiltredList={SeFiltredList}/>
          {
              movieList.map((value,index)=>(
                <MovieCard title={value.title} description={value.description} posterUrl={value.posterUrl} date={value.date}genre={value.genre}duration={value.duration} rating={value.rating} trailer={value.trailer}/>
              ))
          }
       
      </div>
    );
  }
  export default MovieList;