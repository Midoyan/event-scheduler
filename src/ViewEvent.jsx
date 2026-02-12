import React from 'react'
import {  Link } from "react-router-dom";

const ViewEvent = ({event, reducedView=true}) => {
  return (
    <div>
      <ul>
        <li> ------------------------ </li>
        <li> Title: {event.title}</li>
        <li> date: {event.date.toLocaleString()}</li>
        {!reducedView && (
        <>
          <li> description: {event.description}</li>
          <li> location: {event.location}</li>
          <li> latitude: {event.latitude} </li>
          <li> longitude: {event.longitude}</li>
          <li> organizerId: {event.organizerId}</li>
          <li> createdAt: {event.createdAt.toLocaleString()}</li>
          <li> updatedAt: {event.updatedAt.toLocaleString() }</li>
        </>)}
        {reducedView && (
          <Link to={`/event/${event.id}`}>Full Details</Link>
        )}
        <li> ################ </li>
      </ul>
    </div>
  )
}

export default ViewEvent;
