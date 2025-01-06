import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarHeader from "./CalendarHeader";
import CalendarRow from "./CalendarRow";
import { useState } from "react";
import { getCalendarDays } from "../utils/dateUtils";
import { employees } from "../data/sampleData";
import DatePicker from "react-datepicker";

const AdminDashboard = () => {
  // calendar functioanlity
  const [selectedDate, setSelectedDate] = useState(new Date()); //default to current date
  const [showDatePicker, setShowDatePicker] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const startDate = selectedDate;
  const endDate = new Date(startDate);
  endDate.setMonth(startDate.getMonth() + 1); //set to next month

  const dates = getCalendarDays(startDate.toISOString(), endDate.toISOString());

  // Filtering based on roles
  const [selectedRoles, setSelectedRoles] = useState("All");

  const roles = ["All", ...new Set(employees.map((e) => e.role))];

  const filteredEmployees =
    selectedRoles === "All"
      ? employees
      : employees.filter(
          (e) =>
            e.role.trim().toLowerCase() === selectedRoles.trim().toLowerCase()
        );

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
              <CalendarMonthIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => {
                  setShowDatePicker(!showDatePicker); //toggle calendar
                }}
              />
              {showDatePicker && (
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MMMM YYYY"
                  showMonthYearPicker
                  inline
                  className="relative border-2 border-gray-300 rounded-xl shadow-lg bg-white p-4 mt-4 w-96 transform transition-all hover:scale-105 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  popperClassName="custom-datepicker-popper"
                  calendarClassName="custom-datepicker-calendar"
                />
              )}
              <span className="text-lg font-medium text-gray-900">
                {selectedDate.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
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
