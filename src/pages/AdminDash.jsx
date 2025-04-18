import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./AdminDash.css";

const AdminDash = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalReports, setTotalReports] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, reportsRes] = await Promise.all([
          axios.get("/user/all"),
          axios.get("/report/all"),
        ]);

        const users = usersRes.data.data;
        const reports = reportsRes.data.data;

        setTotalUsers(users.length);
        setTotalReports(reports.length);

        // Group data by date (e.g., YYYY-MM-DD)
        const groupByDate = (items, key) => {
          return items.reduce((acc, item) => {
            const date = new Date(item.createdAt).toISOString().split("T")[0];
            acc[date] = acc[date] ? acc[date] + 1 : 1;
            return acc;
          }, {});
        };

        const userDataByDate = groupByDate(users, "createdAt");
        const reportDataByDate = groupByDate(reports, "createdAt");

        // Merge both data sources by date
        const mergedData = Object.keys({
          ...userDataByDate,
          ...reportDataByDate,
        }).map((date) => ({
          date,
          users: userDataByDate[date] || 0,
          reports: reportDataByDate[date] || 0,
        }));

        // Sort by date
        mergedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        setChartData(mergedData);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="card">
          <h3>Total Reports</h3>
          <p>{totalReports}</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart-box">
          <h3>User Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#1f77b4"
                name="Users"
                strokeWidth={2}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Report Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="reports"
                stroke="#ff7f0e"
                name="Reports"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
