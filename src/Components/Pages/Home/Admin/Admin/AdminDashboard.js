import React, { useState } from 'react';
import AddService from '../AddService/AddService';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';
import './AdminDashboard.css'

const AdminDashboard = () => {

    const [control, setControl] = useState("myorders");

    return (


        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h3>Admin Dashboard</h3>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("myorders")}
                                        className="admin-menu p-2"
                                    >
                                        My Orders
                                    </li>
                                    <li
                                        onClick={() => setControl("manageorders")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Orders
                                    </li>
                                    <li
                                        onClick={() => setControl("addservice")}
                                        className="admin-menu p-2"
                                    >
                                        Add Destination
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {control === "myorders" && <MyOrders></MyOrders>}
                            {control === "manageorders" && <ManageOrders></ManageOrders>}
                            {control === "addservice" && <AddService></AddService>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminDashboard;



