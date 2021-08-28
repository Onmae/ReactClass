import axios from "axios";
import React from "react";
import Movie from "./Movie";
import "./List.css";
import SwipeableViews from "react-swipeable-views";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const data = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState(() => {
      return {
        movies: data.data.data.movies,
      };
    });
  };

  render() {
    return (
      <div className="list__container">
        <SwipeableViews enableMouseEvents>
          {this.state.movies.map((e) => (
            <Movie key={e.id} img={e.medium_cover_image} rating={e.rating} title={e.title} summary={e.summary} />
          ))}
        </SwipeableViews>
      </div>
    );
  }
}

export default List;
