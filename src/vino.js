import optionType from "./model/optionType.js"
import privateType from "./model/private.js"
import initController from "./controller/initController.js"

export default class vino {
    /**
     *
     * @param {string} mount
     * @param {storyScriptType} storyScript
     * @param {Object} userOptions
     */
    constructor(mount, storyScript, userOptions) {
        let self = this;
        /**
         * 様々な設定類を格納するオブジェクト
         * @type {optionType}
         */
        this.options = new optionType();
        /**
         * 外から変更してほしくない値を格納するオブジェクト
         * @type {privateType}
         * @private {privateType}
         */
        this._private = new privateType(storyScript);
        /**
         * プライベートな状態を外から見るためのObjectです
         * @type {{character: (function(): number), sentence: (function(): number), section: (function(): number)}}
         */
        this.state = {
            position: {
                /**
                 * 何文字目にいるかを受け取るゲッター
                 * @returns {number}
                 */
                get character() {
                    return self._private.position.character;
                },
                /**
                 * 何文目にいるかを受け取るゲッター
                 * @returns {number}
                 */
                get sentence() {
                    return self._private.position.sentence;
                },
                /**
                 * 何セクション目にいるか受け取るゲッター
                 * @returns {number}
                 */
                get section() {
                    return self._private.position.section;
                }
            }
        };

        // initModule内に移動するか検討中
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

    addStoryScript(storyScript) {
        this._private.storyScript.push(storyScript);
    };
}