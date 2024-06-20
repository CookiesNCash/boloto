import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';

export default function Comments() {
  return (
    <div className="reactions Comments">
      <div className="btn-reaction-animation blueAn">
        <FaRegCommentAlt />
      </div>
      <span>100</span>
    </div>
  );
}
