export class RandomNumbers {

  // randomNumberInRange = new RandomNumbers();

  randomNumberInRange(start: number, before: number) {
    return start + Math.floor(Math.random() * (before - start));
  }
}
