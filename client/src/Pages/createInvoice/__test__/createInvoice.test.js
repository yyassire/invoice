import { getByRole, render, screen } from "@testing-library/react";
import CreateInvoice from "../CreateInvoice";
import userEvent from "@testing-library/user-event";

test("the form is submitted", () => {
  const submitForm = jest.fn();

  render(<CreateInvoice onClick={submitForm} />);

  userEvent.type(screen.getByLabelText("Your full name *"), "yassire");
  userEvent.type(
    screen.getByLabelText("Enter your address *"),
    "istanbul turkey"
  );
  userEvent.type(
    screen.getByLabelText("Enter your email *"),
    "yassire02@gmail.com"
  );
  userEvent.type(screen.getByLabelText("Enter your phone"), "416 522 56 52");
  userEvent.type(screen.getByLabelText("Enter your bank name *"), "vakif bank");
  userEvent.type(
    screen.getByLabelText("Enter your bank account number *"),
    "5115 5865 4462 5123"
  );
  userEvent.type(
    screen.getByLabelText("Enter your client's name *"),
    "Fatimata"
  );
  userEvent.type(screen.getByLabelText("Enter your client's address"), "48116");
  userEvent.type(screen.getByLabelText("Invoice Number *"), "istanbul turkey");
  userEvent.type(screen.getByLabelText("Invoice Date *"), "25/5/2022");
  userEvent.type(screen.getByLabelText("Additional Notes"), "this is my note");
  let button = screen.getByTestId("button");
  userEvent.click(button);

  expect(submitForm).toHaveBeenCalledTimes(0);
});
