import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../assets/spinner.css";
const BatDau = lazy(() => import("../views/BatDau"));
const ThongTinNhanVien = lazy(() =>
    import("../views/EmployeeInfomationGeneral"),
);
const ChamCong = lazy(() => import("../views/ChamCong"));
const Luong = lazy(() => import("../views/Luong"));
const BaoHiem = lazy(() => import("../views/BaoHiem.js"));
const NghiPhep = lazy(() => import("../views/NghiPhep"));

const FunctionRouter = () => {
    const routes = [
        {
            key: "batdau",
            path: "/",
            element: <BatDau />,
        },
        {
            key: "thongtin",
            path: "/thong-tin-nhan-vien",
            element: <ThongTinNhanVien />,
        },
        {
            key: "chamcong",
            path: "/cham-cong",
            element: <ChamCong />,
        },
        {
            key: "luong",
            path: "/luong",
            element: <Luong />,
        },
        {
            key: "baohiem",
            path: "/bao-hiem",
            element: <BaoHiem />,
        },
        {
            key: "nghiphep",
            path: "/nghi-phep",
            element: <NghiPhep />,
        },
    ];

    return (
        <Suspense
            fallback={
                <div>
                    <span className="loader"></span>
                </div>
            }
        >
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.key}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default FunctionRouter;
