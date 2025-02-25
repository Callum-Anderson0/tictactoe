import React from "react";
import { useState, useEffect } from "react";
import Board from "./Board";

function TicTacToe(){
    const [player,setPlayer] = useState("X");
    const [gameState,setGamestate] = useState(["","","","","","","","",""])
    const [winner,setWinner] = useState("");
    const [text,setText] = useState("");

    const convToIndex = (x,y) => {
        return y*3+x;
    }

    useEffect(() => {
        handleGameLogic();
    },[gameState]);

    useEffect(() => {
        setText(winner + " WINS!");
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
            <div class="flexbox justify-centre w-full md:w-[768px] bg-gray-900 w- rounded-md">
                <div class="bg-gray-800 mt-2 mb-4 bottom-4 w-full h-8 text-gray-300 text-center rounded-md">
                    <h1 class="text-lg text-bold">NOUGHTS AND CROSSES</h1>
                </div>
                <div class="flex justify-center">
                    <Board handleClick={handleClick} gameState={gameState}></Board>
                </div>
                <div class={`fixed ${winner !== "" ? "visible" : "invisible"} top-1/2 left-1/2 -translate-x-1/2 text-center -translate-y-1/2 bg-white shadow-lg p-6 rounded-lg w-64`}>
                    <p className="WinMessage">{text}</p>
                    <button class="text-centre mt-4 h-8 w-full text-gray-300 bg-gray-800 rounded-md" onClick={handleReset}> RESET</button>
                </div>
                <button class="text-centre mt-4 h-8 w-full text-gray-300 bg-gray-800 rounded-md" onClick={handleReset}> RESET</button>
            </div>
    );
}

export default TicTacToe;