import React, { useState, useEffect } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getTrainings } from '../customerApi';

const localizer = dayjsLocalizer(dayjs);

function CalendarPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        getTrainings()
            .then(data => {
                const formedData = data.map(transformData)
                setEvents(formedData)
            })
            .catch(error => console.error(error))
    };

    const transformData = (session) => {
        return {
            title: `${session.customer.firstname} ${session.customer.lastname} - ${session.activity}`,
            start: new Date(session.date),
            end: new Date(new Date(session.date).getTime() + session.duration * 60000),
        };
    };


    return (<>
        <div style={{ height: 500 }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
            />
        </div>
    </>);

}

export default CalendarPage;