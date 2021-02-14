function find(arr: any) {
  return (key: number | string): any =>
    arr.filter((a: any) => a[0] === key || a[1] === key || a[2] === key);
}

export default find;
