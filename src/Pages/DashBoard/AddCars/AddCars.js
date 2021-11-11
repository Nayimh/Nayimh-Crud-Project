import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddCars.css";

const AddCars = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    
    axios
      .post("https://desolate-garden-12224.herokuapp.com/exploreCars", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully added a car");
          reset();
        }
      });
  };
  return (
    <div className="min-vh-100 container py-3">
      <div className="add-new-car py-4">
        <h1 className="mt-3 mb-5">Add a new Car</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 500 })}
            placeholder="Name..."
          />
          <textarea {...register("desc")} placeholder="Description..." />
          <input type="number" {...register("Price")} placeholder="Price..." />
          <input {...register("image")} placeholder="Image url..." />
          <input className="btn-submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddCars;





