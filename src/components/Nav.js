import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav className='bg-indigo-400 pb-6 flex pt-4'>
            <Link to={"/"} className='hover:text-white pl-6'>Shopping</Link>

            <ul className='flex gap-6 ml-auto pr-20'>
                <li className='hover:text-white'><Link to={"/products"}>Products</Link></li>
                <li className=' hover:text-white'><Link to={"/cart"}>Cart</Link></li>
                <li className=' hover:text-white'><Link to={"/cart"}><i className='material-icons'>shopping_cart</i></Link></li>
            </ul>
        </nav>
    )
}

export default Nav;