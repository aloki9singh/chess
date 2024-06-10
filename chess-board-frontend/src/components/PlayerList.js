import React from 'react';
import { useRouter } from 'next/router';

const PlayerList = ({ players }) => {
    const router = useRouter();

    const handleClick = (username) => {
        router.push(`/player/${username}`);
    };

    return (
        <ul>
            {players.map((player) => (
                <li key={player.id} onClick={() => handleClick(player.username)}>
                    {player.username} ({player.rating})
                </li>
            ))}
        </ul>
    );
};

export default PlayerList;
