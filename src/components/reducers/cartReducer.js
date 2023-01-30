import uniqid from 'uniqid';
import item1 from '../images/item1.png';
import item2 from '../images/item2.png';
import item3 from '../images/item3.png';
import item4 from '../images/item4.png';
import item5 from '../images/item5.png';
import item6 from '../images/item6.png';
import item7 from '../images/item7.png';
import item8 from '../images/item8.png';
import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY} from '../actions/action-types/cart-actions';

const initState = {
    items: [
        {
            id: uniqid(),
            title: 'Nike Ya Elemental Graphic Backpack',
            desc: 'Lorem ipsum dolor sit amet',
            price: 45.99,
            img: item1,
        },
        {
            id: uniqid(),
            title: 'Ripzone Kids Newton 15L Backpack',
            desc: 'Lorem ipsum dolor sit amet',
            price: 34.99,
            img: item2,
        },
        {
            id: uniqid(),
            title: 'adidas Energy Backpack',
            desc: 'Lorem ipsum dolor sit amet',
            price: 64.99,
            img: item3,
        },
        {
            id: uniqid(),
            title: 'Under Armour Unisex Contain School/Gym Backpack',
            desc: 'Lorem ipsum dolor sit amet',
            price: 89.99,
            img: item4,
        },
        {
            id: uniqid(),
            title: 'Nike Sportswear Womens Futura Luxe Backpack',
            desc: 'Lorem ipsum dolor sit amet',
            price: 67.97,
            img: item5,
        },
        {
            id: uniqid(),
            title: 'Vans Got This Mini Backpack',
            desc: 'Lorem ipsum dolor sit amet',
            price: 21.97,
            img: item6,
        },
        {
            id: uniqid(),
            title: 'Nike Kids YA Brasilia Varsity School Backpack',
            desc: 'Lorem ipsum dolor sit amet',
            price: 29.99,
            img: item7,
        },
        {
            id: uniqid(),
            title: 'Dakine 365 21L Womens Backpack',
            desc: 'Lorem ipsum dolor sit amet',
            price: 64.99,
            img: item8,
        }
    ],
    addedItems: [],
    total: 0
}

function cartReducer(state = initState, action){
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      
      //calculating the total
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      console.log(itemToRemove)
      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
      let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedItem = state.items.find(item=> item.id === action.id) 
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.id !== action.id)
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              total: newTotal
          }
      }
      
  }
  
else{
  return state
  }
  
}

export default cartReducer;