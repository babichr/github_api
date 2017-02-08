import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Form from "./components/Form";
import { store } from "./store/store";

class Main extends React.Component{

	render(){
		return (
			<Provider store={store} >
				<main className="main">
					<Form />
				</main>
			</Provider>
		)
	}

};

ReactDOM.render( <Main />, document.getElementById("root") );