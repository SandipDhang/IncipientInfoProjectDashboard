import React from "react";
import { Link } from "react-router-dom";

const DashboardView = () => {
  return (
    <React.Fragment>
      <div className="Navigation">
        <ul>
          <li>
            <Link to="/dashboard"> Dashboard</Link>
          </li>
          <li>
            <Link to="/users"> Users</Link>
          </li>
        </ul>
      </div>
      <div className="card">
        <header className="card-header">This is a header!</header>
        <div className="card-body">
          Here is the body. Welcome to dashboard!!!!!
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardView;
