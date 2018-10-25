export default class innerBoxView {
    /**
     *
     * @param {string} mount
     * @param {optionType} option
     */
    static create(mount, option) {
        let innerBox = document.createElement("div");
        innerBox.id = "innerBox";
        let style = innerBox.style;
        this.setStyle(style, option.innerBoxStyle);
        let elm = document.querySelector(`#${mount}`);
        if (elm !== null) {
            elm.appendChild(innerBox);
        } else {
            console.error(`There is not element. Selector #${mount}. check plz.`)
        }
    }

    /**
     * オプションに含まれているスタイルを適用します
     * @param {CSSStyleDeclaration} innerBox
     * @param {innerBoxStyleType} userStyle
     */
    static setStyle(innerBox, userStyle) {
        innerBox.height = userStyle.height;
        innerBox.width = userStyle.width;
        innerBox.marginTop = userStyle.marginTop;
        innerBox.fontSize = userStyle.fontSize;
        innerBox.letterSpacing = userStyle.letterSpacing;
        innerBox.marginLeft = "auto";
        innerBox.marginRight = "auto";
        innerBox.padding = `${userStyle.paddingVertical} ${userStyle.paddingHorizontal}`;
        innerBox.border = "thin solid black";
    }
}