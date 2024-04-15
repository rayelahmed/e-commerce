import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddInventories.css";
import { useForm } from "react-hook-form";
import "./AddInventories.css";
const AddInventories = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/inventory");
    console.log(data);
    const url = `http://localhost:5000/product`;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="add-inventories  ">
        <div className=" w-50 mx-auto ">
          <h2> Add Inventory</h2>
          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="">Name</label>
            <input
              className="mb-2 w-100"
              placeholder="Product Name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <label htmlFor="">Supplier Name</label>
            <input
              className="mb-2 w-100"
              placeholder="Supplier Name"
              {...register("supplier")}
            />
            <label htmlFor="">Price</label>
            <input
              className="mb-2 w-100"
              placeholder="Price"
              type="number"
              {...register("price")}
            />
            <label htmlFor="">Quantity</label>
            <input
              className="mb-2 w-100"
              placeholder="Quantity"
              type="number"
              {...register("quantity")}
            />
            <label htmlFor="">Sold</label>
            <input
              className="mb-2 w-100"
              placeholder="Sold"
              type="number"
              {...register("sold")}
            />
            <label htmlFor="">Description</label>
            <input
              className="mb-2  w-100"
              placeholder="Description"
              type="name"
              {...register("description")}
            />
            <label htmlFor="">Photo URL</label>
            <input
              className="mb-2 w-100"
              placeholder="Photo URL"
              type="name"
              {...register("img")}
            />
            <input
              className="mb-2 w-100 butn"
              type="submit"
              value="Add Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInventories;
