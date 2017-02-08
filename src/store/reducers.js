export const getValueReducer = ( name="babichr" , action ) => {
	switch ( action.type ){
		case "GET_API_DATA":
			return action.payload;
		default: 
			return name
	}
}