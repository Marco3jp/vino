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
        style.height = `${option.innerboxHeight}px`;
        style.width = `${option.innerboxWidth}px`;
        style.marginTop = `${option.paddingTop}px`;
        style.marginLeft = "auto";
        style.marginRight = "auto";
        style.border = "thin solid black";

        let elm = document.querySelector(`#${mount}`);
        if (elm !== null) {
            elm.appendChild(innerBox);
        } else {
            console.error(`There is not element. Selector #${mount}. check plz.`)
        }
    }
}