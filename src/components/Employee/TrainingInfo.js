function TrainingInfo(props) {
    let { trainingInfo } = props;

    if (!trainingInfo) {
        return (
            <div className="training__info">
                <label>Đào tạo</label>
                <table>
                    <thead>
                        <tr>
                            <th>Training ID</th>
                            <th>Name</th>
                            <th>Organization</th>
                            <th>Date</th>
                            <th>Duration (hours)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div className="training__info">
            <label>Đào tạo</label>
            {trainingInfo.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Mã Đào tạo</th>
                            <th>Tên</th>
                            <th>Tổ chức</th>
                            <th>Ngày</th>
                            <th>Thời lượng (giờ)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainingInfo.map((training) => (
                            <tr key={training.name}>
                                <td>{training.id}</td>
                                <td>{training.name}</td>
                                <td>{training.organization}</td>
                                <td>{training.date}</td>
                                <td>{training.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No training information available.</p>
            )}
        </div>
    );
}

export default TrainingInfo;
