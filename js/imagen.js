export default class Image {
    constructor(text, path) {
        this.text = text;
        this.src = path;
    }

    render() {
        return `<img src=${this.src} alt=${this.text}  width="800" height="500"></img>`
    }
}