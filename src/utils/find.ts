type BaseMap = Readonly<Readonly<string[]>[]>;

function find(baseMap: BaseMap) {
  return (key: number | string): BaseMap =>
    baseMap.filter(
      (a: Readonly<string[]>) => a[0] === key || a[1] === key || a[2] === key,
    );
}

export default find;
