/**
 * Utility method to move an array element from one position to another
 * @param {number} from index
 * @param {number} to index
 * @returns {array} returns the update array
 *
 * @example
 *
 * var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
 * arr.move(4, 1);
 * // => ["a", "e", "b", "c", "d", "f", "g", "h"]
 *
 * var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
 * arr.move(0, 7).join(', ');
 * // => "b, c, d, e, f, g, h, a"
 *
 */

declare global {
  interface Array<T> {
    move(fromIndex: number, toIndex: number): T[];
  }
}

function move(this: any[], fromIndex: number, toIndex: number) {
  this.splice(toIndex, 0, this.splice(fromIndex, 1)[0]);
  return this;
}

function addMoveToArrayPrototype() {
  Array.prototype.move = move;
}

export { addMoveToArrayPrototype };
