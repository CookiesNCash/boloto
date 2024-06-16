import HashTag from "./hashTag";

export default function AllHashtag ({tag}) {
    return (
    <div className="AllHashtag">
        {
         tag?.map((el) =><HashTag  tag={el}></HashTag>)
        }    
    </div>
    );
}