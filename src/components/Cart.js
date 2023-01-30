import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import {removeItem, addQuantity, subtractQuantity} from './actions/cartActions';

function Cart(props){
    const handleRemove = (id) => {
        props.removeItem(id);
    }

    const handleAddQuantity = (id) => {
        props.addQuantity(id);
    }

    const handleSubtractQuantity = (id) => {
        props.subtractQuantity(id);
    }

    let addedItems = props.items.length ? (
        props.items.map(item => {
            return(
                <li className='collection-item avatar' key={item.id}>
                    <div className='item-img'>
                        <img src={item.img} alt={item.img} className=""/>
                    </div>

                    <div className='item-desc'>
                        <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: ${item.price}</b></p> 
                            <p><b>Quantity: {item.quantity}</b></p>
                            <div className="add-remove">
                                <span to="/cart" onClick={() => handleAddQuantity(item.id)}><i className="material-icons cursor-pointer">arrow_drop_up</i></span>
                                <i className="material-icons" onClick={() => handleSubtractQuantity(item.id)}>arrow_drop_down</i>
                            </div>
                            <button className="" onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>        
                </li>
            )
        })
    ): (
        <p>Nothing</p>
    )
    return(
        <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>  
            </div>
    )
}

const mapStateToProps = (state) => {
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
