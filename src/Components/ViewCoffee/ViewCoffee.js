import React from 'react';
import { useLoaderData } from 'react-router-dom';
import View from '../View/View';

const ViewCoffee = () => {
    const coffees = useLoaderData();

    return (
        <div className=' max-w-[1240px] md:grid grid-cols-2 mx-auto'>
            {
                coffees.map(coffee => <View
                    key={coffee._id}
                    coffee={coffee}
                ></View>)
            }

        </div>
    );
};

export default ViewCoffee;