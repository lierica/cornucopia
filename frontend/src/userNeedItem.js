import React, { Component } from "react"

const UserNeedItem = (props) => {
  return (
    <tr id={props.need.id}>
      <td>{props.need.title}</td>
      <td>{props.need.category}</td>
      <td>{props.need.location}</td>
      <td onClick={props.handleClick()}>{props.need.fulfill_by_date}</td>
      <td>
        <button onClick={props.handleClick()} id={need.id}>
          Edit
        </button>
      </td>
    </tr>
  )
}
