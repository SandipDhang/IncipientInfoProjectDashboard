import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

let Initial_State = [
  {
    name: "Sandip",
    surname: "Dhang",
    email: "sandip.dhang@yahoo.com",
    ph: "8697836806",
  },
  {
    name: "Niharika",
    surname: "Mittal",
    email: "Niharika.Mittal@yahoo.com",
    ph: "1234567890",
  },
  {
    name: "Amit",
    surname: "Dutta",
    email: "Amit.Dutta@yahoo.com",
    ph: "3214569870",
  },
  {
    name: "Sandip",
    surname: "Kumar",
    email: "sandip.dhang@yahoo.com",
    ph: "8697836806",
  },
];

class UserApi extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      usersData: Initial_State,
    };
  }

  // Create the Table when Component Render

  renderTable = (user) => {
    console.log(user);
    return user.map((IndUser) => {
      return (
        <tr key={Math.random() + 1}>
          <th scope="row">{IndUser.name}</th>
          <td>{IndUser.surname}</td>
          <td>{IndUser.email}</td>
          <td>{IndUser.ph}</td>
          <td>Active</td>
          <td className="inline-margined">
            <Link to="#" className="btn btn-success">
              Edit
            </Link>
            <Link to="#" className="btn btn-danger" onClick={this.deleteUser}>
              Delete
            </Link>
          </td>
        </tr>
      );
    });
  };

  //Open UserForm to Add User

  createUserForm = () => {
    document.getElementById("userForm").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("userTable").style.transform = "scale(0)";
  };

  //Add the User

  AddUser = () => {
    console.log(this.state.usersData);
    let NewUser = {
      name: document.getElementById("newUserName").value,
      surname: document.getElementById("newUserSurname").value,
      email: document.getElementById("newUserEmail").value,
      password: document.getElementById("newUserPassword").value,
    };
    let UserArray = Initial_State;
    let NewUserArray = UserArray.concat(NewUser);
    Initial_State = NewUserArray;

    this.setState({ usersData: NewUserArray });
    document.getElementById("userForm").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("userTable").style.transform = "scale(1)";
    console.log("button");
    console.log(this.state.usersData);
  };

  //Close the Form

  closeForm = () => {
    document.getElementById("userForm").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("userTable").style.transform = "scale(1)";
    console.log("button");
  };

  //Delete User

  deleteUser = (e) => {
    let TargetedUser = e.target.parentElement.parentElement;
    TargetedUser.remove();
  };

  //FilterUser

  userFilter = (e) => {
    console.log(e.target.value);
    let Keyword = e.target.value;
    let FilteredData = this.state.usersData.filter(
      (data) => data.name.toLowerCase().indexOf(Keyword.toLowerCase()) > -1
    );
    this.setState({
      usersData: Keyword.length > 0 ? FilteredData : Initial_State,
    });
  };

  // Call the API to fetch Data
  componentDidMount() {
    let Token = sessionStorage.getItem("token_No");
    let url = "http://php.demo4work.com/mts/backend_api/api/user/filter";
    const bodyParameters = {};
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + Token,
      },
    };

    Axios.post(url, bodyParameters, config).then((res) => {
      console.log(res);
    });
  }

  // Main Component Render
  render() {
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
          <ul>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bell"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                <path
                  fillRule="evenodd"
                  d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                />
              </svg>
              <span className="badgeIcon">9</span>
            </li>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-list-task"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                />
              </svg>
              <span className="badgeIcon yellowBadge">5</span>
            </li>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-envelope-open"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"
                />
              </svg>
              <span className="badgeIcon blueBadge">4</span>
            </li>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-person-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fillRule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
            </li>
          </ul>
        </div>

        <div className="userContainer" id="userTable">
          <div className="ContainerHead">
            <p>Users</p>
            <button className="btn btn-primary" onClick={this.createUserForm}>
              Create User
            </button>
          </div>
          <div className="form-row inline-margined">
            <div className="form-group col-md-3">
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Keyword to search"
                onChange={this.userFilter}
              />
            </div>
            <div className="form-group col-md-4">
              <select id="inputState" className="form-control">
                <option defaultValue>Choose...</option>
                <option>Active</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
          <div className="UserTable">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Surname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Ph No</th>
                  <th scope="col">Activate</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{this.renderTable(this.state.usersData)}</tbody>
            </table>
          </div>
        </div>

        <div className="createUserFormContainer" id="userForm">
          <div className="form-row inline-margined">
            <div className="form-group col">
              <label htmlFor="newUserName">Name</label>
              <input
                type="text"
                className="form-control"
                id="newUserName"
                placeholder="Name"
              />
            </div>
            <div className="form-group col">
              <label htmlFor="newUserSurname">Surname</label>
              <input
                type="text"
                className="form-control"
                id="newUserSurname"
                placeholder="Surname"
              />
            </div>
          </div>
          <div className="form-row inline-margined">
            <div className="form-group col">
              <label htmlFor="newUserEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="newUserEmail"
                placeholder="Email"
              />
            </div>
            <div className="form-group col">
              <label htmlFor="newUserPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="newUserPassword"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="btn btn-primary mybtn" onClick={this.AddUser}>
            Create User
          </button>
          <button className="btn btn-primary mybtn" onClick={this.closeForm}>
            Cancel
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default UserApi;
