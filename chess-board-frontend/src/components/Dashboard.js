import React, { useEffect, useState } from 'react';
import { getTopPlayers } from '../services/lichessService';
import PlayerList from './PlayerList';

const Dashboard = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const data = await getTopPlayers();
            setPlayers(data);
        };

        fetchPlayers();
    }, []);

    return (
        <div>
            <h1>Top Chess Players</h1>
            <PlayerList players={players} />
        </div>
    );
};

export default Dashboard;
