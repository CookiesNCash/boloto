import React from 'react';

export default function LeftMessage(props: {children:React.ReactNode, name: string}) {
  return (
    <>
        <div className="bubble left">
          {props.children}
          <div className="post-author">
        <a className="id-author nameMessage" href="#">
          {props.name}
        </a>
      </div>
        </div>
    </>
);
}
