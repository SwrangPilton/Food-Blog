import React, { useState, useEffect } from "react";
import { db } from '../Firebase/config'
import Helmet from '../Components/Helemt'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        db.collection('ADMINS')
            .doc(`${process.env.REACT_APP_ADMIN_UID}`)
            .collection('posts').onSnapshot(observer => {
                const items = []
                observer.forEach(doc => {
                    items.push(doc.data())
                })
                setBlogs(items)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <Helmet title='Food Blog App' />
            {loading && <div className="flex max-h-full w-full items-center justify-center">
                <h1 className="text-4xl text-red animate-pulse text-center my-6">Loading...</h1>
            </div>}
            <div className="flex items-start justify-between">
                <div className="w-full p-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {blogs && blogs.map((blog, index) => {
                        return (<div key={index}>
                            <div className="p-3 shadow-xl hover:shadow-2xl h-full duraion-300">
                                <Link to={blog.Slug}>
                                    <img src={blog.Image} className="h-80" alt="dish pic" />
                                    <div className="place-self-center">
                                        <h1 className="text-2xl lg:text-3xl text-left capitalize font-semibold mt-4 mb-3">{blog.Title}</h1>
                                        <div className="flex items-center text-lg lg:text-xl">
                                            <img src={blog.AuthorPic} className="rounded-full mr-2 h-12 w-12" alt="" />
                                            <div className="flex-col">
                                                <h1 className="text-lg">By {blog.Author}</h1>
                                                <h1 className="text-lg block">{blog.CreatedAt?.toDate().toDateString()}</h1>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start flex-wrap my-3">
                                            <h1 className="p-1 bg-green-500  text-gray-50"> {blog.Category}</h1>
                                            <h1 className="p-1 bg-indigo-500 text-gray-50"> {blog.Type}</h1>
                                            <h1 className="p-1 bg-red-500 text-gray-50"> {blog.Time}</h1>
                                            <h1 className="p-1 bg-blue-500 text-gray-50"> {blog.Difficulty}</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>)
                    })}
                </div>
                {/* <div className="hidden md:w-1/4 md:block">
                    <h1>Display Categories</h1>
                </div> */}
            </div>
        </div>
    )
}
