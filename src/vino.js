class vino {
    /**
     *
     * @param {string} mount
     * @param {Object} userOptions
     */
    constructor(mount, userOptions) {
        this.options = new optionType();
        this.private = new privateType();
        /**
         * プライベートな状態を外から見るためのObjectです
         * @type {{character: (function(): number), sentence: (function(): number), section: (function(): number)}}
         */
        this.state = {
            character: function () {
                return this.private.position.character;
            },
            sentence: function () {
                return this.private.position.sentence;
            },
            section: function () {
                return this.private.position.section;
            }
        };

        for (option in userOptions) {
            if (this.options[option] !== undefined) {
                this.options[option] = userOptions[option];
            } else {
                console.warn(`unknown option. ${option}:${userOptions[option]}`);
            }
        }

        this.methods = new methods(this.options, this.private);
    }
}