import React from 'react';
import swimming from '../../assets/swimming.png'
import playground from '../../assets/playground.png'
import classroom from '../../assets/class.png'

const QZone = () => {
    return (
        <div className='p-4 bg-base-200 rounded-lg'>
            <h2 className="text-xl font-bold mb-5">Q-Zone</h2>
            <div className="flex flex-col gap-4 items-center justify-center">
                <img src={swimming} alt="" />
                <img src={classroom} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;