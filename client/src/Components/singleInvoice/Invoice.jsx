import React from "react";
import "./invoice.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Invoice = ({ invoice }) => {
  const bgColor = invoice.isPaid
    ? "rgba(29, 255, 5, 0.18)"
    : "rgba(255, 236, 5, 0.26)";
  const doteColor = !invoice.isPaid ? "orange" : "green";
  const textColor = !invoice.isPaid ? "orange" : "green";
  const text = (status) => {
    return !status ? "Outstanding" : "Paid";
  };
  const date = (data) => {
    const myDate = new Date(data);
    return `${myDate.getDate()}/${myDate.getDay()}/${myDate.getFullYear()}`;
  };
  return (
    <div className="Invoice">
      <Link
        to={"/invoice/" + invoice._id}
        state={invoice}
        className="invoiceWrapper"
      >
        <span> #{invoice.invoiceNumber}</span>
        <span>Due {date(invoice.dueDate)}</span>
        <span>{invoice.clientName}</span>
        <span>${invoice?.total}</span>
        <div style={{ backgroundColor: bgColor }} className="status">
          <div style={{ backgroundColor: doteColor }} className="dote" />
          <span style={{ color: textColor }}>{text(invoice.isPaid)}</span>
        </div>
        <ArrowForwardIosIcon className="arrowIcon" />
      </Link>
    </div>
  );
};

export default Invoice;
