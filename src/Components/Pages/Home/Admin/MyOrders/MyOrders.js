import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {


    const [myOrders, setMyOrders] = useState([]);
    // const [services, setServices] = useState([]);
    // const [found, setFound] = useState([]);
    // const [loading, setLoading] = useState(true);
    const { user } = useAuth();


    useEffect(() => {
        // const url = `http://localhost:5000/myOrders/${user?.email}`;
        const url = `https://quiet-hamlet-58430.herokuapp.com/myOrders/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])

    console.log(myOrders)








    const handleCancelOrder = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {
            // const url = `http://localhost:5000/deleteOrder/${id}`;
            const url = `https://quiet-hamlet-58430.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('successfully canceled...')
                        const reamainingServices = myOrders.filter(service => service._id !== id)
                        setMyOrders(reamainingServices);
                    }
                })
        }

    }



    return (
        <div className="container">
            <h2 className="mt-4">Order - {myOrders?.length}</h2>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Order date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {myOrders?.map((order, index) => (

                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{order?.email}</td>
                            <td>{order?.name}</td>
                            <td>{order?.date}</td>
                            <td>{order?.status}</td>

                            <button
                                onClick={() => handleCancelOrder(order._id)}
                                className="btn bg-danger m-1 p-2"
                            >
                                Delete
                            </button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrders;