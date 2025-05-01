import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-base-200 p-4 my-5 flex items-center gap-4'>
            <button className='btn btn-secondary text-xl font-medium'>Latest</button>
            <Marquee className='flex gap-5' speed={50} pauseOnHover={true} >
            <p className='text-lg font-semibold text-accent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, non.</p>
            <p className='text-lg font-semibold text-accent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, non.</p>
            <p className='text-lg font-semibold text-accent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, non.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;