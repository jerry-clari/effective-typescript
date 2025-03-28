type Point2D = {
  x: number,
  y: number,
}

type Point3D = {
  x: number,
  y: number,
  z: number,
}

function vectorLength(point: Point2D | Point3D): number {
  console.log('calculating:', point);

  let squaredSum = 0;
  Object.values(point).forEach((val) => {
    squaredSum += val * val;
  });

  const result = Math.sqrt(squaredSum);
  console.log('result:', result);
  return Math.sqrt(result);
}


function assertHasPropertyNum<T extends object, K extends keyof T>(obj: T, prop: K): asserts obj is T & Record<K, number> {
    if (!(prop in obj) || typeof obj[prop] !== 'number') {
        throw new Error(`Object does not have property ${String(prop)}`);
    }
}

async function getPointFromAPI(): Promise<Point2D | Point3D> {
  const result = await fetch('');
  const json = await result.json();

  if (json && typeof json === 'object') {
    const jsonObj: { [key: string]: any } = json ;
    assertHasPropertyNum(jsonObj, 'x');
    assertHasPropertyNum(jsonObj, 'y');
    assertHasPropertyNum(jsonObj, 'z');
    return jsonObj;
  }

  const point = {
    x: 2,
    y: 2,
  } as Point2D | Point3D;
  return point;
}

class Point {
  x = 1;
  y = 2;
}

export default async function Chapter1() {
  vectorLength({
    x: 1,
    y: 1,
  });

  vectorLength({
    x: 1,
    y: 1,
    z: 1,
  });

  vectorLength(new Point());

  try {
    vectorLength(await getPointFromAPI());
  } catch (e) {
    console.error(e);
    // The result is bad
    // Do error handling
  }
}
