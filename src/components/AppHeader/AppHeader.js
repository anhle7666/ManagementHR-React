import { Link } from "react-router-dom";
import "./AppHeader.css";
const AppHeader = () => {
    const menuItems = [
        {
            key: "thongtin",
            path: "/thong-tin-nhan-vien",
            title: "Thông tin nhân viên",
        },
        {
            key: "chamcong",
            path: "/cham-cong",
            title: "Chấm công",
        },
        {
            key: "luong",
            path: "/luong",
            title: "Lương",
        },
        {
            key: "baohiem",
            path: "/bao-hiem",
            title: "Bảo hiểm",
        },
        {
            key: "nghiphep",
            path: "/nghi-phep",
            title: "Nghỉ phép",
        },
    ];

    return (
        <div className="appHeader">
            <Link className="navbar-brand" to="/">
                Logo
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="menu-list">
                    {menuItems.map((item) => (
                        <li key={item.key} className="menu-items">
                            <Link className="item_link" to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AppHeader;
