import * as React from "react"; 
	1
const Library = () => { 
/** "selected" here is state variable which will hold the 
* value of currently selected dropdown. 
*/
const [selected, setSelected] = React.useState("");
const [selected1, setSelected1] = React.useState("");

/** Function that will set different values to state variable 
* based on which dropdown is selected 
*/
const changeSelectOptionHandler = (event) => { 
	setSelected(event.target.value);
 }; 

 const changeSelectOptionHandler1 = (e) => {
    setSelected1(e.target.value);
 };

/** Different arrays for different dropdowns */
const Newspaper = [ 
	"The Hindu", 
	"Times Of India", 
	"Dainik Jagaran", 
]; 
const Magazines = ["Yojana", "Kurushetra"]; 
const Recommended = ["Polity", "History", "Geography", "Economics"]; 

/** Type variable to store different array for different dropdown */
let type = null; 

/** This will be used to create set of options that user will see */
let options = null; 

/** Setting Type variable according to dropdown */
if (selected === "Newspaper") { 
	type = Newspaper;   
} else if (selected === "Magazines") { 
	type = Magazines; 
} else if (selected === "Recommended Books") { 
	type = Recommended; 
} 

/** If "Type" is null or undefined then options will be null, 
* otherwise it will create a options iterable based on our array 
*/
if (type) { 
	options = type.map((el) => <option key={el}>{el}</option>); 
} 
return ( 
	<div 
	style={{ 
		padding: "20px", 
		margin: "20px", 
	}} 
	> 
	<form> 
        <div class="grid grid-cols-4 gap-3" >
		<div> 
		{/** Bind changeSelectOptionHandler to onChange method of select. 
		* This method will trigger every time different 
		* option is selected. 
		*/} 
		<select value={selected} onChange={changeSelectOptionHandler}> 
			<option>Choose Your Option</option> 
			<option>Newspaper</option> 
			<option>Magazines</option> 
			<option>Recommended Books</option>
             
		</select>
		</div>
        <div>
		<select value={selected1} onChange={changeSelectOptionHandler1}> 
            <option>Choose your option </option>
			{ 
			/** This is where we have used our options variable */
			options 
			} 
		</select> 
		</div>
		</div>
	</form>
	<div>
	{selected === "Recommended Books" && selected1 === "Polity" &&
		<>
		<iframe src="https://drive.google.com/file/d/1oBkTA_PnudzQ6vvROzFktER7kUAImXEn/preview" width="1300" height="600" allow="autoplay"></iframe>
		</>
	}
</div>
	</div> 
	); 
}; 

export default Library; 
