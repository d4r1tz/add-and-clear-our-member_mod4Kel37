import React, {useState} from 'react'

export default function Form() {

    const [member,setMember] = useState([]);
    const [element, setElement] = useState("");
    const [count, setCount] = useState(0);

    const addMember = (event) => {
        event.preventDefault();
        if (element.trim() != '') {
            setCount(count+1);
            setMember(member.concat({"ID":count+1, "name_member":element}));
            setElement("");
        }
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
            <>{member.map((m) => {return <p>{m.ID}. {m.name_member}</p>})}</>
            <button onClick={clearArray}>CLEAR</button>
        </div>
    )
}