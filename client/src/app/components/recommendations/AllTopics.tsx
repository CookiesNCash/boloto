import React from 'react';
import Topic from './Topic';

export default function () {
  return (
    <div className="recommendations">
      <div className="headline-rec">
        <span>Популярные хештеги</span>
      </div>
      <div className="allTopics">
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </div>
    </div>
  );
}
