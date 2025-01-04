import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const StatusBadge = (status) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        status === "completed"
          ? "bg-green-100 text-green-800"
          : "bg-yellow-100 text-yellow-800"
      }`}
    >
      {status === "completed" ? (
        <CheckCircleIcon className="w-4 h-4 mr-1" />
      ) : (
        <CancelIcon className="w-4 h-4 mr-1" />
      )}
      {status}
    </span>
  );
};

export default StatusBadge;
