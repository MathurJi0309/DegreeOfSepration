//make same key for every entry
const KEY = 'relation';
//.........................................................add hero from list ..................................................................
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
	
	localStorage.setItem(KEY,JSON.stringify(personrelation));
}
//.........................................................get hero in list ..................................................................
function getItemFromLS(){
	var personrelation = JSON.parse(localStorage.getItem(KEY));
	if(!personrelation){
		personrelation = [];
	}
	return personrelation;
}

//.........................................................fremove hero from list ..................................................................

function removeItemFromLS(item){
	var personrelation = getItemFromLS();
	personrelation = personrelation.filter((tempItem)=>{
		return item != tempItem;
	});
	localStorage.setItem(KEY,JSON.stringify(personrelation));
}





