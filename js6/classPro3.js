//static
class Square{
    constructor(width){
        this.width = width;
        this.height = width;
    }
    static equals(a, b){
        return a.width ** 2 == b.width ** 2;
    }
    static isValidDimensions (width, height){
        return width === height;
    }
}
let s1 = new Square(8);
let s2 = new Square(6);

console.log(s1);
console.log(Square.equals(s1, s2));
console.log(Square.isValidDimensions(6, 6));