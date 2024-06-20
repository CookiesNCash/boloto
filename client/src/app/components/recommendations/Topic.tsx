import React from 'react';

export default function ({text}:{text:string}) {
  return (
    <div className="trend hover-btn-grey">
      <span>#{text}</span>
      <span className="count-post">1 пост</span>
    </div>
  );
}
