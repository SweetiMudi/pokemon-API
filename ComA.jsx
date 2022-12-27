import React, { useEffect, useState }  from 'react';
import axios from 'axios';

const ComA = () => {
    const[num,setNum] =useState();
    const[name,setName] =useState();
    const[moves,setMoves] =useState();


    useEffect(()=>{
       async function getData()  //asynchronous function 
       {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`) //res means result ; await means it will wait when data is fetch ; ` backtick is used so that value 1 is fetch https://pokeapi.co/api/v2/pokemon/1.
    console.log(res.data.name); 
    setName(res.data.name);
    setMoves(res.data.moves.length);  //moves is an array so we use.length  
    }
       getData()
    });

    return(
     <>
    <div className='body'>
        <h1>YOU CHOOSE <span style={{color:"red"}}>{num} </span> VALUE</h1>
        <h1>CHARACTER NAME IS <span style={{color:"red"}}>{name} </span></h1>
        <h1>{name} HAVE <span style={{color:"red"}}>{moves} </span> MOVES</h1>

        <select class="dropdown" value={num} onChange={(event)=> {
            setNum(event.target.value)

        }}> 
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

</div>

     </>
    )
    };
export default ComA;
