import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, quantity, supplier, price, category, details, photo, _id } = coffee;
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, price, category, details, photo };
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
    }
    return (
        <div className='max-w-[1240px] mx-auto '>
            <h1 className='text-2xl font-bold text-center'>Update Coffee</h1>
            <form onSubmit={handleSubmit} className='bg-gray-200 p-10 mx-[42px] items-center'>
                {/* coffee name and quantity */}
                <div className='flex gap-10 items-center justify-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>

                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder="Coffee name" name='name' defaultValue={name} className="input input-bordered w-full max-w-xs" />
                        </label>

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Coffee Quantity</span>

                        </label>
                        <input type="text" placeholder="coffee quantity" name='quantity' defaultValue={quantity} className="input input-bordered w-full max-w-xs" />

                    </div>

                </div>
                {/* coffee supplier and taste */}
                <div className='flex gap-10 items-center justify-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Coffee Supplier</span>

                        </label>
                        <input type="text" placeholder="coffee supplier" name='supplier' defaultValue={supplier} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Coffee Price</span>

                        </label>
                        <input type="text" placeholder="coffee price" name='price' defaultValue={price} className="input input-bordered w-full max-w-xs" />

                    </div>

                </div>
                {/* coffee category and details */}
                <div className='flex gap-10 items-center justify-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Coffee Category</span>

                        </label>
                        <input type="text" placeholder="coffee category" name='category' defaultValue={category} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Coffee Details</span>

                        </label>
                        <input type="text" placeholder="coffee details" name='details' defaultValue={details} className="input input-bordered w-full max-w-xs" />

                    </div>

                </div>
                <div className='items-center justify-center flex'>
                    <div className="form-control w-[670px]  ">
                        <label className="label">
                            <span className="label-text">Coffee Photo</span>

                        </label>
                        <input type="text" placeholder="coffee URL" name='photo' defaultValue={photo} className="input input-bordered  mx-auto w-[670px] " />

                    </div>


                </div>
                <input className='btn btn-block mt-5 bg-blue-500' type="submit" value="Update Coffee" />
            </form>

        </div>
    );
};

export default UpdateCoffee;