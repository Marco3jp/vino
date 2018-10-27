import positionType from "./positionType.js"
import flagType from "./flagType.js"
import storyScriptType from "./storyScriptType.js";

export default class privateType {
    /**
     *
     * @param {storyScriptType} storyScript
     */
    constructor(storyScript) {
        /**
         *
         * @type {storyScriptType[]}
         */
        this.storyScript = [storyScript];
        this.position = new positionType();
        this.flag = new flagType();
    }
}