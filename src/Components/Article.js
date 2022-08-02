import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import { db } from '../Firebase/config'
import { useParams } from "react-router-dom"
import Helmet from '../Components/Helemt'

export default function Article() {
    const [blog, setBlog] = useState([])
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const { slug } = useParams()

    useEffect(() => {
        db.collection('ADMINS')
            .doc(`${process.env.REACT_APP_ADMIN_UID}`)
            .collection('posts')
            .limit(5)
            .get()
            .then(_ => setBlogs(_.docs.map(v => v.data())))

        db.collection('ADMINS')
            .doc(`${process.env.REACT_APP_ADMIN_UID}`)
            .collection('posts')
            .doc(slug)
            .get()
            .then(_ => setBlog(_.data()))
        setLoading(false)
    }, [slug])

    return (
        <div>
            <Helmet title={`${slug}`} />
            {loading && <h1 className="my-6">Loading...</h1>}
            {blog && (
                <div className="flex flex-col lg:flex-row p-4 lg:p-8">
                    <div className="w-full lg:w-3/4 mx-auto">
                        <img src={blog.Image} alt="" />
                        <h1 className="text-4xl lg:text-6xl text-left capitalize font-semibold mt-6 mb-4">{blog.Title}</h1>
                        <div className="flex items-center text-lg lg:text-xl">
                            <img src={blog.AuthorPic} className="rounded-full mr-2 h-12 w-12" alt="" />
                            <div className="flex-col">
                                <h1 className="text-lg">By {blog.Author}</h1>
                                <h1 className="text-lg">{blog.CreatedAt?.toDate().toDateString()}</h1>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-start flex-wrap my-3">
                            <h1 className="p-2 bg-green-500  text-gray-50"> {blog.Category}</h1>
                            <h1 className="p-2 bg-indigo-500 text-gray-50"> {blog.Type}</h1>
                            <h1 className="p-2 bg-red-500 text-gray-50"> {blog.Time}</h1>
                            <h1 className="p-2 bg-blue-500 text-gray-50"> {blog.Difficulty}</h1>
                        </div>

                        <h1 className="my-3">
                            <span className="text-lg md:text-3xl inline-block text-left capitalize text-gray-500">Description : </span>
                        </h1>
                        <ReactMarkdown className='prose prose-xl lg:prose-2xl'>{blog.Description}</ReactMarkdown>

                        <h1 className="my-3 md:hidden">
                            <span className=" text-lg md:text-3xl inline-block text-left capitalize text-gray-500">Ingredients : </span></h1>
                        <ReactMarkdown className='prose prose-xl lg:prose-2xl md:hidden'>{blog.Ingredients}</ReactMarkdown>

                        <h1 className="my-3">
                            <span className=" text-lg md:text-3xl inline-block text-left capitalize text-gray-500">Guide : </span></h1>
                        <ReactMarkdown className='prose prose-xl lg:prose-2xl'>{blog.Guide}</ReactMarkdown>

                        <div className="lg:hidden">
                            <h1 className="text-4xl text-red-500 mt-5">MORE POSTS</h1>
                            {blogs && blogs.filter(v => v.Title !== `${blog.Title}`).map((v, index) => {
                                return (
                                    <div key={index}>
                                        <ol className="list-disc pl-5 mt-3">
                                            <li className="text-xl hover:text-red-500 duration-300 capitalize">
                                                <a href={`/${v.Slug}`}>{v.Title}</a></li>
                                        </ol>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className="hidden md:w-1/4 md:block relative">
                        <div className="flex flex-col fixed items-center justify-center">
                            <div className="p-5 pt-0">
                                <h1 className="text-4xl text-red-500">INGRIDIENTS</h1>
                                <ReactMarkdown className='prose prose-xl'>{blog.Ingredients}</ReactMarkdown>
                                <div className="border-b-2"></div>
                                <div className="border-b-2"></div>
                                <h1 className="text-4xl text-red-500 mt-5">MORE POSTS</h1>
                                {blogs && blogs.filter(v => v.Title !== `${blog.Title}`).map((v, index) => {
                                    return (
                                        <div key={index}>
                                            <ol className="list-disc pl-5 mt-3">
                                                <li className="text-xl hover:text-red-500 duration-300 capitalize">
                                                    <a href={`/${v.Slug}`}>{v.Title}</a></li>
                                            </ol>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
