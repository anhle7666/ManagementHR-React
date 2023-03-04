const EducationForm = (props) => {
    const { setEmployeeData } = props;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData((prevState) => ({
            ...prevState,
            educationInfo: {
                ...prevState.educationInfo,
                [name]: value,
            },
        }));
    };
    return (
        <>
            <label> Học vấn</label>

            <div className="form__section">
                <label>Trình độ học vấn</label>
                <input
                    type="text"
                    name="degree"
                    placeholder="Nhập trình độ học vấn"
                    onChange={handleInputChange}
                    required
                ></input>
            </div>
            <div className="form__section">
                <label>Ngành</label>
                <input
                    type="text"
                    name="major"
                    placeholder="Nhập ngành học"
                    onChange={handleInputChange}
                    required
                ></input>
            </div>

            <div className="form__section">
                <label>Tên trường</label>
                <input
                    type="text"
                    name="university"
                    placeholder="Nhập tên trường"
                    onChange={handleInputChange}
                    required
                ></input>
            </div>
            <div className="form__section">
                <label>Năm tốt nghiệp</label>
                <input
                    type="number"
                    name="graduationYear"
                    placeholder="Nhập năm tốt nghiệp"
                    onChange={handleInputChange}
                    min="1900"
                    required
                ></input>
            </div>
        </>
    );
};

export default EducationForm;
