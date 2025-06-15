import React from "react";
import { Link } from "react-router-dom";


const mockPatients = [
  { name: "John Doe", risk: "High", lastSurvey: "Apr 10, 2024" },
  { name: "Jane Smith", risk: "Medium", lastSurvey: "Apr 3, 2024" },
  { name: "Robert Johnson", risk: "Low", lastSurvey: "Apr 5, 2024" },
];

function DoctorDashboard() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Mental Health Triage</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Risk Level</th>
            <th className="p-2">Last Survey</th>
          </tr>
        </thead>
        <tbody>
          {mockPatients.map((p, idx) => (
            <tr key={idx} className="text-center">
              <td className="p-2">
                <Link to={`/patient/${p.name}`}>{p.name}</Link>
              </td>
              <td
                className={`p-2 text-${
                  p.risk === "High"
                    ? "red"
                    : p.risk === "Medium"
                    ? "yellow"
                    : "green"
                }-600 font-bold`}
              >
                {p.risk}
              </td>
              <td className="p-2">{p.lastSurvey}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorDashboard;
