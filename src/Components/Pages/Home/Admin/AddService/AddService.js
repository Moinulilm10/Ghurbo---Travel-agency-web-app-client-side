import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../../Hooks/useFirebase';
import './AddService.css'

const AddService = () => {

    const { user } = useFirebase();
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);
        data.email = user?.email;
        axios.post('https://quiet-hamlet-58430.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset()
                }
            })

    }





    return (
        <div>
            <div className="add-service mt-4">
                <h2>Add Your destination</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Destination" />
                    <textarea {...register("description")} placeholder="Description" />
                    <br />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;