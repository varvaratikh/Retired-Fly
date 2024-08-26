// import React from 'react';
// import './Game.sass';
//
// import game from '../../../public/images/eye_game.png'
//
//
// const Game = () => {
//     return (
//         <div className="game_container">
//             <img className="game_img" src={game} alt="game"/>
//             <p className="rules">
//                 <span className="bold-rules">
//                     Rules:&nbsp;
//                 </span>
//                  you need to connect the dots by numbers and get a picture!
//             </p>
//         </div>
//     );
// };
//
// export default Game;


import React, { useRef, useEffect, useState } from 'react';
import './Game.sass';
import game from '../../../public/images/eye_game.png';

const Game = () => {
    const canvasRef = useRef(null);
    const [points, setPoints] = useState([]);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Отрисовать изображение на фоне
        const img = new Image();
        img.src = game;
        img.onload = () => {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        // Отрисовать линии
        lines.forEach((line) => {
            context.beginPath();
            context.moveTo(line.start.x, line.start.y);
            context.lineTo(line.end.x, line.end.y);
            context.strokeStyle = 'black';
            context.lineWidth = 2;
            context.stroke();
        });

        // Отрисовать точки
        points.forEach(point => {
            context.beginPath();
            context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
            context.fillStyle = 'black';
            context.fill();
            context.stroke();
        });

    }, [lines, points]);

    const handleCanvasClick = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newPoint = { x, y };

        if (points.length > 0) {
            const lastPoint = points[points.length - 1];
            setLines([...lines, { start: lastPoint, end: newPoint }]);
        }

        setPoints([...points, newPoint]);
    };

    return (
        <div className="game_container">
            <canvas
                ref={canvasRef}
                className="game_canvas"
                width={763}
                height={447}
                onClick={handleCanvasClick}
            />
            <p className="rules">
                <span className="bold-rules">
                    Rules:&nbsp;
                </span>
                You need to connect the dots by numbers and get a picture!
            </p>
        </div>
    );
};

export default Game;
