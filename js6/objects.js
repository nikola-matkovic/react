const phone = {
  name : "xiaomi",
  model: "mi 5x",
  ram: "4GB",
  rom: "32GB",
  fullName: function(){return this.name + ' ' + this.model}
}

for(let key in phone){
  console.log(phone[key]);
}

//same as
for (let [key, value] of Object.entries(phone)){
  console.log(`${key}: ${value}`);
}
delete phone.rom;

console.log(phone.fullName());

// getter and setter 
person =  {
  firstName: "Nikola",
  lastName: "Matković",
  age: 19,
  language: "sr",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set lang(l) {
    this.language = l;
  }
};

console.log(person.fullName);
person.lang = "en";
console.log(person.language);

Object.defineProperty(person, "older", {
  set : function(year) {
    this.age += year;  
  } 
})

person.older = 1;

console.log(person.age);