const ChamCong = () => {
    return (
        <div className="container">
            <div className="function">
                <h2>Ca làm việc</h2>
            </div>
            <div className="function-view_details">
                <table>
                    <thead>
                        <tr>
                            <th>Mã NV</th>
                            <th>Tên Nhân Viên</th>
                            <th>Ca làm</th>
                            <th>Giờ vào</th>
                            <th>Giờ ra</th>
                            <th>Tổng giờ công</th>
                            <th>Giờ tính lương</th>
                            <th>Tăng ca</th>
                            <th>100%</th>
                            <th>150%</th>
                            <th>200%</th>
                            <th>300%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mã NV</td>
                            <td>Tên Nhân Viên</td>
                            <td>
                                <select>
                                    <option>ca1</option>
                                    <option>ca2</option>
                                    <option>ca3</option>
                                    <option>ca4</option>
                                    <option>ca5</option>
                                </select>
                            </td>
                            <td>Giờ vào</td>
                            <td>Giờ ra</td>
                            <td>Tổng giờ công</td>
                            <td>Giờ tính lương</td>
                            <td>1h</td>
                            <td>
                                <input type="radio"></input>
                            </td>
                            <td>
                                <input type="radio"></input>
                            </td>
                            <td>
                                <input type="radio"></input>
                            </td>
                            <td>
                                <input type="radio"></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChamCong;
