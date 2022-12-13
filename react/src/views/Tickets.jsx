import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

function Tickets() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTickets();
    }, []);

    const getTickets = () => {
        setLoading(true);

        axiosClient
            .get("/tickets")
            .then(({ data }) => {
                setLoading(false);
                setTickets(data.data);
                console.log(data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    // const onDelete = (ticket) => {
    //     if (!window.confirm("Are you Sure you want to delete the tickets?")) {
    //         return;
    //     }
    //     axiosClient.delete(`/ticket/${ticket.id}`).then((response) => {
    //         console.log(response);
    //         //TODO Show notification
    //         getTickets();
    //     });
    // };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h1>Tickets</h1>
                <Link to="/users/new" className="btn-add">
                    Add new
                </Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Issue</th>
                            <th>message</th>
                            <th>Create Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {loading && (
                        <tbody>
                            <tr>
                                <td colSpan="5" className="text-center">
                                    Loading...
                                </td>
                            </tr>
                        </tbody>
                    )}
                    {!loading && (
                        <tbody>
                            {tickets.map((ticket) => (
                                <tr key={ticket.id}>
                                    <td>{ticket.id}</td>
                                    <td>{ticket.title}</td>
                                    <td>{ticket.body}</td>
                                    <td>{ticket.created_at}</td>
                                    <td>
                                        <Link
                                            className="btn-edit"
                                            to={"/tickets/" + ticket.id}
                                        >
                                            View
                                        </Link>
                                        &nbsp;
                                        <button
                                            // onClick={(e) => onDelete(user)}
                                            className="btn-delete"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}

export default Tickets;
