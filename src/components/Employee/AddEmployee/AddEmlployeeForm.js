import { useState } from "react";
import Modal from "react-modal";
import EmployeeServices from "../../../services/EmployeeServices";
import PersonalForm from "./PersonalForm";
import JobForm from "./JobForm";
import EducationForm from "./EducationForm";
import "./EmployeeForm.css";

function AddEmployee(props) {
    Modal.setAppElement("#root");
    const { isOpen, setIsOpen } = props;

    const [employeeData, setEmployeeData] = useState({
        id: "",
        personalInfo: {
            nationality: "Vietnam",
        },
        jobInfo: {},
        educationInfo: [],
    });

    function handleCloseModal() {
        setIsOpen(false);
    }

    async function handleSave() {
        try {
            employeeData.personalInfo.address = JSON.stringify(
                employeeData.personalInfo.address,
            );
            const res = await EmployeeServices.addNewEmployee(employeeData);
            console.log(res);
            handleCloseModal();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                className="popup__container"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                    },
                }}
            >
                <h3 className="title">Thêm nhân viên</h3>
                <div className="form__functions">
                    <button onClick={handleSave}>Lưu</button>
                    <button onClick={handleCloseModal}>Hủy</button>
                </div>
                <div className="form__container">
                    <div className="personal__info">
                        <PersonalForm setEmployeeData={setEmployeeData} />
                    </div>
                    <div className="job__info">
                        <JobForm setEmployeeData={setEmployeeData} />
                    </div>

                    <div className="education__info">
                        <EducationForm setEmployeeData={setEmployeeData} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default AddEmployee;
