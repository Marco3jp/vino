class vino {
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

        for (option in userOptions) {
            if (this.options[option] !== undefined) {
                this.options[option] = userOptions[option];
            } else {
                console.warn(`unknown option. ${option}:${userOptions[option]}`);
            }
        }

        this.methods = new methods(this.options, this._private);
    }
}