import { Outlet } from "react-router-dom";
import Footer from "./components/Footers/Footer";
import Header from "./components/Headers/Header";

export default function Layout() {
    return (
        <div>

            <Header />
             <Outlet/>
        </div>
    )
}