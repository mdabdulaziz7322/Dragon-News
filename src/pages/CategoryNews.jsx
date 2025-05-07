
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const [news, setNews] = useState([]);
    const { id } = useParams();
    const data = useLoaderData();
    useEffect(() => {
        if (id == "0") {
            setNews(data);
            return;
        }
        else if (id == "1") {
            const filterNews = data.filter(news => news.others.is_today_pick == true);
            setNews(filterNews);
        }
        else {
            const filterNews = data.filter(news => news.category_id == id);
            setNews(filterNews);
        }
    }, [data, id]);
    return (
        <div>
            <h2 className='font-bold text-center'>Dragon News Home</h2>
            
            {
        (news.length === 0)?(
          <div className="flex flex-col items-center mt-7">
            <h2 className="text-2xl font-bold text-gray-700">No Data Found</h2>
            <p className="text-gray-500">News will be available soon.</p>
            </div>
            
        ) : (
            
            <div className='grid grid-cols-1 gap-5 mt-5'>

                {
                    news.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        )
    }
        </div>
    );
};

export default CategoryNews;