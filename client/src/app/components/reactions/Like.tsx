import React, { useState } from "react";
import cn from 'classnames';

export default function Like() {
    const [haveLike, setHaveLike] = useState(false);
    

    const classLikeIcon = cn('heart-icon', {
        liked: haveLike,
    })

    return (
        <div className='reactions'>
            <div className="like-button" onClick={() => setHaveLike(!haveLike)}>
                <div className="heart-bg">
                    <div className={classLikeIcon}></div>
                </div>
            </div>
            <span>100</span>
        </div>
    );
}
