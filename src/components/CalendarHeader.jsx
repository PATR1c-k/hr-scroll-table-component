import React from "react";
import { formatDate } from "../utils/dateUtils";

const CalendarHeader = ({ dates }) => {
  return (
    <div className="grid grid-cols-calendar gap-px bg-gray-200">
      <div className="bg-gray-50 p-2 sticky left-0 z-20 shadow-lg">
        <span className="text-sm font-medium text-gray-900">Resource</span>
      </div>
      {dates.map((date) => (
        <div
          key={date.toISOString()}
          className={`bg-gray-50 p-2 text-center ${
            date.getDay() === 0 || date.getDay() === 6 ? "bg-orange-50" : ""
          }`}
        >
          <div className="text-sm font-medium text-gray-900">
            {date.toLocaleDateString("en-US", { weekday: "short" })}
          </div>
          <div className="text-xs text-gray-600">{formatDate(date)}</div>
        </div>
      ))}
    </div>
  );
};

export default CalendarHeader;
