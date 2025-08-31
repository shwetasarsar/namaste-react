import React, { useState } from 'react'

const TicGame = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick =(i)=>{
        const nextSquare = squares.slice();

        if(calculateWinner(squares) || squares[i]){
            return;
        }

        if(xIsNext){
            nextSquare[i] = 'X'
        }
        else {
            nextSquare[i] = 'O'
        }
        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }

    const calculateWinner =(squares)=>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i=0; i< lines.length; i++){
            const [a,b,c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;

    }

    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = 'Winner is ' + winner;
    }
    else{
        status = 'Next move is' + (xIsNext ? 'X' : 'O');
    }


    return (
        <>
            <div>TicGame</div>
            <div className='p-2 font-bold'>{status}</div>
            <div className='flex'>
                <button className="h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer" onClick={()=>handleClick(0)}>{squares[0]}</button>
                <button className="h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer" onClick={()=>handleClick(1)}>{squares[1]}</button>
                <button className="h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer" onClick={()=>handleClick(2)}>{squares[2]}</button>
            </div>
            <div className='flex'>
                <button className="h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer" onClick={()=>handleClick(3)}>{squares[3]}</button>
                <button className="h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer" onClick={()=>handleClick(4)}>{squares[4]}</button>
                <button className="h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer" onClick={()=>handleClick(5)}>{squares[5]}</button>
            </div>
            <div className='flex'>
                <button className="h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer" onClick={()=>handleClick(6)}>{squares[6]}</button>
                <button className="h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer" onClick={()=>handleClick(7)}>{squares[7]}</button>
                <button className="h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer" onClick={()=>handleClick(8)}>{squares[8]}</button>
            </div>
        </>
    )
}

export default TicGame;