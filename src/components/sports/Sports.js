import React from "react";
import MoviesCarousal from "../../building-blocks/molecules/MoviesCarousal";
import {
  moviescaurasaldata,
  moviescarousalsettings,
} from "../../assets/mocks/components/sports/Carousaldata";

import {
  filtereddata,
  filtersection,
  filterdata,
} from "../../assets/mocks/components/sports/EventsFilters";


import FiltermoviesMain from '../../building-blocks/organisms/filtermoviesmain/FiltermoviesMain';
import "../../assets/styles/components/stream/StreamMovies.scss";
import "../../assets/styles/components/stream/StreamMovies.scss";

function Sports() {
  return (
    <div className="streamMovies_wrapper">
      <MoviesCarousal
        moviescaurasaldata={moviescaurasaldata}
        moviescarousalsettings={moviescarousalsettings}
      />

      <div className="container_wrap">
        <FiltermoviesMain
          filtereddata={filtereddata}
          filtersection={filtersection}
          filterdata={filterdata}
        />
      </div>

    </div>
  );
}

export default Sports;
