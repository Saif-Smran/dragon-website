import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const [news, setNews] = useState([])

    const { id } = useParams();
    const data = useLoaderData()

    useEffect(() => {

        const filteredData = data.find(item => item.id == id)
        setNews(filteredData)
    }, [data, id])

    // console.log(news,id)


    return (
        <div className='w-11/12 mx-auto my-10'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-4'>
                <div className='col-span-9'>
                    <h1 className='text-2xl font-bold'>Dragon News</h1>
                    <div className="p-8 rounded-2xl bg-base-100 shadow-lg mt-5 space-y-5 border border-gray-200">
                        <img src={news?.thumbnail_url || news?.image_url} alt={news?.title} />
                        <h2 className='text-3xl font-bold'>{news?.title}</h2>
                        <p className='text-lg'>{news?.details}</p>
                        <Link to={`/catagory/${news?.category_id}`} className='btn btn-secondary my-5'> <FaArrowLeft></FaArrowLeft> All news in this category</Link>
                    </div>
                </div>
                <div className='col-span-3'>
                    <RightAside></RightAside>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;