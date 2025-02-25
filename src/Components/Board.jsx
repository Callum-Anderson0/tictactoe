import React from "react";
import Tile from "./Tile";


function Board( {handleClick, gameState} ){

    return(
        <div className="bg-gray-800 grid w-full sm:w-[600px] grid-cols-3 gap-4 shadow-lg rounded-md p-8">                    
                    {gameState.map((value,index) =>(
                        <Tile id={index} onClick={handleClick} value={value}></Tile>
                        ))}
        </div>
    )
}

export default Board;