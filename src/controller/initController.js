import innerBox from "../view/innerBoxView.js"

export default class initController {
    /**
     *
     * @param {string} mount
     * @param {optionType} option
     */
    static run(mount, option) {
        innerBox.create(mount, option);
        //do initModule to setEventListener.
    }
}