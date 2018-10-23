import view from "../view/view.js"
import controller from "../controller/controller.js"
import module from "../module/module.js"

export default class methods {
    /**
     *
     * @param {optionType} options
     * @param {privateType} privateData
     */
    constructor(options, privateData) {
        this.view = new view();
        this.controller = new controller(this.view);
        this.module = new module(this.view, this.controller);
    }
}