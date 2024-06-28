/**
 * Represents a sky high building.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Constructs a new SkyHighBuilding instance.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Getter for the number of floors.
   * @returns {number} The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Returns an evacuation warning message.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return "Evacuate slowly the NUMBER_OF_FLOORS floors";
  }
}
