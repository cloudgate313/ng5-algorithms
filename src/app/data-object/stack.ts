export class Stack<T> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.pop();
  }
  size(): number {
    return this.data.length;
  }
}

