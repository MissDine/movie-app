import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<div className ="row">
			{props.movies.map((movie, index) => (
				<div className='mt-5 col-sm-3 d-flex justify-content-center flex-column pl-3'>
					<div className='card p-3 bg-dark text-white'>
						<img src={movie.Poster} alt='movie' className='Poster-image'/>
						<div
							onClick={() => props.handleFavouritesClick(movie)}
							className=''
						>
							<FavouriteComponent />
						</div>
					</div>


				</div>
			))}
		</div>
	);
};

export default MovieList;