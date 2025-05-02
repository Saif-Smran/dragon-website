import React, { Suspense } from 'react';
import Catagories from '../Catagories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
            <Catagories></Catagories>
            </Suspense>
        </div>
    );
};

export default LeftAside;