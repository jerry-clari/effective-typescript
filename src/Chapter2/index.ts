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

const primitiveString: string = "primitive";
const wrappedString: String = new String("wrapped");

console.log(typeof primitiveString);
console.log(typeof wrappedString);
console.log(wrappedString == "wrapped");
console.log(wrappedString === "wrapped");

const obj = {
  a: 1,
  b: 2,
};

const obj2: Readonly<{ a: number, b: number }> = {
  a: 1,
  b: 2,
};

const objFrozen = Object.freeze(obj);

obj2.a = 3;
objFrozen.a = 3;

console.log("obj2", obj2)
console.log("objFrozen", objFrozen)

function acceptAString(a: string) {
}

// acceptAString(wrappedString);
let a: string | null = null;

const aIsTrue = Boolean(a);

console.log(aIsTrue === true, aIsTrue === false);

if (Boolean(a)) {
  // do something
}

personFunc(alice);
personFunc(bob);

interface Options {
  title: string;
  darkMode?: boolean;
}

const o: Options = {
  title: 'o',
  darkMode: false,
};

// Not what you meant to do
const o2 = {
  title: 'o',
  darkmode: false,
} as Options;


function add(a: number, b: number): number { return a + b }
function sub(a: number, b: number): number { return a - b }
function mul(a: number, b: number): number { return a * b }

type BinaryFunc = (a: number, b: number) => number;
const add2: BinaryFunc = (a, b) => { return a + b }
const sub2: BinaryFunc = (a, b) => { return a - b }
const mul2: BinaryFunc = (a, b) => { return a * b }

type AddFunc = typeof add;

interface IState {
  name: string;
  capital: string;
}

interface IState {
  population: number;
}

const wyoming: IState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 1,
}

const DEF = "something";
const DEF_LIST: readonly number[] = [ 1, 2 ];


function arraySum(arr: readonly number[]) {
  let sum = 0, num;
  while (( num = arr.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}

console.log(arraySum(DEF_LIST));

export default async function Chapter2() {
}

type Inner = {
  x: number;
}

interface Outer {
  inner: Readonly<Inner>,
}

const obj21: Readonly<Outer> = { inner: { x: 0 } };

obj21.inner = { x: 1 };

obj21.inner.x = 1;

interface State {
  userId: string;
  pageTitle: string;
  recentFiles: number[];
  pageContents: string;
}

interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}

// type State2 = TopNavState & { pageContents: string };

interface TopNavState2 {
  userId: State['userId'];
  pageTitle: State['pageTitle'];
  recentFiles: State['recentFiles']
  loggedIn: boolean;
}

type TopNavState3 = Pick<State, 'userId' | 'pageTitle'>;

const tns3: TopNavState3 = {
  userId: '1',
  pageTitle: 'a',
}

// type Pick<T, K> = { [k in K]: T[k] };

interface Options3 {
  width: number;
  height: number;
  color: string;
  label: string;
}

// type OptionsUpdate = {
//   width?: number;
//   height?: number;
//   color?: string;
//   label?: string;
// };

type OptionsUpdate = { [k in keyof Options3]?: Options3[k] } & { width: Options3['width'] }

type OptionsUpdate2 = Partial<Options3>;

function updateOptions(options: Options3, updateOptions: OptionsUpdate2) {
  return {
    ...options,
    ...updateOptions,
  };
}

updateOptions({
    width: 1,
    height: 1,
    color: 'a',
    label: 'b',
  },
  {
    height: 1,
  }
)

type SomeType2 = {
  f1: 1;
  f2: 2;
}

const SOME: SomeType2 = {
  f1: 1,
  f2: 2,
}

type SomeType = typeof SOME;

const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {}, 1);

type RecordEx = Record<'x' | 'y', number> & { id: string };

const recordEx: RecordEx = {
  id: 'a',
  x: 1,
  y: 1,
}
