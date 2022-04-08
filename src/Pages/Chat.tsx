import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import '../assets/chat.css';
import MessageInput from '../Components/MessageInput';
import Messages from '../Components/Messages';

const URL = 'ws://localhost:7071/';

const Chat = () => {
    const [user, setUser] = useState('Tarzan');
    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState<any>([]);
    const [ws, setWs] = useState(new WebSocket(URL));

    const submitMessage = (usr:any, msg:any) => {
        const message = { user: usr, message: msg };
        ws.send(JSON.stringify(message));
        setMessages([message, ...messages]);
    };

    useEffect(() => {
        ws.onopen = () => {
            console.log('WebSocket Connected');
        };

        ws.onmessage = (e) => {
            const message = JSON.parse(e.data);
            setMessages([message, ...messages]);
        };

        return () => {
            ws.onclose = () => {
                console.log('WebSocket Disconnected');
                setWs(new WebSocket(URL));
            };
        };
    }, [ws.onmessage, ws.onopen, ws.onclose, messages]);

    return (
        <div>
            <label htmlFor='user'>
                Name :
                <input
                    type='text'
                    id='user'
                    placeholder='User'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
            </label>

            <ul>
                {messages.reverse().map((message:any, index:any) => (
                    <li key={index}>
                        <b>{message.user}</b>: <em>{message.message}</em>
                    </li>
                ))}
            </ul>

            <form
                action=''
                onSubmit={(e) => {
                    e.preventDefault();
                    submitMessage(user, message);
                    setMessage([]);
                }}
            >
                <input
                    type='text'
                    placeholder={'Type a message ...'}
                    value={message}
                    //@ts-ignore
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input type='submit' value={'Send'} />
            </form>
        </div>
    );
};

export default Chat;
