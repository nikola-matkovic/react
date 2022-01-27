import User, {printName as printUserName, printAge  as PrintUserAge} from "./user.js";

const user = new User("Nikola", 19);
console.log(user);
printUserName(user);