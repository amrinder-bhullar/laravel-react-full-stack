import React from "react";

const MessageForm = () => {
    const postMessage = (e) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="fixed bottom-0 w-8/12 mx-auto">
            <form
                onClick={postMessage}
                className="flex place-content-center py-2"
            >
                <input type="text" className="mx-auto rounded" />
                <button className="bg-green-400 text-white px-4 rounded mx-4">
                    Send
                </button>
            </form>
        </div>
    );
};

export default MessageForm;
