import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewIndivisualCoffee = () => {
    const coffee = useLoaderData();
    const { name, quantity, supplier, price, category, details, photo } = coffee;
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-10'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="pt-5"><span className='font-bold'>Quantity:</span> {quantity}</p>
                        <p className="py-1"><span className='font-bold'>Supplier:</span> {supplier}</p>
                        <p className="py-1"><span className='font-bold'>Price:</span> {price}</p>
                        <p className="py-1"><span className='font-bold'>Category:</span> {category}</p>
                        <p className="py-1"><span className='font-bold'>Details:</span> {details}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewIndivisualCoffee;