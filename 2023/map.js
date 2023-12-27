/**
 * Map class to handle coordinate-based maps.
 */

class Map {

  #index_separator = '_';

  #get_index_from_coords(coords) {
    return coords.join(this.#index_separator);
  }

	constructor(height, width) {
		this.coordinates = [];
	}

  set(coords, value) {
    this.coordinates[this.#get_index_from_coords(coords)] = value;
  }

  get(coords) {
    return this.coordinates[this.#get_index_from_coords(coords)];
  }

  getCoordinatesStringtoArray(coordinatesSting) {
    return coordinatesSting.split(this.#index_separator);
  }

  getCoordsArray() {
    return this.coordinates;
  }
}

module.exports = Map;