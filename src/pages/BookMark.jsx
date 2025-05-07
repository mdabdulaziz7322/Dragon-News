import React, { useEffect, useState } from 'react';
import { getFromDB } from '../utility/db';
import { useLoaderData } from 'react-router';

const BookMark = () => {
    const [bookmarked, setBookmarked] = useState([]);
    const data = useLoaderData();
    console.log(bookmarked);

    useEffect(() => {
        const getBookMarked = getFromDB()
        const bookMarkedNews = data.filter(news => getBookMarked.includes(news.id))
        setBookmarked(bookMarkedNews);
        
    }, [])

    return (
        <div>
            <h2 className='font-bold text-center'>My Book</h2>
            {
                bookmarked.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 w-11/12 mx-auto my-10'>
                        {
                            bookmarked.map(news => (
                                <div className="card  border border-base-200 rounded-xl overflow-hidden ">
                                      {/* Author Header */}
                                      <div className="flex items-center justify-between px-4 pt-4">
                                        {/* Author Info */}
                                        <div className="flex items-center gap-3">
                                          <div className="avatar">
                                            <div className="w-10 h-10 rounded-full">
                                              <img src={news.author.img} alt={news.author.name} />
                                            </div>
                                          </div>
                                          <div>
                                            <h2 className="font-semibold">{news.author.name}</h2>
                                            
                                          </div>
                                        </div>
                                
                                        
                                      </div>
                                
                                      {/* Title */}
                                      <div className="px-4 pt-4">
                                        <h2 className="font-bold text-lg leading-snug">
                                          {news.title}
                                        </h2>
                                      </div>
                                
                                      {/* Image */}
                                      <figure className="px-4 pt-3 ">
                                        <img src={news.image_url} alt="news" className="rounded-xl w-full object-cover max-h-90 " />
                                      </figure>
                                
                                      {/* Details */}
                                      <div className="px-4 pt-3 text-sm text-gray-700">
                                        {news.details}
                                      </div>
                                      <hr className="mt-5 mx-5 border border-base-300" />
                                
                                      {/* Footer */}
                                      
                                    </div>
                            ))
                        }
                    </div>
                ) : (
                    <h2 className='text-center text-3xl font-bold'>No Bookmarked News</h2>
                )
            }
        </div>
    );
};

export default BookMark;