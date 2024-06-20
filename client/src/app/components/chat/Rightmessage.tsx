import React from 'react';

export default function RightMessage(props) {

  return <div className="bubble right">
    {props.children}
    <div className="post-author">
        <a className="id-author nameMessage" href="#">
          {props.name}
        </a>
      </div>
    </div>;
}
// children}:{children: React.ReactNode;}
