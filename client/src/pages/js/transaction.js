import React, { Component } from "react";
import "../css/transaction.css";
import { connect } from "react-redux";
import {
  getTransaction,
  patchTransaction,
} from "../../redux/actions/transaction";
import { DropdownButton, Dropdown } from "react-bootstrap";
import moment from "moment";

class Transaction extends Component {
  componentDidMount() {
    this.props.getTransaction();
  }

  constructor(props) {
    super(props);

    this.state = { data: { gender: "male" } };
  }

  handleChange = async (status, id) => {
    this.props.patchTransaction(status, id);
  };

  render() {
    const { data: dataTransaction } = this.props.transaction;
    let a = Object.values(dataTransaction);

    return (
      <div>
        <p className="incoming">Incoming Transaction</p>
        <table className="tabel-utama">
          <thead className="kepala-tabel">
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="badan-tabel">
            {a.map((transactionDetail, i) => {
              return (
                <tr key={transactionDetail.id}>
                  <th>{i + 1}</th>
                  <th>{transactionDetail.User.fullName}</th>
                  <th>{transactionDetail.attachment}</th>
                  <th>
                    {Math.round(
                      moment(transactionDetail.dueDate)
                        .startOf("days")
                        .diff(moment().startOf("hour"), "days", true)
                    )}{" "}
                    days
                  </th>
                  <th
                    style={
                      transactionDetail.status === "Approved"
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    {transactionDetail.status === "Approved"
                      ? "Active"
                      : "Not Active"}
                  </th>
                  <th
                    style={
                      transactionDetail.status === "Cancel"
                        ? { color: "red" }
                        : transactionDetail.status === "Approved"
                        ? { color: "green" }
                        : { color: "Yellow" }
                    }
                  >
                    {transactionDetail.status}
                  </th>

                  <th>
                    {" "}
                    <DropdownButton
                      alignRight
                      title={<i className="fas fa-angle-down" />}
                      id="dropdown-menu"
                      variant="black"
                      className="action-button"
                    >
                      <Dropdown.Item
                        eventKey="1"
                        className="text-success"
                        name="status"
                        value="Approved"
                        onClick={() =>
                          this.handleChange("Approved", transactionDetail.id)
                        }
                      >
                        Approved
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey="2"
                        className="text-danger"
                        value="Cancel"
                        onClick={() =>
                          this.handleChange("Cancel", transactionDetail.id)
                        }
                      >
                        Cancel
                      </Dropdown.Item>
                    </DropdownButton>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction,
  };
};

export default connect(mapStateToProps, { getTransaction, patchTransaction })(
  Transaction
);
