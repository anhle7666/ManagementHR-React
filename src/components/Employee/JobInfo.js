import React from "react";

function JobInfo(props) {
    var { jobInfo } = props;

    if (!jobInfo) {
        jobInfo = {
            salary: "",
        };
    }
    const { ...rest } = jobInfo;
    const formattedSalary = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(jobInfo.salary);

    return (
        <div className="job__info">
            <label>Thông tin công việc</label>
            <p>Mã nhân viên: {rest.idEmployee}</p>
            <p>Bộ phận: {rest.department}</p>
            <p>Vị trí làm việc: {rest.position}</p>
            <p>
                Lương cơ bản:
                {` ${formattedSalary}`}
            </p>
        </div>
    );
}

export default JobInfo;
