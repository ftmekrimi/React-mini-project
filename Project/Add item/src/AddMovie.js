import React,{useState ,useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () =>{
	const [name ,setname] = useState('');
	const [price ,setprice] = useState('');
	const [movies , setmovie] = useContext(MovieContext);
	const updatename =(e) =>{
		setname(e.target.value);
	}
	const updateprice =(e) =>{
		setprice(e.target.value);
	}
	const AddMovie = e =>{
		e.preventDefault();
		setmovie(preMovie => [...preMovie,{name :name ,price :price }]);
	};
	return(
		<div>
			<form action="">
				<input type="text" name="name" value={name} onChange={updatename} />
				<input type="text" name="price" value={price} onChange={updateprice}/>
				<button onClick={AddMovie}>Submit</button>
			</form>
		</div>
	);
}
export default AddMovie;
