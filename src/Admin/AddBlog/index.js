import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from "react-router-dom"
import { db, storage } from '../../Firebase/config'
import { GetUser } from '../../Firebase/UserContext'
import MyModal from '../../Components/Modal2'
import ReactMarkdown from 'react-markdown'

//* REACT TOASTIFY 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
    const { user } = GetUser()
    const history = useHistory()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const { slug } = useParams()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        db.collection('ADMINS')
            .doc(user.uid)
            .collection('posts')
            .doc(slug)
            .get()
            .then(_ => setData(_.data()))
        setLoading(false)
    }, [slug, user.uid])

    const handleDelete = () => {
        storage
            .ref(`Admins/${user.uid}/${data.FileName}`)
            .delete()
            .then(() => {
                db.collection('ADMINS')
                    .doc(user.uid)
                    .collection('posts')
                    .doc(slug)
                    .delete()
                toast("Wow so easy!");
                history.push('/admin')
                console.log('deleted')
            })
    }

    return (
        <div className="w-full lg:w-3/4 mx-auto p-8">
            {loading && <h1 className='my-6'>LOADING...</h1>}
            <ToastContainer />
            {data && (
                <div className="flex flex-col lg:flex-row">
                    <div className="mt-2 mb-4 lg:mb-0">
                        <a href="/admin" className="bg-gray-300 p-2 hover:bg-gray-200 hover:text-red-700">Go back</a>
                    </div>
                    <div className="w-full lg:w-3/4 mx-auto">
                        <img src={data.Image} alt="" />
                        <h1 className="text-4xl lg:text-6xl text-left capitalize font-semibold mt-6 mb-4">{data.Title}</h1>
                        <div className="flex items-center text-lg lg:text-xl">
                            <h1 className="">Author : {data.Author}</h1>
                            <img src={data.AuthorPic} className="rounded-full ml-2 h-12 w-12" alt="" />
                        </div>

                        <div className="flex flex-row items-center justify-start flex-wrap my-3">
                            <h1 className="p-2 bg-green-500  text-gray-50"> {data.Category}</h1>
                            <h1 className="p-2 bg-indigo-500 text-gray-50"> {data.Type}</h1>
                            <h1 className="p-2 bg-red-500 text-gray-50"> {data.Time}</h1>
                            <h1 className="p-2 bg-blue-500 text-gray-50"> {data.Difficulty}</h1>
                        </div>

                        <h1 className="my-3">
                            <span className="text-3xl inline-block text-left capitalize text-gray-400">Description : </span>
                        </h1>

                        <ReactMarkdown className='prose prose-sm lg:prose-2xl'>{data.Description}</ReactMarkdown>

                        <h1 className="my-3">
                            <span className=" text-3xl inline-block text-left capitalize text-gray-400">Ingredients : </span></h1>
                        <ReactMarkdown className='prose prose-sm lg:prose-2xl'>{data.Ingredients}</ReactMarkdown>

                        <h1 className="my-3">
                            <span className=" text-3xl inline-block text-left capitalize text-gray-400">Guide : </span></h1>
                        <ReactMarkdown className='prose prose-sm lg:prose-2xl'>{data.Guide}</ReactMarkdown>
                    </div>
                    <div className="mt-2 ">
                        <Link to={`/admin/editblog/${data.Slug}`} className="bg-blue-600 p-2 hover:bg-blue-500 mr-3 lg:mr-0 text-gray-200 rounded-lg">Edit</Link>
                        <button onClick={() => setShowModal(true)}
                            className="lg:block mt-5  bg-red-600 hover:bg-red-500 p-2 text-gray-200 rounded-lg">Delete</button>
                        {showModal && <MyModal show={showModal} Delete={handleDelete} />}
                    </div>
                </div>
            )}
        </div>
    )
}
