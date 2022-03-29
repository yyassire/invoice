const router = require("express").Router();
const Invoice = require("../Models/Invoice");

// create
router.post("/", async (req, res) => {
  const newTask = new Invoice(req.body);
  try {
    const savedTask = await newTask.save();
    res.status(201).send(savedTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

// // delete
router.delete("/:id", async (req, res) => {
  const task = await Invoice.findById(req.params.id);
  if (!task) {
    return res.status(404).send("there is no task by that id name");
  }
  try {
    await Invoice.findByIdAndDelete(task._id);
    res.status(200).send("deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

// get all task
router.get("/all/:userId", async (req, res) => {
  try {
    const invoice = await Invoice.find({ userId: req.params.userId });
    if (!invoice) {
      return req.status(404).send("Invoice not found");
    }
    res.status(200).send(invoice);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
