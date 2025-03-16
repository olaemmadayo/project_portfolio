
function List( ) {

const fruits = [{id: 1, name:"orange", calories: 95}, 
                {id: 2, name:"mango", calories: 45}, 
                {id: 3, name:"banana", calories: 105}, 
                {id: 4, name:"melon", calories: 159}, 
                {id: 5, name:"apple", calories: 37}];

// fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL

//fruits.sort((a, b) => b.name.localeCompare(b.name)); //REVERSE ALPHABETICAL
//fruits.sort((a, b)=> a.calories -b.calories); //NUMERIC ORDER

// calFruits = fruits.filter(fruits => fruits.calories < 100);

// const fruitsItem = lowCalFruits.map(fruits => <li key={fruits.id}>{fruits.name}: &nbsp; <b>{fruits.calFruits}</b></li>);

const fruitsItem = fruits.map(fruits => <li key={fruits.id}>{fruits.name}: &nbsp; <b>{fruits.calories}</b></li>); 


return (<ul>{fruitsItem}</ul>); 


}

export default List