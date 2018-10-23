import optionType from "./model/optionType.js"
import privateType from "./model/private.js"
import methods from "./model/methods.js"

export default class vino {
    /**
     *
     * @param {string} mount
     * @param {Object} userOptions
     */
    constructor(mount, userOptions) {
        /**
         *
         * @type {optionType}
         */
        this.options = new optionType();
        /**
         *
         * @type {privateType}
         * @private {privateType}
         */
        this._private = new privateType();
        /**
         * プライベートな状態を外から見るためのObjectです
         * @type {{character: (function(): number), sentence: (function(): number), section: (function(): number)}}
         */
        this.state = {
            character: function () {
                return this._private.position.character;
            },
            sentence: function () {
                return this._private.position.sentence;
            },
            section: function () {
                return this._private.position.section;
            }
        };

        for (let option in userOptions) {
            if (this.options[option] !== undefined) {
                this.options[option] = userOptions[option];
            } else {
                console.warn(`unknown option. ${option}:${userOptions[option]}`);
            }
        }

        this.methods = new methods(this.options, this._private);
        console.log("%cHello World, %cVino.js", "font-size:20px", "font-size:20px;color:#2196F3;background-color:#15FAE5;");
    }
}