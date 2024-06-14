import { FaRegHeart } from "react-icons/fa";

export default function Like() {
    return (
        <div className='reactions like'>
        <FaRegHeart onClick={() => setLike(!haveLike)}/>
        <span>100</span>
        </div>
    );
}