import U from './Module';
import { name } from './Module';
import { age } from './Module';

let user = new U('preetam', 34);

console.log(user);

console.log(name.apply(user));
