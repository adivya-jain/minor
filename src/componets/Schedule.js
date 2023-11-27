import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {
  // State to manage the selected date
  const [date, setDate] = useState(new Date());
  // State to manage the events for each date
  const [events, setEvents] = useState({});

  // Function to handle date change
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Function to handle adding an event for the selected date
  const addEvent = (event) => {
    const dateString = date.toISOString().split('T')[0];

    // Update events with the new event for the selected date
    setEvents({
      ...events,
      [dateString]: events[dateString] ? [...events[dateString], event] : [event],
    });
  };

  return (
    <div>
      <h1>Event Calendar</h1>
      <Calendar onChange={handleDateChange} value={date} />
      <div>
        <h2>Events for {date.toDateString()}</h2>
        <ul>
          {events[date.toISOString().split('T')[0]] &&
            events[date.toISOString().split('T')[0]].map((event, index) => (
              <li key={index}>{event}</li>
            ))}
        </ul>
        <input
          type="text"
          placeholder="Add event..."
          onChange={(e) => addEvent(e.target.value)}
        />
      </div>
    </div>
  );
};

export default EventCalendar;
