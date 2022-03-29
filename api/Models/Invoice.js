const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    bank: {
      type: String,
    },
    bankAccount: {
      type: String,
    },
    clientName: {
      type: String,
    },
    clientAddress: {
      type: String,
    },
    invoiceNumber: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    invoiceDate: {
      type: Date,
    },
    notes: {
      type: String,
    },
    total: {
      type: String,
    },
    items: {
      type: Array,
      default: [],
    },

    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("invoice", invoiceSchema);
