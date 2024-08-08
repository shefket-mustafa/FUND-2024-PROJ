function rotateArray(array) {
  let rotationCount = Number(array.pop());

  for (let i = 0; i < rotationCount; i++) {
    let elementToRotate = array.pop();
    array.unshift(elementToRotate);
  }

  console.log(array.join(" "));
}

rotateArray(['Banana', 'Orange', 'Coconut','Apple', '15']);
