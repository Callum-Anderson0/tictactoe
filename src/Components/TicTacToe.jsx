import React from "react";
import { useState, useEffect } from "react";
import Board from "./Board";

function TicTacToe(){
    const [player,setPlayer] = useState("X");
    const [gameState,setGamestate] = useState(["","","","","","","","",""])
    const [winner,setWinner] = useState("");

    const convToIndex = (x,y) => {
        return y*3+x;
    }

    useEffect(() => {
        handleGameLogic();
    },[gameState]);

    useEffect(() => {
        console.log("the winner is: "+ winner);
    },[winner])

    
    
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

    const handleGameLogic = () =>{
        for(let i =0; i < 3; i++){
            if(gameState[convToIndex(i,0)]==gameState[convToIndex(i,1)] 
                && gameState[convToIndex(i,1)]==gameState[convToIndex(i,2)]
                && gameState[convToIndex(i,0)] != ""){
                    setWinner(gameState[convToIndex(i,0)]);
                    return;
                }
            if(gameState[convToIndex(0,i)]==gameState[convToIndex(1,i)] 
                && gameState[convToIndex(1,i)]==gameState[convToIndex(2,i)]
                && gameState[convToIndex(0,i)] != ""){
                    setWinner(gameState[convToIndex(0,i)]);
                    return;
                }
            if(gameState[convToIndex(0,0)]==gameState[convToIndex(1,1)]
                && gameState[convToIndex(1,1)]== gameState[convToIndex(2,2)]
                && gameState[convToIndex(0,0)]!=""){
                    setWinner(gameState[convToIndex(0,0)]);
                    return
                }
            if(gameState[convToIndex(2,0)]==gameState[convToIndex(1,1)]
                && gameState[convToIndex(1,1)]== gameState[convToIndex(0,2)]
                && gameState[convToIndex(2,0)]!=""){
                    setWinner(gameState[convToIndex(2,0)]);
                    return
                }
        }
    
    }

    const handleReset= () =>{
        setGamestate(["","","","","","","","",""]);
        setWinner("")
    }

    return (
            <div class="flexbox justify-centre bg-gray-900 w-[700px] rounded-md">
                <div class="bg-gray-700 mb-4 bottom-4 w-full h-8 text-white text-center rounded-md"><h1 class="text-lg">Tic Tac Toe!</h1></div>
                <Board handleClick={handleClick} gameState={gameState}></Board>
                <button class="text-centre mt-4 h-8 w-full text-white bg-gray-700 rounded-md" onClick={handleReset}> reset game</button>
            </div>
    );
}

export default TicTacToe;