import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
    return (
        <div>
            <div className="Layout">
                <Link to="/" className="link">Home</Link>
                <Link to="/basket" className="link">Basket</Link>
                <Link to="/pay" className="link">Pay</Link>
                <Link to="/products" className="link">Products</Link>
            </div>
            <Outlet />
        </div>
    )
}