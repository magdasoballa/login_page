import React, {useEffect, useState} from 'react'
import firebase from "firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useHistory} from 'react-router-dom'


export const UserSite = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [describe, setDescribe] = useState('')
    const [isLoaded, setIsLoaded] = useState(true);

    const history=useHistory()


    useEffect(() => {
        const db = firebase.firestore()
        const email = localStorage.getItem("email")
        db.collection('users').doc(email).get()
            .then(data => {
                const userData = data.data();
                setName(userData.name)
                setAge(userData.age)
                setDescribe(userData.describe)
                setIsLoaded(false)

            })

    }, [])


    const handleClick = (e) => {
        e.preventDefault();
        const email = localStorage.getItem("email")
        return new Promise((resolve, reject) => {
            const db = firebase.firestore()
            db.collection('users').doc(email).set({
                name: name,
                age: age,
                describe: describe
            })
                .then(() => {
                    resolve();
                }).catch((err) => {
                reject(err.message);
            });
            setName('')
            setAge('')
            setDescribe('')
        });

    }

    const handleLogout = () => {
        localStorage.clear()
        history.push('/login')
    }


    return (
        isLoaded ? <CircularProgress className='loader'/> :
            <div>
                <h1 className='title'>Your site</h1>
                <form className='form'>
                    <label htmlFor='name'>Your name <input type='text' id='name' value={name}
                                                           onChange={e => setName(e.target.value)}/></label>
                    <label htmlFor='age'>Your age <input type='number' id='age' value={age}
                                                         onChange={e => setAge(e.target.value)}/></label>
                    <label htmlFor='describe'>Describe yourself</label>
                    <textarea id='describe' value={describe} onChange={e => setDescribe(e.target.value)}/>
                    <button onClick={handleClick}>Save</button>
                </form>
                <button className='logout' onClick={handleLogout}>Logout</button>
            </div>
    )
}