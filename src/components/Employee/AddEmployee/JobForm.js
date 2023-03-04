const JobForm = (props) => {
    const { setEmployeeData } = props;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData((prevState) => ({
            ...prevState,
            jobInfo: {
                ...prevState.jobInfo,
                [name]: value,
            },
        }));
    };

    return (
        <>
            <label>Công việc</label>
            <div className="form__section">
                <label>Bộ phận</label>
                <input
                    type="text"
                    name="department"
                    placeholder="Nhập tên bộ phận"
                    onChange={handleInputChange}
                    required
                ></input>
            </div>
            <div className="form__section">
                <label>Vị trí làm việc</label>
                <input
                    type="text"
                    name="position"
                    placeholder="Nhập vị trí làm việc"
                    onChange={handleInputChange}
                    required
                ></input>
            </div>
            <div className="form__section">
                <label>Ngày vào làm</label>
                <input
                    type="date"
                    name="startDate"
                    placeholder="Nhập ngày vào làm"
                    onChange={handleInputChange}
                    required
                ></input>
            </div>
            <div className="form__section">
                <label>Lương cơ bản</label>
                <input
                    type="number"
                    name="basicSalary"
                    placeholder="Nhập lương cơ bản"
                    onChange={handleInputChange}
                    step="1000000"
                    required
                ></input>
            </div>
        </>
    );
};

export default JobForm;
