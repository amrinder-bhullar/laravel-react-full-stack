import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import MessageCard from "../../components/MessageCard";
import MessageForm from "../../components/MessageForm";
import { useStateContext } from "../../contexts/ContextProvider";

const ViewTicket = () => {
    const [ticket, setTicket] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const messageBody = useRef();
    const [errors, setErrors] = useState(null);
    const { user } = useStateContext();

    useEffect(() => {
        getTicket();
    }, [params.id]);

    const getTicket = () => {
        setLoading(true);

        axiosClient
            .get(`/tickets/${params.id}`)
            .then(({ data }) => {
                setTicket(data.data);
                setMessages(data.data.messages);
                setLoading(false);
                console.log(data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const { body, created_at, id, title, user: tenant } = ticket;

    const postMessage = (e) => {
        e.preventDefault();
        const payload = {
            body: messageBody.current.value,
            ticket_id: ticket.id,
            user_id: user.id,
        };
        axiosClient
            .post(`/tickets/${ticket.id}/message`, payload)
            .then(({ data }) => {
                console.log(data);
                getTicket();
                messageBody.current.value = "";
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                    setErrors(response.data.errors);
                }
            });
        // console.log(payload);
    };

    return (
        <div className="mb-12">
            {!loading && (
                <div>
                    <h1 className="text-3xl">{title}</h1>
                    <div className="card animated fadeInDown">
                        <h3 className="text-2xl mb-6 text-gray-800">
                            Main Issue: {body}
                        </h3>
                        <p>Tenant: user name</p>
                    </div>
                </div>
            )}
            {messages &&
                messages.map((message) => (
                    <MessageCard key={message.id} message={message} />
                ))}
            <div className="fixed bottom-0 w-8/12 mx-auto bg-gray-100">
                {errors && (
                    <div className="alert">
                        {Object.keys(errors).map((key) => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
                )}
                <form
                    onSubmit={postMessage}
                    className="flex place-content-center py-2"
                >
                    <input
                        type="text"
                        className="mx-auto w-full p-4 rounded border border-gray-400"
                        ref={messageBody}
                        required
                    />
                    <button className="bg-green-400 text-white p-4 rounded mx-4">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ViewTicket;
