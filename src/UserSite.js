import React, {useEffect, useState} from 'react'

export const UserSite = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [describe, setDescribe] = useState('')
    const [save, setSave] = useState(false)

    useEffect(() => {
        const save = localStorage.getItem('save') === 'true'
        const name = save ? localStorage.getItem('name') : ''
        const age = save ? localStorage.getItem('age') : ''
        const describe = save ? localStorage.getItem('describe') : ''

        setDescribe(describe)
        setName(name)
        setAge(age)

    }, [])


    const handleClick = (e) => {
        e.preventDefault();
        setSave(true)
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
        localStorage.setItem('describe', describe)
        localStorage.setItem('save', save)
    }


    return (
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
        </div>
    )
}