const EmployeeList = ({ employees, onSelect }) => {
    return (
        <div className="name-list__employees">
            <h4>Số nhân viên: {employees.length}</h4>
            <ol className="list__employees">
                {employees.length > 0 ? (
                    employees.map((employee) => {
                        return (
                            <li
                                key={employee.id}
                                className="item__employees"
                                onClick={() => onSelect(employee)}
                            >
                                {employee.personalInfo.name}
                            </li>
                        );
                    })
                ) : (
                    <li>Không có nhân viên</li>
                )}
            </ol>
        </div>
    );
};

export default EmployeeList;
