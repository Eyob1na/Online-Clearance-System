import React from "react";
// import Progress from "../../components/ProgressBar/Progress";
import ClearanceForm from "../../components/ClearanceForm";
const Dashboard = () => {
  return (
    <div>
      <div> Student Dashoard page</div>
      <ClearanceForm
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
};
export default Dashboard;