interface Person {
  name: string;
  // height: number;
};
interface Lifespan {
  years: number
};

type PersonSpan = Person & Lifespan;

interface PersonSpan2 extends Person {
  years: number;
}

type PersonOrSpan = Person | Lifespan;

const p: PersonOrSpan = {
  name: 'jerry',
}

const s: PersonOrSpan = {
  years: 1,
}

const ps: PersonSpan = {
  name: 'jerry',
  years: 1,
}

const ps2: PersonSpan2 = ps;

type UpToTriple =  [] | [number] | [number, number] | [number, number, number];

// { 0: number, 1: number, 2: number, length: 3 }
type Triple =  [number, number, number];

// { 0: number, 1: number, length: 2 }
type Double =  [number, number];

const double: Double = [1, 2];
// { 0: 1, 1: 2, length: 2 }
// const double1: Double = [1, 2, 3];
const triple: [number, number, number] = [1, 2, 3];


const alice: Person = { name: 'alice' };
const bob = { name: 'bob' };

function personFunc(aPerson: Person) {
}

const people = ['alice', 'bob', 'jan'].map(name => ({ name }));

const people2 = ['alice', 'bob', 'jan'].map(name => {
  const person: Person = { name };
  return person;
});

// Typed arrow function
const mappingFunc = (name: string | number): Person => ({ name: `${name}` });
type StringList = (string | number)[];
const names: StringList = ['alice', 'bob', 'jan', 1];
const people3 = names.map(mappingFunc);


personFunc(alice);
personFunc(bob);

export default async function Chapter2() {
}
