interface Product {
  id: number;
  name: string;
}

const elmo: Product = {
  id: 1,
  name: 'elmo',
}

const furby: Product = {
  id: '3',
  name: 'elmo',
}

logProduct(elmo);
logProduct(furby);

function logProduct(product: Product) {
  const id = product.id;
  const name= product.name;
  console.log(abs(id), name);
}

function abs(number = 0) {
  return Math.abs(number);
}

function doCallback(callback: (num: number) => string) {
  return callback(10);
}

type ProductId = number;

function getResponse(num: ProductId): Promise<ProductId> {
  //if (num > 10) {
  //  return num;
  //}
  return new Promise(resolve => 1);
}

interface Vec3D { x: number; y: number; z: number; };
function getComponent(vec: Vec3D, axis: 'x' | 'y' | 'z') {
  return vec[axis];
}

const x = 'x';
let vec = { x: 0, y: 1, z: 2 };
getComponent(vec, x);

const mixed = ['x', 1];

const obj = {
  x: 1 as const,
};

const arrOfLen = [1, 2, 3] as const;

const deepObj = {
  a: [1, 2, 3],
} as const;

deepObj.a[1] = 10;

const deepObjFrozen = Object.freeze({
  a: Object.freeze([1, 2, 3] as const),
} as const);

deepObjFrozen.a[1] = 10;

type Point = [number, number];
const cap1 = { ny: [1, 2], ca: [-3, 1] };

const cap2: Record<string, Point> = { ny: [1, 2], ca: [-3, 1] };
const cap3 = { ny: [1, 2], ca: [-3, 1] } satisfies Record<string, Point>;

function fetchApi(): unknown {
  return {};
}

const response = fetchApi() satisfies string;

function doSomethingWith1(x: '1'): void {
  console.log(x);
}

// TODO - revisit in item 24
// let one = '1';
// 
// doSomethingWith1(one);

type PointXY = { x: number, y: number };
const pt = {} as PointXY;

console.log(pt.x);

pt.x = 1;
pt.y = 2;

function makeObjPieceByPiece() {
  const result = {} as { a: number, b: number, c: number};

  const response1 = fetchApi() as any;
  result.a = response1.a;

  const response2 = fetchApi() as any;
  const response3 = fetchApi() as any;

  // return result;
  return {
    a: response1.a,
    b: response2.b,
    c: response3.c,
  };
}

declare let hasDates: boolean;
const nameTitle = { name: 'a', title: 'b' };
const p = { ...nameTitle, ...(hasDates && {start: 1, end: 2})};

function narrowSomething(x: Promise<number> | Map<string, string> | null) {
  console.log(x);
  // if (x === null) throw new Error('x is null');
  // if (x === null) return;
  // if (typeof x === 'object') return;
  // if (x === null || x instanceof Promise) return;
  // if (x && x) return; // interestingly narrows out Promise
  if (x === null || 'then' in x) return;
  console.log(x);
}

function narrowSomethingElse(x: string | string[]) {
  if (Array.isArray(x)) return;
  console.log(x);
}


function narrowSomethingElse2(x: Map<string, string> | null) {
  console.log(x);
  if (typeof x === 'object') {
    // x still can be null here
    console.log(x);
  }
}

interface UploadEvent { type: 'upload', filename: string, contents: string };
interface DownloadEvent { type: 'download', filename: string, size: number };
type AppEvent = UploadEvent | DownloadEvent;

function handleAppEvent(appEvent: AppEvent) {
  console.log(appEvent.filename);
  if (appEvent.type === 'upload') {
    console.log(appEvent.contents);
  } else if (appEvent.type === 'download') {
    console.log(appEvent.size);
  }
}

class EventClass {
}

class CreateEventClass extends EventClass {
}

class DeleteEventClass extends EventClass {
}

function handleEventClassInstance(event: EventClass) {
  console.log(event);
  if (event instanceof CreateEventClass) {
    console.log(event);
  }
  if (event instanceof DeleteEventClass) {
    console.log(event);
  }
}

type NumberNowOrLater = number | Promise<number>;

function isPromiseNumber(el: NumberNowOrLater): el is Promise<number> {
// function isPromiseNumber(el: NumberNowOrLater) {
  return !0;
}

const numberStuff: NumberNowOrLater[] = [];

numberStuff.filter(isPromiseNumber).forEach((val) => console.log(val));

function handleNumberNowOrLater(el: NumberNowOrLater) {
  console.log(el);
  if (isPromiseNumber(el)) {
    console.log(el);
  }
}

const simpleMap = new Map<string, string>();

let xx: string | undefined = simpleMap.get('x');
if (xx) {
  console.log(xx);
  setTimeout(() => {
    console.log(xx);
  }, 0);
  xx = undefined;
}

interface Thing {
  name: string;
  desc?: string;
}

function doAThing(thing: Thing) {
  const desc = thing.desc;
  if (desc) {
    console.log(desc.length);
  }
}

const place = { a: '1', b: 5 };
const a = place.a;

type Lang = 'js' | 'ts';
function setLang(lang: Lang) {}

setLang('js');

const lang = 'js';
setLang(lang);

function panTo(where: readonly [number, number]) {}
panTo([10, 20]);

const loc = [10, 20] as const;

panTo(loc);


function callWithRand(fn: (n1: number, n2: number) => void) {
  fn(Math.random(), Math.random());
}

callWithRand((a, b) => {
  console.log(a+b);
});

const fn = (a: number, b: number) => {
  console.log(a+b);
};

callWithRand(fn);


function range(start: number, limit: number): number[] {
  const nums = [];
  if (limit > 0) {
    for (let i = start; i < limit; i += 1) {
      nums.push(i);
    }
  } else {
    nums.push('a');
    console.log(nums);
  }
  logListNumString(nums);
  console.log(nums);
  return nums;
}

async function getNumber(something: boolean): Promise<number> {
  if (something) {
    return getNumber(false);
  }
  return 4;
}

const gnp = getNumber(true);

function logListNumString(list: (number | string)[]) {
}


export default async function Chapter3() {
  doCallback((num) => {
    console.log(abs(num));
    return '';
  });

  getResponse(1).then(val => console.log(val));
  await getResponse(1);
  abs( await getResponse(2));
}

type Seed = string;

interface SeedAPI {
  '/seeds': Seed[],
  '/seed/apple': Seed,
  '/seed/strawberry': Seed,
}

declare function fetchApi2<API, Path extends keyof API>(path: Path): Promise<API[Path]>;

const berry = fetchApi2<SeedAPI, '/seed/strawberry'>('/seed/strawberry');

declare class ApiFetcher<API> {
  fetch<Path extends keyof API>(path: Path): Promise<API[Path]>;
}

declare function fetchApi3<API>(): <Path extends keyof API>(path: Path) => Promise<API[Path]>;

async function some() {
  const fetcher = new ApiFetcher<SeedAPI>();
  const berry = await fetcher.fetch('/seed/strawberry');

  const berry2 = await fetchApi3<SeedAPI>()('/seed/strawberry');
}


