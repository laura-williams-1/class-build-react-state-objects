import { dogsData } from "./data";
import { useState } from "react";
import DogDetails from "./DogDetails";
import { v1 as generateUniqueID } from "uuid";
// v1 is the name it comes in, rename to generate, coming from uuid which we just installed

function App() {
  const [dogs, setDogs] = useState(dogsData);

  function addDog() {
    //console.log("add Rover");
    //create a new dog named rover
    //in the first positin
    const rover = {
      id: generateUniqueID(),
      name: "Rover",
      present: false,
      grade: "100",
      notes: "The coolest new dog",
    };

    setDogs([rover, ...dogs]);
  }
  //Making a copy of your state?

  //setDogs([...dogs, rover]);// arry destrctung -- to be added to the last spot
  //make a copy ofthe dogs arrat using destructing
  //sdd rover, in this case we are adding the dog
  function removeDog(dogID) {
    console.log(22);
    //use the filter method to rmeove any doggs that have a matvhing id
    const filteredDogArray = dogs.filter((dog) => dog.id !== dogID);
    setDogs(filteredDogArray);
  }
  function updateDogAttendance(dogID) {
    const dogArray = [...dogs];
    const index = dogArray.findIndex((dog) => dogID === dog.id);
  }

  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <button onClick={addDog}>Click Me!</button>
      <aside></aside>
      <main></main>
      <ul>
        {dogs.map((dog) => {
          return (
            <li key={dog.id}>
              <span
                onClick={() => updateDogAttendance(dog.id)}
                style={
                  dog.present
                    ? { textDecoration: "none" }
                    : { textDecoration: "line-through" }
                }
              >
                {dog.name}{" "}
              </span>
              <button onClick={() => removeDog(dog.id)}>remove</button>
              <DogDetails dog={dog} />
            </li>
            //learn to build features!
          );
        })}
      </ul>
    </div>
  );
}

export default App;
