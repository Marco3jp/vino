import storyScriptType from "./storyScriptType.js";
import innerBoxStyleType from "./innerBoxStyleType.js";
import overhaulType from "./overhaulType.js";
import displayTextSettingType from "./displayTextSettingType.js";

export default class optionType {
    constructor() {
        /**
         * storyScriptをセクションごとに保持する配列
         * @type {storyScriptType[]}
         */
        this.storyScript = [new storyScriptType()];

        /**
         * innerBoxのスタイルを設定するためのオブジェクト
         *     肥大化した場合外部ライブラリの導入も検討中
         * @type {innerBoxStyleType}
         */
        this.innerBoxStyle = new innerBoxStyleType();

        /**
         * テキストの表示周りを設定するオブジェクト
         * @type {displayTextSettingType}
         */
        this.displayTextSetting = new displayTextSettingType();

        /**
         * 挙動を大きく変えるオプションを格納するオブジェクト
         * @type {overhaulType}
         */
        this.overhaul = new overhaulType();
    }
}