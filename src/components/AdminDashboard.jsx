import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarHeader from "./CalendarHeader";
import CalendarRow from "./CalendarRow";

import { getCalendarDays } from "../utils/dateUtils";
import { employees } from "../data/sampleData";

const AdminDashboard = () => {
  const dates = getCalendarDays("2025-01-02", "2025-02-02");

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
              <span>Dec 2024 - Jan 2025</span>
            </div>
          </div>

          {/* Calendar View with enhanced scroll */}
          <div className="relative overflow-x-auto shadow-md rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <CalendarHeader dates={dates} />
                {employees.map((employee) => (
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
