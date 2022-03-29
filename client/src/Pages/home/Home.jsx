import {
  AddCircleOutline,
  Home,
  Logout,
  Notifications,
} from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Invoice from "../../Components/singleInvoice/Invoice";
import { fetchingStart, fetchingSuccess } from "../../redux/userSlice";
import "./Home.scss";
export default function HomePage() {
  const userId = localStorage.getItem("user");
  const [list, setList] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    const dataFetching = async () => {
      dispatch(fetchingStart());
      try {
        const data = await axios.get(
          `https://invoice-yy.herokuapp.com/api/invoice/all/${userId}`
        );
        dispatch(fetchingSuccess(data.data));
        setList(data.data);
      } catch (error) {}
    };
    dataFetching();
  }, [dispatch, userId]);
  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.replace("/login");
  };

  return (
    <div data-testid="home" className="Home">
      <div className="homeWrapper">
        <nav className="nav">
          <ul>
            <li>
              <Home className="icon" />
            </li>
            <li>
              <Notifications className="icon" />
            </li>
            <li>
              <Logout className="icon" onClick={handleLogOut} />
            </li>
          </ul>
        </nav>
        <div className="header">
          <div className="logoInfo">
            <h2>Invoice</h2>
            <p>There are {list.length} total invoices</p>
          </div>
          <div className="div1">
            <button className="addBtn">
              <AddCircleOutline className="BtnIcon" />
              <Link to="new-invoice" className="name">
                new invoice
              </Link>
            </button>
          </div>
        </div>
        <div className="invoicesContainer">
          {list.map((invoice) => {
            return <Invoice key={invoice._id} invoice={invoice} />;
          })}
        </div>
      </div>
    </div>
  );
}
