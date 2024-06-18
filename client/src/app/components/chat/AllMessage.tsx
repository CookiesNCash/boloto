import LeftMessage from "./LeftMessage";
import RightMessage from "./Rightmessage";
import { selectAllMessage } from "@/redux/slices/messageSlise";
import { useSelector } from "react-redux";

export default function AllMessage () {

    const allMessage = useSelector(selectAllMessage);

    return (
        <div className="allMessage">
            {
                //  allMessage.map((el, indx) => <RightMessage key={indx}>{el}</RightMessage>)
            }
           
            <LeftMessage></LeftMessage>
        </div>
    )
}