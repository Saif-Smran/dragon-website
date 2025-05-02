import React, { use } from 'react';

const catagoryPromice = fetch('/categories.json').then(res => res.json());

const Catagories = () => {

    const Catagories = use(catagoryPromice);

    return (
        <div>
            <h2 className='text-lg font-semibold text-accent'>All Caterogy</h2>
        </div>
    );
};

export default Catagories;