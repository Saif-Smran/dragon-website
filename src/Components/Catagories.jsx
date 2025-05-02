import React, { use } from 'react';
import { NavLink } from 'react-router';

const catagoryPromice = fetch('/categories.json').then(res => res.json());

const Catagories = () => {

    const catagories = use(catagoryPromice);

    return (
        <div>
            <h2 className='text-lg font-semibold text-accent'>All Caterogy</h2>
            <div className='space-y-2 my-4 flex flex-col catagory'>
                {
                    catagories.map(cat => <NavLink to = {`/catagory/${cat.id}`} key={cat.id} className='text-center font-medium text-accent cursor-pointer hover:bg-base-200 p-2'>{cat.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Catagories;