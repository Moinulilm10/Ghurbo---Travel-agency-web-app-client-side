import React from 'react';
import { Table } from 'react-bootstrap';
import './ManageOrder.css'

const ManageOrder = (props) => {
    const { _id, name, email, date, phone, status } = props.order;
    const { handleApproveOrder, handleCancelOrder } = props;
    return (
        <div className='d-flex justify-content-between border-1 mt-2 p-3'>
            <Table>
                <tr className="mt-1">
                    <td>{email}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{date}</td>
                    <td className={status === 'pending' ? 'text-danger' : 'text-success'}>{status}</td>
                    <td><span><button className="btn-primary rounded-2" onClick={() => handleApproveOrder(_id)}>Approve</button></span></td>
                    <td><span><button className="btn-danger rounded-2" onClick={() => handleCancelOrder(_id)}>Delete</button></span></td>
                </tr>
            </Table>
        </div>

    );
};

export default ManageOrder;