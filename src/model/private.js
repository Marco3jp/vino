import positionType from "./positionType.js"
import flagType from "./flagType.js"

export default class privateType {
    constructor() {
        this.position = new positionType();
        this.flag = new flagType();
    }
}