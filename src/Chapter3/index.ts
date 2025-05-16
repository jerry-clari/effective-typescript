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
