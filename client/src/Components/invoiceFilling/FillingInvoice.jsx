import React from "react";
import "./FillingInvoice.scss";

const FillingInvoice = ({ setShowInvoice }) => {
  return (
    <div className="FillingInvoice">
      Invoice
      <button onClick={() => setShowInvoice(false)}>
        Continue filling the form
      </button>
    </div>
  );
};

export default FillingInvoice;
