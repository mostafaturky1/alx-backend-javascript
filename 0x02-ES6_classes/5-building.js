/**
 * Represents a building with square footage.
 * @constructor
 * @param {number} sqft - The square footage of the building.
 * @throws Will throw an error if the class is extended and the evacuationWarningMessage method is not overridden.
 */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== "function") {
        throw new Error(
          "Class extending Building must override evacuationWarningMessage"
        );
      }
    }
  }

  /**
   * Getter for the square footage of the building.
   * @returns {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }
}
