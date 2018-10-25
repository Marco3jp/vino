import innerBox from "../view/innerBoxView.js"

export default class initController {
    /**
     *
     * @param {string} mount
     * @param {optionType} option
     */
    static run(mount, option) {
        // do initOptionsModule? check l52 in vino.js.
        // if there is anything in #mount element, delete contents.
        innerBox.create(mount, option);
        // do initSetEventListenerModule to setEventListener.
    }
}