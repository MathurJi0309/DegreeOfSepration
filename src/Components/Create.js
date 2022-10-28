import React from "react";

function Create(){
    console.log('hello');


    function handlesubmit(e){
        e.preventDefault();
        console.log('x',e.target.persona.value);
        console.log('x',e.target.personb.value);

    }

    function plz(){
        console.log('plz');
    }
    return (
        <div>
        <form onSubmit={handlesubmit}>
        <div>
            <label>person-1</label>
        <input name="persona" onClick={plz}>
        </input>
        </div>
            <h3>
                is a friend of
            </h3>
        <div>
            <label>
                person-2
            </label>
            <input name="personb">
            </input>
        </div>
        <input type="submit" className='btn' value="Add in List">
        </input>
        </form>
        </div>
    )
}

export default Create;