//getters and setters
class Square{
    constructor(width){
        this.width = width;
        this.height = width;
        this.numOfRequestsForArea = 0;
    }
    get area(){
        this.numOfRequestsForArea++;
        return this.width ** 2;
    }
    set area(area){
        this.width = Math.sqrt(area);
        this.height = Math.sqrt(area);
    }
}
let s1 = new Square(5);
console.log(s1.area);
s1.area = 16;
console.log(s1.width); 

console.log(s1.area);
console.log(s1.area);
console.log(s1.area);
console.log(s1.area);
console.log(s1.numOfRequestsForArea);