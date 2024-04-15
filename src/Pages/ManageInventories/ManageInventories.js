import React from "react";
import UseProducts from "../../Hooks/UseProducts";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [products, setProducts] = UseProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure To Delete ?");

    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      const remaining = products.filter((product) => product._id !== id);
      setProducts(remaining);
    }
  };

  return (
    <div>
      <div className="manage-inventories">
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Supplier</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.supplier}</td>
                  <td>
                    <button id="btn" onClick={() => handleDelete(product._id)}>
                      Delete Item
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
