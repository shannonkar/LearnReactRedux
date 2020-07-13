import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


function CakeContainer(props) {
	return(
		<div>
			<h2>Number of Cakes -{props.numOfCakes}</h2>
			<button onClick = {props.buyCake}>Buy Cakes </button>
		</div>

		)
}
//access redux state in components
 const mapStateToProps = state => {
  	return{
  		numOfCakes: state.numOfCakes
  	}
  }
  //to dispatch actions
  const mapDispatchToProps = dispatch =>{
  	return{
  		buyCake: () => dispatch(buyCake())
  	}
  }
  //connects react components to the redux store
export default connect(
	mapStateToProps,
	mapDispatchToProps) (CakeContainer) 