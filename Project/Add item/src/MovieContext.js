import React,{useState,createContext} from 'react';

export const MovieContext = createContext ();

export const MovieProvider = props  => {
	const [movies , setmovie] =useState(
			[{
				name:'x',
				price:'$10',
				id:'5548415'
			},
			{
				name:'y',
				price:'$50',
				id:'55554415'	
			},
			{
				name:'z',
				price:'$60',
				id:'85644415'	
			}
		]);
	return(
		<MovieContext.Provider value={[movies , setmovie]}  >
		{props.children}
		</MovieContext.Provider>
	);
}
export default MovieContext;