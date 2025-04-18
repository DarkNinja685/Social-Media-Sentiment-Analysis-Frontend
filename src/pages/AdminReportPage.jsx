import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminReportPage.css";

const AdminReportPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get("/report/all");
        const filteredReports = res.data.data.filter((report) => {
          const isValidText = (text) =>
            text && typeof text === "string" && text.trim().length > 0;

          return isValidText(report.topic) && isValidText(report.reason);
        });
        setReports(filteredReports);
      } catch (err) {
        console.error("Error fetching reports:", err);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="report-page">
      <h2>All Reports</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Topic</th>
            <th>Reason</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              <td>{report._id}</td>
              <td>{report.topic}</td>
              <td>{report.reason}</td>
              <td>{new Date(report.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminReportPage;
