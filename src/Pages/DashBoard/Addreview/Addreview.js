import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const Addreview = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    
    axios
      .post("https://desolate-garden-12224.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Review added successfully");
          reset();
        }
      });
  };
  return (
    <div className="min-vh-100 container py-3">
      <div className="add-new-car py-4">
        <h1 className="mt-3 mb-5">Add a Review</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 200 })}
            placeholder="Name"
          />
          <textarea {...register("desc")} placeholder="Review" />
          <input type="number" {...register("star")} placeholder="Ratings(out of 5)" />
          <input {...register("image")} placeholder="Image url" />
          <input className="btn-submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Addreview;



// export default Addreview;


