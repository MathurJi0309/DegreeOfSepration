import React from "react";
//import addItemToLS from './localStorage'


class listofrelation {
    constructor(one, two) {
    this.one = one;
    this.two = two;
    }
}

function Create(){
    console.log('hello');




    //make same key for every entry
const KEY = 'relation';
//.........................................................add item to list ..................................................................
function addItemToLS(item){
	//item --> string  

	var personrelation = getItemFromLS();
	//validation if item is present or not
	var isPresent = false;
	personrelation.map((tempItem)=>{
		if(item == tempItem ){
			isPresent = true;
		}
	}); 
	
	if(isPresent){
		return;
	}

	personrelation = [item,...personrelation];

    personrelation.map=(item)=>{
        console.log('dkdsf0',item);
    }

	
	localStorage.setItem(KEY,JSON.stringify(personrelation));
}
//.........................................................get item in list ..................................................................
function getItemFromLS(){
	var personrelation = JSON.parse(localStorage.getItem(KEY));
	if(!personrelation){
		personrelation = [];
	}
	return personrelation;
}









    function handlesubmit(e){
        e.preventDefault();
        console.log('x',e.target.persona.value);
        console.log('x',e.target.personb.value);
     //   const rlation=[]
        const obj =new listofrelation(e.target.persona.value,e.target.personb.value);
       // rlation.push(obj);
        console.log('array',obj);
        addItemToLS(obj);




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