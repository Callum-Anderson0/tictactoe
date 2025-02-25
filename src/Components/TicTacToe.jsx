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
            setWinner(gameState[a]);
            return;
          }
        }
      };
    

    const convToIndex = (x,y) => {
        return y*3+x;
    }

    useEffect(() => {
        checkForWinner();
    },[gameState]);
    
    
    const handleClick = (id) => {
        //console.log(player)
        //console.log(`Clicked on: ${id}`);
        if(gameState[id] === ""){
            if(winner == ""){
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
            <div class="flexbox justify-center w-full md:w-[768px] bg-gray-900 w- rounded-md">
                <div class="bg-gray-800 mt-2 mb-4 bottom-4 w-full h-8 text-gray-300 text-center rounded-md">
                    <h1 class="text-lg text-bold">NOUGHTS AND CROSSES</h1>
                </div>
                <div class="flex justify-center">
                    <Board handleClick={handleClick} gameState={gameState}></Board>
                </div>
                <div class={`fixed ${winner !== "" ? "visible" : "invisible"} top-1/2 left-1/2 -translate-x-1/2 text-center -translate-y-1/2 bg-white shadow-lg p-6 rounded-lg w-64`}>
                    <p>{winner} WINS!</p>
                    <button class="text-centre mt-4 h-8 w-full text-gray-300 bg-gray-800 rounded-md" onClick={handleReset}> RESET</button>
                </div>
                <button class="text-centre mt-4 h-8 w-full text-gray-300 bg-gray-800 rounded-md" onClick={handleReset}> RESET</button>
            </div>
    );
}

export default TicTacToe;