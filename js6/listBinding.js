class  ListBinding{
    constructor(element) {
        this.listElement = element;
        this.textList = ["Apple", "Banana", "Orange"];
    }
    static createListItem(text){
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }
    update(){
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild);
        }
        this.textList.forEach((text) =>
            this.listElement.appendChild(ListBinding.createListItem(text))
        );
    }
    add(text){
        this.textList.push(text);
        this.update();
    }
    remove(text){
        try{
            let index = this.textList.indexOf(text);
            if(index >= 0){
                this.textList.splice(this.textList.indexOf(text), 1);
                this.update();
            }
            else
                throw "Nije pronađen element sa tim imenom! "
        }
        catch (err) { console.log(err); }
    }
}