import React from 'react'
import ViewEvent from './ViewEvent';

const EventCard = ({event}) => {
  return (
    <div>
      <ViewEvent event={event} reducedView={true} />
    </div>
  )
}

export default EventCard;