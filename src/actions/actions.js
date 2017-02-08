const GET_INPUT_VALUE = "GET_INPUT_VALUE";
const GET_API_DATA = "GET_API_DATA";
const url = "https://api.github.com/users/";

export const fetchApi = (json) => {
	return {
		type: GET_API_DATA,
		payload: json
	}
};


export const getInputValue = ( name ) => {
	return dispatch => {
		return fetch(url + name)
		.then( response => response.json() )
		.then( json => dispatch(fetchApi(json)) )
		.catch( error => alert(error) )
	}
};
