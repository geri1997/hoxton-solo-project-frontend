import socketio from "socket.io-client";

import React from 'react';

// @ts-ignore
export const socket = socketio.connect(`http://localhost:3009`);
//@ts-ignore
export const SocketContext = React.createContext();