import { from } from 'rxjs';
import { filter, map, reduce, mergeMap } from 'rxjs/operators';

let persons = [
    {
        id: 1,
        name: "Jan Kowalski"
    }, {
        id: 2,
        name: "John Doe"
    }, {
        id: 3,
        name: "Jarek Kaczka"
    }
]

let ages = [
    {
        person: 1,
        age: 18
    }, 
    {
        person: 2,
        age: 24
    }, 
    {
        person: 3,
        age: 666
    }
]

let locations = [
    {
        person: 1,
        country: "Poland"
    }, {
        person: 3,
        country: "Poland"
    }, {
        person: 1,
        country: "USA"
    }
]

const personsObs = from(persons);
const locationsObs = from(locations);
const agesObs = from(ages);

const sum = personsObs.pipe(
    mergeMap(person =>
      locationsObs.pipe(
        filter(location => location.person === person.id && location.country === 'Poland'),
        mergeMap(() =>
            agesObs.pipe(
              filter(age => age.person === person.id),
              map(age => age.age),
            )
          )
      )
    ),
    reduce((acc, age) => {
        acc.sum += age;
        acc.count += 1;
        return acc;
      }, { sum: 0, count: 0 }),
  ).subscribe(result => console.log(result.sum / result.count));
