import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <ul className='p-10 flex items-center gap-3 bg-blue-300'>
                <li><Link className='border border-black p-2 rounded' to='/'>Add Coffee</Link></li>
                <li><Link className='border border-black p-2 rounded' to='/updatecoffee'>Update Coffee</Link></li>
                <li><Link className='border border-black p-2 rounded' to='/viewcoffee'>View Coffee</Link></li>
            </ul>
        </div>
    );
};

export default Header;