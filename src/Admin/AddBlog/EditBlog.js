/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { db, storage, timestamp } from '../../Firebase/config'
import kebabCase from 'lodash.kebabcase'
import { GetUser } from '../../Firebase/UserContext'
import { useParams, useHistory, Link } from "react-router-dom"

export default function EditBlog() {
    const { slug } = useParams()
    const history = useHistory()

    const { user } = GetUser()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const sub = db.collection('ADMINS')
            .doc(user.uid)
            .collection('posts')
            .doc(slug)
            .get()
            .then(_ => {
                setTitle(_.data().Title)
                setDescription(_.data().Description)
                setGuide(_.data().Guide)
                setFile(_.data().Image)
                setDifficulty(_.data().Difficulty)
                setType(_.data().Type)
                setCategory(_.data().Category)
                setTime(_.data().Time)
                setIngredients(_.data().Ingredients)
            })
            .finally(() => {
                setLoading(false)
            })
        return () => sub
    }, [slug, user.uid])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [guide, setGuide] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [time, setTime] = useState('')
    const [ingredients, setIngredients] = useState('')
    const slugID = encodeURI(kebabCase(title))
    //* Use Storage
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState('')
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        const file = e.target.files[0]
        const type = ['image/jpeg', 'image/jpg', 'image/png']

        if (file && type.includes(file.type)) {
            setFile(file)
            setFileName(file.name)
            setError('')
        } else {
            setFile(null)
            setError('Only jpeg, jpg, png format are allowed')
        }
    }

    const handlePublish = () => {
        setLoading(true)
        const storageRef = storage.ref('Admins/' + user.uid + '/' + file.name)
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, err => {
            setError(err)
            setLoading(false)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            await db.collection('ADMINS')
                .doc(user.uid)
                .collection('posts')
                .doc(slug)
                .set({
                    Title: title,
                    Description: description,
                    Guide: guide,
                    Image: url,
                    Slug: slugID,
                    Difficulty: difficulty,
                    Type: type,
                    Category: category,
                    Time: time,
                    Ingredients: ingredients,
                    CreatedAt: timestamp,
                    Author: user.displayName,
                    AuthorPic: user.photoURL,
                    UpdatedAt: timestamp,
                    FileName: fileName,
                })
            setLoading(false)
            setTitle('')
            setDifficulty('')
            setType('')
            setCategory('')
            setTime('')
            setIngredients('')
            setDescription('')
            setGuide('')
            setFileName('')
            setFile(null)
            setProgress(0)
        })
        history.push('/admin')
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-3">
            {loading && <div className="absolute flex justify-center items-center">
                <h1 className="text-3xl my-6">Loading...</h1>
            </div>}
            {!loading && (
                <>
                    <div className="mb-4">
                        <Link to="/admin" className="bg-gray-300 p-2 hover:bg-gray-200 hover:text-red-700">Go back</Link>
                    </div>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-3xl my-6">Edit Your Food Recipe 🙌</h1>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Title">
                                Blog's Title
                            </label>
                            <input
                                value={title} onChange={e => setTitle(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-700" type="text" placeholder="Title" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Title">
                                Difficulty of cooking your dish
                            </label>
                            <select
                                value={difficulty} onChange={e => setDifficulty(e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-700">
                                <option>Select Difficulty Level</option>
                                <option value={'Very Easy'}>Very Easy</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Chef</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Title">
                                Time to cooking your dish
                            </label>
                            <select
                                value={time} onChange={e => setTime(e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-700">
                                <option>Select Time Needed to cook</option>
                                <option>10-30 mins</option>
                                <option>30-60 mins</option>
                                <option>60+ mins</option>
                                <option>120+ mins</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Title">
                                Type of your dish
                            </label>
                            <select
                                value={type} onChange={e => setType(e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-700">
                                <option>Select Type of Dish</option>
                                <option>Starter Dish</option>
                                <option>Main Dish</option>
                                <option>Side Dish</option>
                                <option>Dessert Dish</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Title">
                                Category of your dish
                            </label>
                            <select
                                value={category} onChange={e => setCategory(e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-700">
                                <option>Select Category</option>
                                <option>Veg</option>
                                <option>Non-Veg</option>
                                <option>Vegan</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Description">
                                Description
                            </label>
                            <textarea
                                value={description} rows={3}
                                onChange={e => setDescription(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-700" type="text" placeholder="A short description about your food" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Guide">
                                Your food Ingridients
                            </label>
                            <textarea
                                value={ingredients} rows={4}
                                onChange={e => setIngredients(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline focus:border-blue-700" type="text" placeholder="Please provide your ingridents in list format like... 1.Tomato, 2.Eggs.. etc" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Guide">
                                How to cook guide
                            </label>
                            <textarea
                                value={guide} rows={6}
                                onChange={e => setGuide(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline focus:border-blue-700" type="text" placeholder="Mention the steps or preparation needed to cook your food" />
                        </div>

                        <div className=" mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Picture">
                                Main Picture of your Food
                            </label>
                            <p className="text-sm text-red-600">*Mandatory field</p>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline border-red-700" type="file" onChange={handleChange} />
                        </div>

                        {error && <h1 className="text-red-600 mt-3">{error}</h1>}
                        {loading && <h1 className="text-2xl text-red-600 my-6">LOADING....</h1>}
                        <button type="button"
                            onClick={handlePublish}
                            className="py-2 px-5 mb-3 bg-blue-600 rounded-2xl text-white hover:bg-blue-500">save</button>
                        <div style={{ height: '2px', width: progress + '%', background: 'red' }}></div>
                    </form>
                </>
            )}
        </div>
    )
}
