import { Link } from "react-router-dom";

const MovieCard = (props) => {
    const img = props.background;
    return (
        <div className="MovieCard">
            <div className="MovieCard" >
                <Link to={`/movie/${props.title}/`}>
                    <div class="movie_card" id="bright" style={{ background: `url(${props.posterUrl})`, backgroundRepeat: "round", backgroundSize: '40%' }} >
                        <div class="info_section" >
                            <div class="movie_header">
                                <img class="locandina" src={props.posterUrl} />
                                <h1>{props.title}</h1>
                                <h4>{props.date}</h4>
                                <span class="minutes">{props.duration}</span>
                                <p class="type">{props.genre}</p>
                                <br />
                                <fieldset class="rating">
                                    <input type="radio" id="star5" name="rating" value="5" />
                                    <label class="full" for="star5" title="Awesome - 5 stars"></label>
                                    <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                    <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label class="full" for="star4" title="Pretty good - 4 stars"></label>
                                    <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                    <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label class="full" for="star3" title="Meh - 3 stars"></label>
                                    <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                    <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                                    <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                    <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label class="full" for="star1" title="Sucks big time - 1 star"></label>
                                    <input type="radio" id="starhalf" name="rating" value="half" />
                                    <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                </fieldset>
                            </div>
                            <div class="movie_desc">
                                <p class="text">
                                    {props.description}
                                </p>
                            </div>
                            <div class="movie_social">
                                <ul>
                                    <li><div class="card-movie__rating">{props.rating}</div></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
        </div>


    );
}

export default MovieCard;