import { useParams } from "react-router-dom";
import * as React from 'react';
import { useState} from "react";   

import MovieList from "./MovieList";

const  MovieDesc= () => {
    const {id}= useParams();
    const [movieList,SetmovietList]= useState([
        {
        title:'Bright',
        description:'Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.',
        posterUrl:'https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg',
        date:'2017, David Ayer',
        genre:'Action, Crime, Fantasy',
        duration:'117 min',
        rating:7.5,
        trailer:'https://www.youtube.com/watch?v=6EZCBSsBxko'
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

    return ( 
        <div className="description">
        {
           movieList.map((value,index)=>(
           value.title===id ?  <div class="container">
           <div class="card">
             <div class="card__image-container">
               <img class="card__image" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80" alt=""/>
             </div>
         
             <svg class="card__svg" viewBox="0 0 800 500">
         
               <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
               <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
             </svg>
             <div class="Title">
             <h1 >Trailer
               <div class="Title__highlight"></div>
             </h1>
             <div class="Title__underline"></div>
             <div aria-hidden class="Title__filled"><a href={value.trailer} >Trailer</a></div>
           </div>
             <div class="card__content">
               <h1 class="card__title">{id} </h1>
               <p>{value.description}</p>
             </div>
           </div>
         </div> : null
           ))
              
              
        }
   
    
    </div>);
}
export default MovieDesc;