import optionType from "./model/optionType.js"
import privateType from "./model/private.js"
import initController from "./controller/initController.js"

export default class vino {
    /**
     *
     * @param {string} mount
     * @param {Object} userOptions
     */
    constructor(mount, userOptions) {
        let self = this;
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
            /**
             *
             * @returns {number}
             */
            get character() {
                return self._private.position.character;
            },
            /**
             *
             * @returns {number}
             */
            get sentence() {
                return self._private.position.sentence;
            },
            /**
             *
             * @returns {number}
             */
            get section() {
                return self._private.position.section;
            }
        };

        for (let option in userOptions) {
            if (this.options[option] !== undefined) {
                this.options[option] = userOptions[option];
            } else {
                console.warn(`unknown option. ${option}:${userOptions[option]}`);
            }
        }

        console.log("%cHello World, %cVino.js", "font-size:20px", "font-size:20px;color:#2196F3;background-color:#15FAE5;");

        initController.run(mount, this.options);
    }
}