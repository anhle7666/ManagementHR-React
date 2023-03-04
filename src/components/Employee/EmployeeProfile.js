import PersonalInfo from "./PersonalInfo";
import JobInfo from "./JobInfo";
import EducationInfo from "./EducationInfo";
import TrainingInfo from "./TrainingInfo";
import "./EmployeeInfo.css";
// import { useState, useEffect } from "react";

function EmployeeProfile(props) {
    const { employeeProfile } = props;

    if (employeeProfile) {
        const { personalInfo, jobInfo, educationInfo, trainingInfo } =
            employeeProfile;

        return (
            <div className="employee-profile-container">
                <PersonalInfo personalInfo={personalInfo} />
                <JobInfo jobInfo={jobInfo} />
                <EducationInfo educationInfo={educationInfo} />
                <TrainingInfo trainingInfo={trainingInfo} />
            </div>
        );
    } else {
        return (
            <div className="employee-profile-container">
                <PersonalInfo personalInfo={null} />
                <JobInfo jobInfo={null} />
                <EducationInfo educationInfo={null} />
                <TrainingInfo trainingInfo={null} />
            </div>
        );
    }
}

export default EmployeeProfile;
