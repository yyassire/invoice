import { Delete } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TableForm.scss";

export default function TableForm({
  description,
  itemName,
  setItemName,
  setDescription,
  quantity,
  setQuantity,
  discount,
  setDiscount,
  price,
  setPrice,
  tax,
  setTax,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price) {
      return alert("Please fill in all inputs");
    }
    const newItems = {
      id: uuidv4(),
      itemName,
      description,
      quantity,
      price,
      discount,
      tax,
      amount,
    };
    setTotal((total += amount));
    setList([newItems, ...list]);
    setDescription("");
    setItemName("");
    setQuantity("");
    setPrice("");
    setAmount("");
  };

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = () => {
      setAmount(
        Number(quantity) * Number(price) - Number(discount) + Number(tax)
      );
    };

    calculateAmount();
  }, [amount, price, quantity, setAmount, discount, tax]);

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));
  return (
    <div className="tableComponent">
      <form className="tableForm" onSubmit={handleSubmit}>
        <div className="inputs">
          <section className="descriptions">
            <div className="input">
              <label htmlFor="description">Item name *</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Item name"
                required
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="description">Item description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Item description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </section>

          <div className="amountForm">
            <div className="flex flex-col">
              <label htmlFor="quantity">Quantity *</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="Quantity"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="price">Price *</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price">Discount</label>
              <input
                type="number"
                name="discount"
                id="discount"
                placeholder="Discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price">Tax</label>
              <input
                type="number"
                name="tax"
                id="tax"
                placeholder="Tax"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
              />
            </div>

            <div className="totalPrice">
              <label htmlFor="amount">Amount:</label>
              <p>{amount}</p>
            </div>
          </div>
        </div>
        <button type="submit" className="submitBtn">
          Add Table Item
        </button>
      </form>

      {/* Table items */}

      <table width="100%" className="">
        <thead>
          <tr className="tableHeader">
            <td>Item</td>
            <td>Description</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Discount</td>
            <td>Tax</td>
            <td>Amount</td>
          </tr>
        </thead>
        {list.map(
          ({
            id,
            description,
            quantity,
            price,
            amount,
            itemName,
            discount,
            tax,
          }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr className="h-10">
                  <td>{itemName}</td>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>{discount}</td>
                  <td>{tax}</td>
                  <td>{amount}</td>
                  <td>
                    <button onClick={() => deleteRow(id)}>
                      <Delete className="DeleteIcon" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>
    </div>
  );
}
