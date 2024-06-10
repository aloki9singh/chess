import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPlayerRatingHistory } from '../services/lichessService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RatingChart = () => {
    const router = useRouter();
    const { username } = router.query;
    const [ratingData, setRatingData] = useState([]);

    useEffect(() => {
        if (username) {
            const fetchData = async () => {
                const data = await getPlayerRatingHistory(username);
                setRatingData(data);
            };

            fetchData();
        }
    }, [username]);

    return (
        <div>
            <h1>Rating History for {username}</h1>
            <LineChart
                width={500}
                height={300}
                data={ratingData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rating" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default RatingChart;
