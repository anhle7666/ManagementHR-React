import { useEffect, useState } from "react";
import EmployeeServices from "../services/EmployeeServices";
import AddEmployee from "../components/Employee/AddEmployee/AddEmlployeeForm";
import EmployeeInfo from "../components/Employee/EmployeeProfile";
import EmployeeList from "../components/Employee/EmployeeList";
import "../assets/css/ThongTinNhanVien.css";
import "../assets/css/button.css";
const EmployeeGeneralInfo = () => {
    const [employeeSelected, setSelect] = useState(null);
    const [employeesList, setEmployeesList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleChooseEmployee = (employee) => {
        console.log(employee);

        setSelect(employee);
    };

    const handleAddEmployee = () => {
        setIsOpen(true); // Mở modal
    };

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await EmployeeServices.getAllEmployees();
                setEmployeesList(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchEmployees();
    }, []);

    return (
        <div className="container">
            <div className="function">
                <h2 className="function-title">Thông tin nhân viên</h2>
                <div className="function-group">
                    <button
                        className="btn"
                        onClick={() => {
                            handleAddEmployee();
                        }}
                    >
                        Thêm nhân viên
                    </button>
                    <button className="btn">Cập nhật thông tin</button>
                    <button className="btn">Cập nhật lương</button>
                    <button className="btn">Đào tạo</button>
                    <button className="btn btn-red">Nhân viên nghỉ việc</button>
                </div>
            </div>
            <div className="function-view_details">
                <div className="name-list">
                    <div className="name-list__title">
                        <h3>Danh sách nhân viên</h3>
                        <EmployeeList
                            employees={employeesList}
                            onSelect={handleChooseEmployee}
                        />
                    </div>
                </div>
                <div className="employee-info">
                    <EmployeeInfo employeeProfile={employeeSelected} />
                </div>
            </div>
            {isOpen && <AddEmployee isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    );
};

export default EmployeeGeneralInfo;
