import React from "react";
import { useParams } from "react-router-dom";

function PatientOverview() {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Patient Overview: {id}</h2>
      <div className="bg-white p-4 shadow rounded">
        <p>
          <strong>Risk Level:</strong> High
        </p>
        <p className="mt-2">
          <strong>AI Assessment:</strong>
        </p>
        <p>
          The patient reported feeling hopeless and distressed every day over
          the past week. Immediate intervention recommended.
        </p>
      </div>
    </div>
  );
}

export default PatientOverview;
