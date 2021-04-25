import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function ItemTransaction(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.index + 1}</td>
        <td>
          {props.transaction.created_at}
        </td>
        <td>{props.transaction.products}</td>
        <td>{props.transaction.total}</td>
        <td>{props.transaction.status}</td>
        <td>
          <Button variant="success" >
            Edit
          </Button>{" "}
          <Button variant="danger" >
            Delete
          </Button>
        </td>
      </tr>
    </React.Fragment>
  )
}
