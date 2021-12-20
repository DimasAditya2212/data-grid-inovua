import { React, Component } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";

class FormWorker extends Component {
  state = {
    name: "",
    age: "",
    address: "",
    salary: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveWorker = (e) => {
    e.preventDefault();
    // let navigate = useNavigate();

    (async () => {
      const res = await fetch("http://127.0.0.1:8000/api/add-worker", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.state),
      });
      const response = await fetch(res);
    })();

    // const axios = require("axios");

    // const res = axios
    //   .post("http://127.0.0.1:8000/api/add-worker", this.state)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       this.setState(res.data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log(res);

    // if (res.data.status === 200) {
    //   console.log(res.data.message);
    //   this.setState({
    //     name: "",
    //     age: "",
    //     address: "",
    //     salary: "",
    //   });
    // }
  };
  // };
  render() {
    return (
      <form className="p-3" onSubmit={this.saveWorker}>
        <h2>Add Worker</h2>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            className="form-control"
            onChange={this.handleInput}
          />
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={this.state.age}
            className="form-control"
            onChange={this.handleInput}
          />
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            className="form-control"
            onChange={this.handleInput}
          />
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={this.state.salary}
            className="form-control"
            onChange={this.handleInput}
          />
          <div className="mt-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormWorker;
