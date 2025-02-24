import React from "react";
import Tile from "./Tile";


function Board( {handleClick, gameState} ){

    return(
        <div class="bg-gray-700 grid grid-cols-3 gap-4 w-full h-full rounded-md p-8">
                    <Tile id="0" onClick={handleClick} value={gameState[0]}></Tile>
                    <Tile id="1" onClick={handleClick} value={gameState[1]}></Tile>
                    <Tile id="2" onClick={handleClick} value={gameState[2]}></Tile>
                    <Tile id="3" onClick={handleClick} value={gameState[3]}></Tile>
                    <Tile id="4" onClick={handleClick} value={gameState[4]}></Tile>
                    <Tile id="5" onClick={handleClick} value={gameState[5]}></Tile>
                    <Tile id="6" onClick={handleClick} value={gameState[6]}></Tile>
                    <Tile id="7" onClick={handleClick} value={gameState[7]}></Tile>
                    <Tile id="8" onClick={handleClick} value={gameState[8]}></Tile>
        </div>
    )
}

export default Board;