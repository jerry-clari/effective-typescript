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

function getPointFromAPI(): Point2D | Point3D {
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

export default function Chapter1() {
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

  vectorLength(getPointFromAPI());
}
