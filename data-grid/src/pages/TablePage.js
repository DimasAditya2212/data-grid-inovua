import Table from "../components/tablePage/Table";
import { React, Component } from "react";
import { Link } from "react-router-dom";

class Worker extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h1>Table</h1>
                <Link to={"add-worker"} className="btn btn-primary mb-3">
                  Add Worker
                </Link>
                <Table />;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Worker;
