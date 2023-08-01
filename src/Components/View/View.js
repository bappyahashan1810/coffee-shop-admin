import React from 'react';
import { GrView } from 'react-icons/gr';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const View = ({ coffee, handleDeleteCoffee }) => {
    const { name, quantity, price, category, photo, _id } = coffee;

    return (
        <div className='flex items-center gap-4 mt-4 bg-[#F5F4F1] ml-3'>
            <div className='p-5'>
                <img className='w-[185px] h-[239px]' src={photo} alt="" />
            </div>
            <div className='p-5'>
                <p ><span className='font-bold'>Name:</span> {name}</p>
                <p ><span className='font-bold'>Category:</span> {category}</p>
                <p ><span className='font-bold'>Quantity:</span> {quantity}</p>
                <p ><span className='font-bold'>Price:</span> {price}</p>
            </div>
            <div className=' p-2 '>
                <Link to={`/viewindivisualcoffee/${_id}`}><GrView className='mb-[70px] text-white bg-yellow-700 text-2xl rounded'></GrView></Link>
                <Link to={`/updatecoffee/${_id}`}><BiEditAlt className='mb-[70px] text-white bg-black text-2xl rounded'></BiEditAlt></Link>
                <AiOutlineDelete onClick={() => handleDeleteCoffee(_id)} className='text-white bg-red-600 text-2xl rounded'></AiOutlineDelete>

            </div>
        </div>
    );
};

export default View;