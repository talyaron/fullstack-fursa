import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { io } from "socket.io-client";
import socketIOClient from 'socket.io-client';
const ENDPOINT = "http://localhost:3001/api/socket";
const socket = socketIOClient("http://localhost:3001");

function SocketIO() {
    const [state, setState] = useState({ message: "", name: "" })
    const [chat, setChat] = useState<Array<any>>([])

    useEffect(() => {

        socket.on("message", ({ name, message }) => {
            setChat([...chat, { name, message }])
        })
        // return () => socket.disconnect()
    }, [chat])


    const onTextChange = (e:any) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onMessageSubmit = (e:any) => {
        const { name, message } = state
        socket.emit("message", { name, message })
        e.preventDefault()
        setState({ message: "", name })
    }

    const renderChat = () => {
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <h3>
                    {name}: <span>{message}</span>
                </h3>
            </div>
        ))
    }

    async function handleChat(e: any) {
        e.preventDefault();
        if (e.target.children.text.value) {
            socket.emit('chatMessage', e.target.children.text.value);
            e.target.children.text.value = '';
        }
    }

    return (
        <div>
            <form onSubmit={handleChat}>
                <input type="text" name="text" placeholder='Message' />
                <input type="submit" value="send" />
            </form>

            <Link to='/'>hi</Link>
        </div>
    )
}

export default SocketIO