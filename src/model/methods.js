class methods {
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