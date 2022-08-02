import {useEffect} from 'react'
import { test } from '../Lib/test'

export default function About() {
    useEffect(() => {
        test()
        console.log('testing')
    }, [])

    return (
    <div>About</div>
)
}
