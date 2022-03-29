import { Delete, Print } from "@mui/icons-material";
import React from "react";
import { useLocation } from "react-router-dom";
import "./invoiceDetail.scss";
import axios from "axios";

const InvoiceDetail = () => {
  const location = useLocation();
  const invoice = location.state;
  const handlePrint = () => {
    window.print();
  };
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://invoice-yy.herokuapp.com/api/invoice/${invoice._id}`
      );
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="InvoiceDetail">
      <div className="invoiceDetailsWrapper">
        <div className="invoiceHeader">
          <h1 className="header">invoice</h1>
          <div className="invoiceBtns no-print">
            <button onClick={handlePrint} className="invoiceBtn ">
              Print/Download
              <Print />
            </button>
            <button
              style={{ backgroundColor: "rgb(209, 127, 127)" }}
              className="invoiceBtn"
              onClick={handleDelete}
            >
              Delete
              <Delete />
            </button>
          </div>
        </div>
        <div className="senderInfo">
          <h1 className="">{invoice.name}</h1>
          <span>{invoice.address}</span>
        </div>
        <div className="buyerInfo">
          <h1 className="">{invoice.clientName}</h1>
          <span>{invoice.clientAddress}</span>
        </div>
        <div className="invoiceDetails">
          <div className="item">
            <span>Invoice Number</span> {invoice.invoiceNumber}
          </div>
          <div className="item">
            <span>Invoice date</span> {invoice.invoiceDate}
          </div>
          <div className="item">
            <span>Due Date</span> {invoice.dueDate}
          </div>
        </div>
        {/* table */}
        <table width="100%" className="table">
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
          {invoice.items.map(
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
                  <tr className="">
                    <td>{itemName}</td>
                    <td>{description}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>{discount}</td>
                    <td>{tax}</td>
                    <td>{amount}</td>
                  </tr>
                </tbody>
              </React.Fragment>
            )
          )}
        </table>

        <div>
          <h2 className="total">$. {invoice.total}</h2>
        </div>
        <div className="personnelNote">
          <span className="noteInsign">Note:</span>
          <span className="noteInfo">
            {invoice.notes ? invoice.notes : "no personnel note"}
          </span>
        </div>
        <p className="paymentIndication">
          Pay to the bank account indicated above
        </p>
        <hr />
        <div className="finalDetails">
          <span>Yor Name :</span> {invoice.name} <span>Your Email :</span>
          {invoice.email} <span>Phone Number :</span>
          {invoice.phone}
          <span>Bank :</span> {invoice.bank}
          <span>Account Holder :</span> {invoice.clientName}
          <span>Account Number :</span> {invoice.bankAccount}
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;
