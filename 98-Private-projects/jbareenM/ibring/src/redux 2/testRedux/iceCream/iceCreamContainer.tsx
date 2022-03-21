import React from 'react'
import { buyIceCream } from '..'
import { connect } from 'react-redux';

function IceCreamContainer(props: any) {
    return (
        <div>
            <h2>number of icecream - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>buy icecream</button>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);