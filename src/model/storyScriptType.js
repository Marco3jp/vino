import storyScriptInitType from "./storyScriptInitType.js"

export default class storyScriptType {
    constructor() {
        this.init = new storyScriptInitType();
        this.script = [];
        this.args = {};
    }
}