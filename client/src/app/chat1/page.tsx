// "use client";

// import { useState } from 'react';
// import io from 'socket.io-client';

// export default () => {
//     const [message, setMessage] = useState('');
//     const socket = io('http://localhost:80');
//     const handleSubmit = () => {
//         socket.emit('message', {
//             data: message,
//         });
//     };
//     socket.on('message', ({ data }) => {
//         console.log(data)
//     })
//     return (
//         <>
//             <input onChange={(e) => {
//                 setMessage(e.target.value)
//             }}/>
//             <button onClick={handleSubmit}>send</button>
//         </>
//     );
// };
