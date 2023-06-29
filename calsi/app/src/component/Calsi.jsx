import React,{useState} from 'react'

function Calsi() {
    const [first , setFirst] = useState(null)
    const [second , setSecond] = useState(null)
    const [ans , setAns] = useState()

    const add = () => {
       
            const an = (first + "+" +second)
            setAns(eval(an))
            setFirst("")
            setSecond("")
        
    }

    const divide =() => {
        const an = (first + "/" +second)
        setAns(eval(an))
        setFirst("")
        setSecond("")

    }
    const multi=() => {
        const an = (first + "*" +second)
        setAns(eval(an))
        setFirst("")
        setSecond("")

    }
    const sub =() => {
        const an = (first + "-" +second)
        setAns(eval(an))
        setFirst("")
        setSecond("")

    }
    const Delete = () => {
        // setFirst("")
        // setSecond("")
        setAns("")
    }
  return (
    <div>
        <h1 style={{color:"green",
        fontSize:"50px"
    }}>{ans}</h1>
        <input placeholder='add first number'
        value={first}
        type='number'
        onChange={(e)=>setFirst(e.target.value)}
        style={{padding:"5px",
        backgroundColor:"skyblue",
        margin:"10px"

    }}
        />
        <input placeholder='add second number'
        type='number'
        value={second}
        onChange={(e) => setSecond(e.target.value)}
        style={{padding:"5px",
        backgroundColor:"skyblue",
        margin:"10px"

    }}
        />
       <div>
        <button onClick={add} style={{padding:"10px",marginRight:"10px",backgroundColor:"black",color:"whitesmoke"}}>+</button>
        <button onClick={sub} style={{padding:"10px",marginRight:"10px",backgroundColor:"black",color:"whitesmoke"}}>-</button>
        <button onClick={multi} style={{padding:"10px",marginRight:"10px",backgroundColor:"black",color:"whitesmoke"}}>*</button>
        <button onClick={divide} style={{padding:"10px",marginRight:"10px",backgroundColor:"black",color:"whitesmoke"}}>/</button>

        <button onClick={Delete} style={{padding:"10px",marginRight:"10px",backgroundColor:"black",color:"whitesmoke"}}>delete</button>
        </div>
    </div>
  )
}

export default Calsi