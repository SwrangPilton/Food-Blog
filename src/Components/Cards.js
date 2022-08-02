import React, { useState, useEffect } from "react";
import { db } from '../Firebase/config'

export default function Cards() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        db.collection('ADMINS')
            .doc(`${process.env.REACT_APP_ADMIN_UID}`)
            .collection('posts').onSnapshot(observer => {
                const items = []
                observer.forEach(doc => {
                    items.push(doc.data())
                })
                setBlogs(items)
            })
    }, [])
    return (
        <div>
            {blogs && blogs.map((blog, index) => {
                return (
                    <a href={blog.Slug} key={index} className="p-3 shadow-lg hover:shadow-2xl duraion-300">
                        <img src={blog.Image} alt="" />
                        <h1 className="text-2xl lg:text-3xl text-left capitalize font-semibold mt-4 mb-3">{blog.Title}</h1>
                        <div className="flex items-center text-lg lg:text-xl">
                            <img src={blog.AuthorPic} className="rounded-full mr-2 h-12 w-12" alt="" />
                            <h1 className="text-lg">By {blog.Author}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-start flex-wrap my-3">
                            <h1 className="p-1 bg-green-500  text-gray-50"> {blog.Category}</h1>
                            <h1 className="p-1 bg-indigo-500 text-gray-50"> {blog.Type}</h1>
                            <h1 className="p-1 bg-red-500 text-gray-50"> {blog.Time}</h1>
                            <h1 className="p-1 bg-blue-500 text-gray-50"> {blog.Difficulty}</h1>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}
