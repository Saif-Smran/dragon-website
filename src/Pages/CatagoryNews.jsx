import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/HomeLayout/NewsCard';

const CatagoryNews = () => {

    const [news, setNews] = useState([])

    const { id } = useParams();
    const data = useLoaderData()

   

    useEffect(() =>{

        if(id === '0'){
            setNews(data)
            return;
        }else if(id === '1'){
            const filteredData = data.filter(item => item.others.is_today_pick === true)
            setNews(filteredData)
            return;
        }
            

        const filteredData = data.filter(item => item.category_id == id)
        setNews(filteredData)
    },[data, id])

    
    

    return (
        <div>
            Total News: {news.length}
            <div className="my-4 space-y-4">
                {
                    news.map((news) => <NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CatagoryNews;