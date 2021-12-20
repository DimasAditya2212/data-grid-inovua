import { React, Component } from "react";
import FormWorker from "../components/tablePage/FormWorker";

class AddingWorker extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <FormWorker />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddingWorker;
