import React, { useState } from 'react'

const TicTacTo = () => {
    const [xisNext, setXIsNext]= useState(true);
    const [squares, setSquares]= useState(Array(9).fill(null))

    const handleClcik =(i)=>{
        const nextSquare = squares.slice();

        if(calculateWinner(squares) || squares[i]){
            return;
        }

        if(xisNext){
            nextSquare[i] = 'X'
        }
        else{
            nextSquare[i] = 'O'
        }
        setSquares(nextSquare);
        setXIsNext(!xisNext);
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
            const [a,b,c] = lines[i]
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
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
        status = 'Next Player is ' + (xisNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className='p-2 font-bold'>{status}</div>
            <div>TicTacTo Game</div>
            <div className='flex'>
                <button onClick={() => handleClcik(0)} className='h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer'>{squares[0]}</button>
                <button onClick={() => handleClcik(1)} className='h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer'>{squares[1]}</button>
                <button onClick={() => handleClcik(2)} className='h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer'>{squares[2]}</button>
            </div>
            <div className='flex'>
                <button onClick={() => handleClcik(3)} className='h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer'>{squares[3]}</button>
                <button onClick={() => handleClcik(4)} className='h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer'>{squares[4]}</button>
                <button onClick={() => handleClcik(5)} className='h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer'>{squares[5]}</button>
            </div>
            <div className='flex'>
                <button onClick={() => handleClcik(6)} className='h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer'>{squares[6]}</button>
                <button onClick={() => handleClcik(7)} className='h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer'>{squares[7]}</button>
                <button onClick={() => handleClcik(8)} className='h-20 w-20 bg-white border-1 border-solid border-black cursor-pointer'>{squares[8]}</button>
            </div>
        </div>
    )
}

export default TicTacTo