import React from 'react';
import Topic from './Topic';

export default function () {
  return (
    <div className="recommendations">
      <div className="headline-rec">
        <span>Популярные хештеги</span>
      </div>
      <div className="allTopics">
        <Topic text={'hexlet'}/>
        <Topic text={'bts'}/>
        <Topic text={'Авалон'}/>
        <Topic text={'БолотоХайп!'}/>
        <Topic text={'football'}/>
        <Topic text={'УраганвМоскве'}/>
        <Topic text={'спб'}/>
        <Topic text={'тактикиАвалона'}/>
        <Topic text={'почемуПуджИмба'}/>
        <Topic text={'Bitcoin'}/>
      </div>
    </div>
  );
}
