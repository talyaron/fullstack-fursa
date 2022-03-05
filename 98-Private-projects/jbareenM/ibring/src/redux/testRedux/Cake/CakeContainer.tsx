import React, { useState } from 'react'
import { buyCake } from '..'
import { connect } from 'react-redux';

function CakeContainer(props: any) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>number of cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={(ev:any) => setNumber(ev.target.value)} />
            <button onClick={() => props.buyCake(number)}>buy {number} cake</button>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        buyCake: (number:number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);