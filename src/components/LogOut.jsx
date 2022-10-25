import React from 'react'
import { auth } from '../firebase'

const style = {
    button: `bg-red-500 px-4 py-2 hover:bg-gray-200`
}


const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }

    return (
        <button onClick={() => auth.signOut()} className={style.button}>
            Logout
        </button>
    )
}

export default LogOut