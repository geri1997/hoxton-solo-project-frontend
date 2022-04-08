import React, { useEffect, useState } from 'react';
// import './Messages.css';

function Messages({ socket }: { socket: any }) {
    const [messages, setMessages] = useState({});

    useEffect(() => {
        const messageListener = (message: any) => {
            setMessages((prevMessages) => {
                const newMessages = { ...prevMessages };
                //@ts-ignore
                newMessages[message.id] = message;
                return newMessages;
            });
        };

        const deleteMessageListener = (messageID: any) => {
            setMessages((prevMessages) => {
                const newMessages = { ...prevMessages };
                //@ts-ignore
                delete newMessages[messageID];
                return newMessages;
            });
        };

        socket.on('message', (message:any)=>{
            console.log(message)
            messageListener(message)});
        socket.on('deleteMessage', deleteMessageListener);
        socket.emit('getMessages');

        return () => {
            socket.off('message',(message:any)=>{
                console.log(message)
                messageListener(message)});
            socket.off('deleteMessage', deleteMessageListener);
        };
    }, [socket]);

    return (
        <div className='message-list'>
            {[...Object.values(messages)]
                //@ts-ignore
                .sort((a, b) => a.time - b.time)
                .map((message) => (
                    <div
                        //@ts-ignore
                        key={message.id}
                        className='message-container'
                        
                        title={`Sent at ${new Date(
                            //@ts-ignore
                            message.time
                        ).toLocaleTimeString()}`}
                    >
                        <span className='user'>
                            {
                                //@ts-ignore
                                message.user.name
                            }
                            :
                        </span>

                        <span className='message'>
                            {
                                //@ts-ignore
                                message.value
                            }
                        </span>
                        <span className='date'>
                            {
                                //@ts-ignore
                                new Date(message.time).toLocaleTimeString()
                            }
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default Messages;
