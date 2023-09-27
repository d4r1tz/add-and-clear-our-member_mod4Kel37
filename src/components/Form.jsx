import React, {useState} from 'react'

export default function Form() {

    const [member,setMember] = useState([]);
    const [element, setElement] = useState("");
    const [count, setCount] = useState(0);

    const addMember = (event) => {
        event.preventDefault();
        setMember(member.concat(element));
        setCount(count+1);
        setElement("");
    }

    const changeHandler = (event) => {
        setElement(event.target.value);
    }

    const clearArray = () => {
        setMember([]);
        setCount(0);
    }

    return (
        <div>
            <form onSubmit={addMember}>
                <input placeholder='member' id='member' name='member' type='text' value={element} onChange={changeHandler} onBlur={changeHandler}/>
                <button type="submit">Add member</button>
            </form>
            <p>{member.map((elemen,index) => {return(<p key={index}>{elemen}</p>)})}</p>
            <button onClick={clearArray}>CLEAR</button>
        </div>
    )
}