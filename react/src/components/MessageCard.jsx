import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const MessageCard = ({ message }) => {
    const { user } = useStateContext();
    const imgUrlPrefix = "http://laravel-react-full-stack.test/storage/";
    return (
        <div className="card max-w-xl mx-auto">
            <span className="bg-gray-200 px-2 rounded">
                {message.created_at}
            </span>
            <div className="mt-4 text-xl">{message.body}</div>
            <div className="mt-3">
                <img src={imgUrlPrefix + message.image} alt="" />
            </div>
            <span className="text-end block">
                Sent by: {message.user_id === user.id ? "me" : "admin"}
            </span>
        </div>
    );
};

export default MessageCard;
