export default class Sound {
    constructor(path) {
        this.src = path;
    }

    render() {
        return `<audio controls><source src=${this.src} type="audio/ogg"></audio>`
    }
}