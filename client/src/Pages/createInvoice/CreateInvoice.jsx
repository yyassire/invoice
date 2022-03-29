import React, { useState } from "react";
import TableForm from "../../Components/TableForm/TableForm";
import "./createInvoice.scss";
import axios from "axios";

const CreateInvoice = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  const [total, setTotal] = useState(0);
  const handleCreate = async () => {
    const invoiceCredentials = {
      userId: localStorage.getItem("user"),
      name,
      address,
      email,
      phone,
      bank: bankName,
      bankAccount,
      clientName,
      clientAddress,
      invoiceNumber,
      invoiceDate,
      dueDate,
      notes,
      items: list,
      total,
    };
    try {
      const invoiceData = await axios.post(
        `https://invoice-yy.herokuapp.com/api/invoice`,
        invoiceCredentials
      );
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="CreateInvoice">
      <div className="invoiceForm">
        <main className="formContainer">
          {/* nama and address */}
          <section className="inputSections">
            <div className="input">
              <label htmlFor="name">Your full name *</label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="address">Enter your address *</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </section>
          {/* email phone numb */}
          <section className="inputSections">
            <div className="input">
              <label htmlFor="email">Enter your email *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="phone">Enter your phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </section>
          {/* your bank name and account numb */}
          <section className="inputSections">
            <div className="input">
              <label htmlFor="bankName">Enter your bank name *</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your bank name"
                required
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="bankAccount">
                Enter your bank account number *
              </label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                required
                placeholder="Enter your bank account number"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />
            </div>
          </section>
          {/* client name and address */}
          <section className="inputSections">
            <div className="input">
              <label htmlFor="clientName">Enter your client's name *</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your client's name"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="clientAddress">Enter your client's address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your client's address"
                required
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
            </div>
          </section>
          {/* invoice time */}
          <section className="inputSections">
            <div className="input">
              <label htmlFor="invoiceNumber">Invoice Number *</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Invoice Number"
                required
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>

            <div className="input">
              <label htmlFor="invoiceDate">Invoice Date *</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice Date"
                required
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>

            <div className="input">
              <label htmlFor="dueDate">Due Date *</label>
              <input
                type="date"
                name="dueDate"
                required
                id="dueDate"
                placeholder="Invoice Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </section>
          {/* This is our table form */}
          <article>
            <TableForm
              description={description}
              itemName={itemName}
              setItemName={setItemName}
              discount={discount}
              setDiscount={setDiscount}
              tax={tax}
              setTax={setTax}
              setDescription={setDescription}
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              setPrice={setPrice}
              amount={amount}
              setAmount={setAmount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
          </article>
          <section className="note">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              placeholder="Additional notes to the client"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </section>
        </main>
        <button data-testid="button" onClick={handleCreate} className="changes">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateInvoice;
