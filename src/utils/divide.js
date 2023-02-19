export default function divide(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr.slice(i, i + 2));
  }

  return newArr;
}
