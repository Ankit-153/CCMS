import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Root() {
  return (
    <div>
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-md p-2">
        <nav className="container mx-auto flex justify-between items-center p-4 space-between">
          <h1 className="text-2xl font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
              }
            >
            My App
            </NavLink>
          </h1>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/predict-college"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
                }
              >
                Predict College
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/college"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
                }
              >
                College Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to= "/update-profile"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
                }
              >
                Update Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto ">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;