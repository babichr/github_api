import React from "react";
import { connect } from "react-redux";
import { getInputValue } from "../../actions/actions";
import { store } from "../../store/store";


class Form extends React.Component{

	constructor( props ){
		super( props );
	};

	componentDidMount(){
		store.dispatch(getInputValue(this.props.name));
	}


	render(){

		const { name, getValue, getValueReducer } = this.props;


		if ( name.message === "Not Found" ){
			return(
				<div className="well container">
					<div className="alert alert-danger">
						{ name.message }
					</div>
					<form  onSubmit={ e => { e.preventDefault(); getValue(e) }} >
						<div className="form-group">
							<input name="name" className="form-control" />
						</div>
						<button className="btn btn-primary" >Send</button>
					</form>
				</div>
			)
		}else{
			return(
				<div className="well container">
					<div className="row">
						<div className="col-md-3 col-sm-4 col-md-12">
							<a href={name.html_url} className="thumbnail">
								<img height="300" width="300" src={name.avatar_url} />
							</a>
							<h2>{ name.login }</h2>
							<h3> {name.bio} </h3>
							<h4> Followers: { name.followers } </h4>
							<h4> Following: { name.following } </h4>
							<h4> Public Repos: { name.public_repos } </h4>
						</div>
					</div>
					<form  onSubmit={ e => { e.preventDefault(); getValue(e) }} >
						<div className="form-group">
							<input name="name" className="form-control" />
						</div>
						<button className="btn btn-primary" >Send</button>
					</form>
				</div>
			)
		}
	}
}


const mapStateToProps = ( state ) =>({
	name: state.getValueReducer
});

const mapDispatchToProps = ( dispatch ) =>({
	getValue: (e) => { dispatch(getInputValue(e.target.querySelector('input').value))}
});

Form = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Form;

