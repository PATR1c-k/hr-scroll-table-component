import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarHeader from "./CalendarHeader";
import CalendarRow from "./CalendarRow";
// import RoleFilter from "./RoleFilter";
import { useState } from "react";

import { getCalendarDays } from "../utils/dateUtils";
import { employees } from "../data/sampleData";

const AdminDashboard = () => {
  const dates = getCalendarDays("2025-01-02", "2025-02-02");
  const [selectedRoles, setSelectedRoles] = useState("All");

  const roles = ["All", ...new Set(employees.map((e) => e.role))];

  const filteredEmployees =
    selectedRoles === "All"
      ? employees
      : employees.filter(
          (e) =>
            e.role.trim().toLowerCase() === selectedRoles.trim().toLowerCase()
        );

  // // role based filter functioanlity
  // const handleRoleChange = () => {
  //   setSelectedRoles((prev) =>
  //     prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
  //   );
  // };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <PersonIcon className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Resource Calendar
              </h1>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CalendarMonthIcon className="h-5 w-5" />
              <span>Jan - Feb 2025</span>
            </div>
          </div>

          {/* Role based filter functionality */}
          <div className="p-4 border-b bg-gray-100 rounded-lg mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Role
            </label>
            <select
              value={selectedRoles}
              onChange={(e) => setSelectedRoles(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Calendar View with enhanced scroll */}
          <div className="relative overflow-x-auto shadow-md rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-x">
                <CalendarHeader dates={dates} />
                {filteredEmployees.map((employee) => (
                  <CalendarRow
                    key={employee.id}
                    employee={employee}
                    dates={dates}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
