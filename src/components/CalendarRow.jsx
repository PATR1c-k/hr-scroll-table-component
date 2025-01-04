import React from "react";
import { isWeekend } from "../utils/dateUtils";

const CalendarRow = ({ employee, dates }) => {
  return (
    <div className="grid grid-cols-calendar gap-px bg-gray-200">
      <div className="bg-white p-2 sticky left-0 z-10 shadow-lg">
        <div className="font-medium text-sm text-gray-900">{employee.name}</div>
        <div className="text-xs text-gray-500">{employee.role}</div>
      </div>
      {dates.map((date) => {
        const task = employee.tasks.find(
          (t) => new Date(t.date).toDateString() === date.toDateString()
        );

        const isWeekendDay = isWeekend(date);

        return (
          <div
            key={date.toISOString()}
            className={`bg-white p-2 min-h-[60px] ${
              isWeekendDay ? "bg-orange-50" : ""
            }`}
          >
            {task && (
              <div
                className={`text-xs p-1 rounded ${
                  task.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {task.title}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarRow;
