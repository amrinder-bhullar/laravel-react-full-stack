import React from "react";

const MessageCard = ({ message }) => {
    return (
        <div className="card max-w-xl">
            <span className="bg-gray-200 px-2 rounded">
                Message sent at: {message.created_at} By {message.user_id}
            </span>
            <div className="mt-4 text-xl">{message.body}</div>
        </div>
    );
};

export default MessageCard;
