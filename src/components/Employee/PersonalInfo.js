function PersonalInfo(props) {
    var { personalInfo } = props;
    if (!personalInfo) {
        personalInfo = {};
    }
    const { ...rest } = personalInfo;

    // console.log(typeof rest.address);
    return (
        <div className="personal__info">
            <label>Thông tin cá nhân</label>
            <img
                src={rest.avatar || "https://via.placeholder.com/150"}
                alt="Avatar"
            ></img>
            <p>Họ và tên: {rest.name}</p>
            <p>Ngày sinh: {rest.dob}</p>
            <p>Giới tính: {rest.gender}</p>
            <p>CMND: {rest.cmnd}</p>
            <p>Địa chỉ: {typeof rest.address}</p>
            <p>Điện thoại: {rest.phone}</p>
            <p>Email: {rest.email}</p>
            <p>Quốc tịch: {rest.nationality}</p>
            <p>Tình trạng hôn nhân: {rest.maritalStatus}</p>
        </div>
    );
}

export default PersonalInfo;
