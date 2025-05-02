import React from 'react';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {

    const { title, thumbnail_url, image_url, details, author, rating, total_view } = news;

    const formatDate = (isoString) => {
        return new Date(isoString).toISOString().split("T")[0];
    };

    const displayText = (text) => text.slice(0, 200) + "...";

    return (
        <div className="w-full mx-auto rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-t-lg">
                <img
                    src={author?.img}
                    alt={author?.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm leading-tight truncate">
                        {author?.name}
                    </p>
                    <p className="text-gray-500 text-xs leading-tight">{formatDate(author?.published_date)}</p>
                </div>
                <button
                    aria-label="Bookmark"
                    className="text-gray-400 cursor-pointer hover:text-gray-600 focus:outline-none"
                >
                    <FaBookmark className="text-lg" />
                </button>
                <button
                    aria-label="Share"
                    className="text-gray-400 cursor-pointer hover:text-gray-600 focus:outline-none"
                >
                    <FaShareAlt className="text-lg" />
                </button>
            </div>
            <div className="p-4">
                <h2 className="font-extrabold text-gray-900 text-lg leading-snug mb-3">
                    {title}
                </h2>
                <img
                    src={thumbnail_url || image_url}
                    alt={title}
                    className="rounded-lg w-full object-cover mb-4"
                />
                <p className="text-gray-600 text-sm leading-relaxed ">
                    {displayText(details)}
                </p>
                <button
                    className="text-orange-600 font-semibold btn btn-ghost btn-secondary hover:text-white cursor-pointer mb-4"

                >
                    Read More
                </button>
                <hr className="border-gray-200 mb-3" />
                <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            rating?.number > i ? (
                                <FaStar key={i} className="text-yellow-500" />
                            ) : (
                                <FaStar key={i} className="text-gray-300" />
                            )
                        ))}
                        <span className="ml-2 font-semibold">{rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEye />
                        <span className="font-semibold">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;