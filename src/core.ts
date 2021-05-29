import observer from "./observer";
class core {
  private width = 80;
  private height = 50;
  private pixelArray: Array<number> = [];
  private fireColorsPalette = [
    { r: 7, g: 7, b: 7 },
    { r: 31, g: 7, b: 7 },
    { r: 47, g: 15, b: 7 },
    { r: 71, g: 15, b: 7 },
    { r: 87, g: 23, b: 7 },
    { r: 103, g: 31, b: 7 },
    { r: 119, g: 31, b: 7 },
    { r: 143, g: 39, b: 7 },
    { r: 159, g: 47, b: 7 },
    { r: 175, g: 63, b: 7 },
    { r: 191, g: 71, b: 7 },
    { r: 199, g: 71, b: 7 },
    { r: 223, g: 79, b: 7 },
    { r: 223, g: 87, b: 7 },
    { r: 223, g: 87, b: 7 },
    { r: 215, g: 95, b: 7 },
    { r: 215, g: 95, b: 7 },
    { r: 215, g: 103, b: 15 },
    { r: 207, g: 111, b: 15 },
    { r: 207, g: 119, b: 15 },
    { r: 207, g: 127, b: 15 },
    { r: 207, g: 135, b: 23 },
    { r: 199, g: 135, b: 23 },
    { r: 199, g: 143, b: 23 },
    { r: 199, g: 151, b: 31 },
    { r: 191, g: 159, b: 31 },
    { r: 191, g: 159, b: 31 },
    { r: 191, g: 167, b: 39 },
    { r: 191, g: 167, b: 39 },
    { r: 191, g: 175, b: 47 },
    { r: 183, g: 175, b: 47 },
    { r: 183, g: 183, b: 47 },
    { r: 183, g: 183, b: 55 },
    { r: 207, g: 207, b: 111 },
    { r: 223, g: 223, b: 159 },
    { r: 239, g: 239, b: 199 },
    { r: 255, g: 255, b: 255 },
  ];

  private createFireStricture() {
    for (let i = 0; i < this.width * this.height; i++) {
      this.pixelArray[i] = 0;
    }
  }
  private render(): void {
    document.querySelector(".grid").innerHTML = "";
    for (const i in this.pixelArray) {
      if (Object.prototype.hasOwnProperty.call(this.pixelArray, i)) {
        const colorIndex = this.pixelArray[i];
        const div = document.createElement("div");
        div.style.width = `${100 / this.width}vw`;
        div.style.height = `${100 / this.width}vw`;
        div.style.backgroundColor = `rgb(${this.fireColorsPalette[colorIndex].r},${this.fireColorsPalette[colorIndex].g},${this.fireColorsPalette[colorIndex].b})`;
        document.querySelector(".grid").appendChild(div);
      }
    }
  }
  calculatePropagation() {
    for (let i = 0; i < this.pixelArray.length; i++) {
      const col = Math.floor(i / this.width);
      const decay = Math.floor(Math.random() * 30);
      this.pixelArray[i] = 36 - col - decay >= 0 ? 36 - col - decay : 0;
    }
  }
  constructor() {
    this.createFireStricture();
    observer.add(() => this.calculatePropagation());
    observer.add(() => this.render());
    new observer();
  }
}

export default core;
