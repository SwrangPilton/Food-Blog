import React, { useState, useEffect } from 'react'
import { db } from '../Firebase/config'

export default function AdminData() {
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        db.collection('Users')
            .doc('ADMIN')
            .get()
            .then(_ => setName(_.data()))
        setLoading(false)
    }, [setLoading])

    return (
        <div>
            {loading && <h1 className='my-6'>Loading...</h1>}
            {name && <h1 className="text-2xl">User : {name.Name}</h1>}
        </div>
    )
}
