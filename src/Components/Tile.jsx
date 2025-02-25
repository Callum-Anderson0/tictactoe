import React from "react"; 

function Tile({id,onClick, value}){

    return (
    <div onClick={()=> onClick(id)}class="flex items-center justify-center bg-gray-700 w-full aspect-square  rounded-md shadow-lg">
        <p class="text-4xl text-center text-gray-300">{value}</p>
    </div>

    );
}

export default Tile