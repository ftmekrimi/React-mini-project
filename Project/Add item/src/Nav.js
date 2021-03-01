import React,{useContext} from 'react';
import MovieContext from './MovieContext';

const Nav = () =>{
	const [movies , setmovie] = useContext(MovieContext);
return(
	<div>
	<h3>Fa:) me</h3>
	<p>list of my movie :{movies.length} </p>
	</div>
	);
}

export default Nav;