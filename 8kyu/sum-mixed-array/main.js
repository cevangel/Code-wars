function sumMix(x){
  const initialValue = 0;
  const sumWithInitial = x.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    initialValue,
  );
    return sumWithInitial;
  }