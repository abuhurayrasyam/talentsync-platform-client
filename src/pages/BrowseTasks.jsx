import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import useDocumentTitle from '../hooks/useDocumentTitle';

const BrowseTasks = () => {
  const originalTasks = useLoaderData();
  const [tasks, setTasks] = useState(originalTasks);
  const [sortType, setSortType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useDocumentTitle("Talentsync Platform | Browse Tasks");

  const categories = [...new Set(originalTasks.map(task => task.category))];

  useEffect(() => {
    let filtered = [...originalTasks];

    if (selectedCategory) {
      filtered = filtered.filter(task => task.category === selectedCategory);
    }

    if (sortType === 'budget-asc') {
      filtered.sort((a, b) => a.budget - b.budget);
    } else if (sortType === 'budget-desc') {
      filtered.sort((a, b) => b.budget - a.budget);
    } else if (sortType === 'deadline-asc') {
      filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (sortType === 'deadline-desc') {
      filtered.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    }

    setTasks(filtered);
  }, [sortType, selectedCategory, originalTasks]);

  return (
    <div className="min-h-screen px-4 lg:px-10 mt-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Browse All Tasks</h1>

      <div className="flex flex-col md:flex-row gap-4 md:items-center mb-6">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered max-w-xs"
          value={selectedCategory}
        >
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          onChange={(e) => setSortType(e.target.value)}
          className="select select-bordered max-w-xs"
          value={sortType}
        >
          <option value="">Sort By</option>
          <option value="budget-asc">Budget: Low to High</option>
          <option value="budget-desc">Budget: High to Low</option>
          <option value="deadline-asc">Deadline: Soonest</option>
          <option value="deadline-desc">Deadline: Latest</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Posted By</th>
              <th>Task</th>
              <th>Category</th>
              <th>Budget</th>
              <th>Deadline</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((taskData, index) => (
                <tr key={taskData._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="font-bold">{taskData.name}</div>
                  </td>
                  <td>{taskData.title}</td>
                  <td>{taskData.category}</td>
                  <td>${taskData.budget}</td>
                  <td>{taskData.deadline}</td>
                  <td>
                    <Link to={`/dashboard/task-details/${taskData._id}`}>
                      <button className="bg-primary text-white hover:bg-secondary hover:text-gray-800 rounded-md px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm cursor-pointer">
                        See Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-6">No tasks found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTasks;
