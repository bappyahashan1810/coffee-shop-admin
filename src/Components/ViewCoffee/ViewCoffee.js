import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import View from '../View/View';
import Swal from 'sweetalert2'

const ViewCoffee = () => {
    const loadCoffee = useLoaderData();
    const [coffees, setCoffees] = useState(loadCoffee)
    const handleDeleteCoffee = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        console.log(id);
        fetch(`http://localhost:5000/coffee/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remainingCoffee = coffees.filter(coffee => coffee._id !== id);
                setCoffees(remainingCoffee);
            })
    }

    return (
        <div className=' max-w-[1240px] md:grid grid-cols-2 mx-auto'>
            {
                coffees.map(coffee => <View
                    key={coffee._id}
                    coffee={coffee}
                    handleDeleteCoffee={handleDeleteCoffee}
                ></View>)
            }

        </div>
    );
};

export default ViewCoffee;