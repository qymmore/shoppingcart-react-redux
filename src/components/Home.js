import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from './actions/cartActions';

function Home(props){
    const handleClick = (id) => {
        props.addToCart(id);
    }
    let itemList = props.items.map(item => {
        return(
            <div className="bg-slate-100 w-72" key={item.id}>
                    <img src={item.img} alt={item.title} className="w-36 mr-7"></img>
                    <span className="self-center">{item.title}</span>
                    <span to="/" className="cursor-pointer" onClick={() => handleClick(item.id)}><i className="material-icons">add</i></span>
                    <p>{item.desc}</p>
                    <p><b>Price: ${item.price}</b></p>
            </div>
        )
    })
    return(
        <div className='container'>
            <h3 className="center">Our items</h3>
            <div className="flex justify-between flex-wrap">
                {itemList}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);