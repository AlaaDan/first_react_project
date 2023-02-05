import { useState } from "react";

function EnterName(){
    let myName = '' // Using this varim will become noll state when it runs. thats why we don't use static value in react instead we use state 
    const [name, setName] = useState('');
    console.log(myName)
    return(
        <section>
            <input type="text" placeholder="Enter name"
            onChange={(event)=> { setName(event.target.value); myName = event.target.value }} />
            <p>{ name }</p>
        </section>
    )
}

export default EnterName;