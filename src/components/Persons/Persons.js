import React, {useState} from "react";
import Person from "./Person";


const Persons = () => {
  const [persons, setPersons] = useState([
    {
    id: 1,
    name: 'kevin',
    },
    {
    id: 2,
    name:'raul',
    },
  ]);

    return (
    <div className="row">
        {persons.map(person => {
        return (
            <Person key={person.id} name={person.name || 'NN'} />
    )})}
    </div>
  )}

export default Persons;

