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

export default async function Chapter3() {
  let x: number = 12;
  let y = 12;

  doCallback((num) => {
    console.log(abs(num));
    return '';
  });

  getResponse(1).then(val => console.log(val));
  await getResponse(1);
  abs( await getResponse(2));
}
