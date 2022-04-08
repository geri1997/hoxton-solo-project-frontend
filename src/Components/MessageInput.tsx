import React, { useState } from 'react';
// import './MessageInput.css';

const NewMessage = ({ socket }: { socket: any }) => {
    const [value, setValue] = useState('');
    const submitForm = (e: any) => {
        e.preventDefault();
        socket.emit('message', value);
        setValue('');
    };

    return (
        <form onSubmit={submitForm}>
            <input
                autoFocus
                value={value}
                placeholder='Type your message'
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
            />
        </form>
    );
};

export default NewMessage;
