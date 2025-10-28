class Button{
    constructor(value, color){
        this.value = value;
        this.color = color;
    }
    click(){
        console.log(`Button ${this.value} clicked!`);
    }
    setValue(newValue){
        this.value = newValue;
    }
    getValue(){
        return this.value;
    }
    getColor(){
        return this.color;
    }
    setColor(newColor){
        this.color = newColor;
    }
}

let btn = new Button("Submit", "blue");
btn.click(); // Button Submit clicked!
btn.setValue("Cancel");
console.log(btn.getValue()); // Cancel
btn.setColor("red");
console.log(btn.getColor()); // red
// class expression
const IconButton = class extends Button{
    constructor(value, color, icon){
        super(value, color);
        this.icon = icon;
    }
    click(){
        console.log(`Icon Button ${this.value} with icon ${this.icon} clicked!`);
    }   
    getIcon(){
        return this.icon;
    }
    setIcon(newIcon){
        this.icon = newIcon;
    }
}
let iconBtn = new IconButton("Save", "green", "disk");
iconBtn.click(); // Icon Button Save with icon disk clicked!
console.log(iconBtn.getIcon()); // disk
iconBtn.setIcon("floppy");

