import React from "react"; 

function Tile({id,onClick, value}){

    return (
    <div onClick={()=> onClick(id)}class="flex items-center justify-center bg-gray-200 w-[150px] h-[150px]  rounded-md"><p class="text-4xl text-center">{value}</p></div>

    );
}

export default Tile;