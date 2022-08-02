import AdminData from '../Lib/adminData'
import { db, auth } from '../Firebase/config'
import { GetUser } from '../Firebase/UserContext';
import { useHistory } from 'react-router';
import React, { useEffect, useState } from 'react';

export default function AdminHome() {
    const { user } = GetUser()
    const history = useHistory()
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        db.collection('ADMINS')
            .doc(user.uid)
            .collection('posts')
            .onSnapshot(query => {
                const items = []
                query.forEach(doc => {
                    items.push(doc.data())
                })
                setBlogs(items)
            })
        setLoading(false)
    }, [user.uid])

    return (
        <div className="p-2 lg:p-8">
            <div className="flex justify-between">
                <AdminData />
                <button onClick={() => auth.signOut().then(() => {
                    history.push('/')
                })} className="bg-red-500 hover:bg-red-400 text-white p-3 rounded shadow-xl">Log out</button>
            </div>
            <h1 className="text-4xl text-center uppercase">My Account</h1>
            <div className="m-8">
                <h1 className="text-xl text-center">
                    <a href="/addblog" className="bg-blue-500 hover:bg-blue-400 text-white p-3 rounded shadow-xl">Create Blog</a>
                </h1>
            </div>
            {loading && <h1 className="text-2xl text-red-600">LOADING....</h1>}
            {blogs.length === 0 && <h1 className="text-2xl text-center capitalize mt-12 text-red-600">no blog found, create a new one</h1>}

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-2xl p-4 place-content-center">
                {blogs && blogs.map((blog, index) => {
                    console.log(blog)
                    return (
                        <a href={`/admin/${blog.Slug}`} key={index}>
                            <div className="w-full">
                                <img src={blog.Image} className="w-100 h-72" alt="" />
                            </div>
                            <h1 className="text-2xl text-red-700 mb-4 mt-2 capitalize">
                                {blog.Title}</h1>
                            <h1 className="text-sm">{blog.Ingredients.slice(0, 30).concat(' ...')}</h1>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
