import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='search'>
			<input
				className='form-control my-input'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='  &#128269;  Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;