import React from 'react';

const AnotherAdd = () => {
    const handlerSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name?.value;
        const email = form.email?.value;
        console.log(name, email);
    }
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="name" id="" /><br />
                <div>
                    <input type="text" name="email" id="" /><br />
                </div>
                <input type="submit" value="add " />
            </form>
        </div>
    );
};

export default AnotherAdd;
