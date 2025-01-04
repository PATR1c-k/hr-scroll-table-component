import React from "react";

const WeeklyTaskTable = () => {
  const weeklyTasks = tasks.filter((task) => task.week === weekNumber);

  if (weeklyTasks.length === 0) {
    return <div className="text-gray-500 text-sm">No tasks</div>;
  }

  return (
    <div className="space-y-2">
      {weeklyTasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between bg-gray-50 p-2 rounded"
        >
          <span className="text-sm font-medium text-gray-900">
            {task.title}
          </span>
          <div className="flex items-center space-x-4">
            <StatusBadge status={task.status} />
            <span className="text-sm text-gray-500">
              {new Date(task.dueDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyTaskTable;
