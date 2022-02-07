function divide(a: number, b: number): number | false {
  try {
    if (b === 0) throw new Error("b cant be zero");
    return a / b;
  } catch (err) {
    console.error(err);
    return false;
  } finally {
    //unsubscribe from a stream
  }
}

const x = divide(3, 0);
console.log(x);


