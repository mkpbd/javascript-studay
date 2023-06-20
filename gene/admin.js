
import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');

export let admin = {
  name: "John",
};
export function sayHi() {
  alert(`Ready to serve, ${admin.name}!`);
}
