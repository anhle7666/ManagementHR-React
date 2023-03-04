function EducationInfo(props) {
    var { educationInfo } = props;
    if (!educationInfo) {
        educationInfo = {};
    }
    const { ...rest } = educationInfo;

    return (
        <div className="education__info">
            <label>Học vấn</label>
            <p>Trình độ học vấn: {rest.educationLevel}</p>
            <p>Ngành: {rest.major}</p>
            <p>Trường: {rest.university}</p>
            <p>Năm tốt nghiệp: {rest.graduationYear}</p>
            <p>Bằng cấp: {rest.degree}</p>
        </div>
    );
}

export default EducationInfo;
