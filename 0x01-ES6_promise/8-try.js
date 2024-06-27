export default function divideFunction(numerator, denominator) {
  const myPromise = new Promise((resolve, reject) => {
    if (denominator === 0) {
      reject(new Error('cannot divide by 0'));
    } else {
      resolve(numerator / denominator);
    }
  });
  try {
    return myPromise;
  } catch (resson) {
    return resson;
  }
}
