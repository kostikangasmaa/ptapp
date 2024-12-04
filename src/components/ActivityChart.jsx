import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getTrainings } from '../customerApi';
import { groupBy, map, sumBy } from 'lodash';

function ActivityChart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        getTrainings()
            .then(data => {
                const formedData = transformData(data)
                setChartData(formedData)
            })
            .catch(error => console.error(error))
    };

    const transformData = (sessions) => {
        const grouped = groupBy(sessions, (session) => session.activity.toLowerCase());
        return map(grouped, (sessions, activity) => ({
            activity,
            totalDuration: sumBy(sessions, 'duration'),
        }));
    };

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="activity" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalDuration" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ActivityChart;