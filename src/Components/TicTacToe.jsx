import React from "react";
import { useState, useEffect } from "react";
import Board from "./Board";

function TicTacToe(){
    const [player,setPlayer] = useState("X");
    const [gameState,setGamestate] = useState(["","","","","","","","",""])
    const [winner,setWinner] = useState("");
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];

    const checkForWinner = () => {
        for (let combo of winningCombos) {
          const [a, b, c] = combo;
          if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            setWinner(gameState[a] + " WINS!");
            return;
          }
        }
      };

    const checkForDraw = () => { 
        let count = 0;
        gameState.forEach((tile) => {
            if (tile === ""){
                count+=1;
            }
        });
        if(count === 0 && winner === ""){
            setWinner("DRAW")
        }
    }
    

    useEffect(() => {
        checkForWinner();
        checkForDraw();
    },[gameState]);
    
    
    const handleClick = (id) => {
        if(gameState[id] === ""){
            if(winner === ""){
                const newState = [...gameState];
                newState[id] = player;
                setGamestate(newState);
                if (player === "X")
                    {setPlayer("O")}
                if (player === "O")
                    {setPlayer("X")}
            }
        }
    }

    const handleReset= () =>{
        setGamestate(["","","","","","","","",""]);
        setWinner("");
    }

    return (
            <div className="flexbox justify-center w-full md:w-[768px] bg-gray-900 rounded-md shadow-lg">
                <div className="bg-gray-800 mt-2 mb-2 bottom-4 w-full h-8 text-gray-300 rounded-md shadow-lg">
                    <h1 className="text-lg mt-2 text-center text-bold">NOUGHTS AND CROSSES</h1>
                </div>
                <div className="flex justify-center">
                    <Board handleClick={handleClick} gameState={gameState}></Board>
                </div>
                {winner &&
                 <div className="fixed top-1/2 left-1/2 -translate-x-1/2 text-center -translate-y-1/2 bg-white shadow-lg p-6 rounded-lg w-64">
                    <p>{winner}</p>
                    <button className="text-center mt-2 h-8 w-full text-gray-300 bg-gray-800 rounded-md shadow-lg" onClick={handleReset}> RESET</button>
                 </div>
                }
                <button className="text-center mt-2 h-8 w-full text-gray-300 bg-gray-800 rounded-md shadow-lg" onClick={handleReset}> RESET</button>
            </div>
    );
}

export default TicTacToe;