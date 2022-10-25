import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const style = {
    form: `h-14 w-full max-w-[728px] text-xl flex absolute bottom-0`,
    input: `w-[80%] text-xl p-3 bg-gray-600 text-white outline-none border-none`,
    button: `w-[20%] text-xl p-3 bg-green-600 text-white`,
};

const SendMessage = ({ scroll }) => {
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid message')
            return
        }
        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <form onSubmit={sendMessage} action={style.form}>
            <input value={input}
                onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder='write message...' />
            <button className={style.button} type="submit">Send</button>
        </form>
    )
}

export default SendMessage