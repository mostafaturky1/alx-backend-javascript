/**
 * Represents a class room.
 */
export default class ClassRoom {
  /**
   * Creates a new @see {@link ClassRoom}.
   * @param {Number} maxStudentsSize - The maximum number of
   * students in the class.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
  /**
   * Initializes and returns an array of ClassRoom objects.
   * Each ClassRoom object has a maximum capacity of 10 students.
   * @returns {ClassRoom[]} An array of ClassRoom objects.
   */
  initializeRooms() {
    const rooms = [];
    for (let i = 1; i <= 5; i++) {
      rooms.push(new ClassRoom(10));
    }
    return rooms;
  }
}
