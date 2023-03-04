import { useState, useEffect } from "react";
import axios from "axios";

const PersonalForm = (props) => {
    const { setEmployeeData } = props;
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://provinces.open-api.vn/api/",
                );
                setProvinces(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleAddressChange = (event) => {
        const { name, value } = event.target;
        let address = value;
        if (name !== "addressDetails")
            address = event.target.selectedOptions[0].dataset.address;
        setEmployeeData((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                address: {
                    ...prevState.personalInfo.address,
                    [name]: address,
                },
            },
        }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value,
            },
        }));
    };

    const handleProvinceChange = async (event) => {
        handleAddressChange(event);
        try {
            const response = await axios.get(
                `https://provinces.open-api.vn/api/p/${event.target.value}?depth=2`,
            );
            setDistricts(response.data.districts);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDistrictChange = async (event) => {
        handleAddressChange(event);
        try {
            const response = await axios.get(
                `https://provinces.open-api.vn/api/d/${event.target.value}?depth=2`,
            );
            setWards(response.data.wards);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <label>Thông tin nhân viên</label>

            <div className="form__section">
                <label>Họ và tên</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nhập họ tên"
                    onChange={handleInputChange}
                    required
                ></input>
            </div>
            <div className="form__section">
                <label>Giới tính</label>
                <select name="age" onChange={handleInputChange} required>
                    <option>- Giới tính -</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                </select>
            </div>
            <div className="form__section">
                <label>Ngày sinh</label>
                <input
                    type="date"
                    name="birthdate"
                    placeholder="Nhập ngày sinh"
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form__section">
                <label>CMND /CCCD</label>
                <input
                    type="text"
                    name="CMND"
                    placeholder="Nhập CMND /CCCD"
                    onChange={handleInputChange}
                    min="9"
                    required
                ></input>
            </div>
            <div className="form__section">
                <label>Số điện thoại</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Nhập số điện thoại"
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className="form__section">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Nhập địa chỉ email"
                    onChange={handleInputChange}
                ></input>
            </div>

            <div className="form__section">
                <label>Địa chỉ</label>
                <input
                    type="text"
                    name="addressDetails"
                    placeholder="Nhập địa chỉ"
                    onChange={handleAddressChange}
                ></input>

                <label className="subLabel">Tỉnh</label>
                <select
                    name="province"
                    onChange={handleProvinceChange}
                    required
                >
                    {provinces.map((province) => (
                        <option
                            key={province.code}
                            value={province.code}
                            data-address={province.name}
                        >
                            {province.name}
                        </option>
                    ))}
                </select>

                <label className="subLabel">Huyện</label>
                <select
                    name="district"
                    onChange={handleDistrictChange}
                    required
                >
                    {districts.map((district) => (
                        <option
                            key={district.code}
                            value={district.code}
                            data-address={district.name}
                        >
                            {district.name}
                        </option>
                    ))}
                </select>
                <label className="subLabel">Xã</label>
                <select name="ward" onChange={handleAddressChange} required>
                    {wards.map((ward) => (
                        <option
                            key={ward.name}
                            value={ward.name}
                            data-address={ward.name}
                        >
                            {ward.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default PersonalForm;
