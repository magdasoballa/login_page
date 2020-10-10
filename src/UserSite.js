import React from 'react'

export const UserSite = () => {
    return (
        <div>
            <h1 className='title'>Your site</h1>
            <form className='form'>
                <label htmlFor='name'>Your name <input type='text' id='name'/></label>
                <label htmlFor='age'>Your age <input type='number' id='age'/></label>
                <label htmlFor='describe'>Describe yourself</label>
                <textarea id='describe'/>
            </form>
        </div>
    )
}