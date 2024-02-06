

import {IHobby} from "./Hobby.interface"
export class Person {
    name: string;
    age: number;
    height: number;
    hobbies: IHobby[];
    weight: number;


    constructor(name ,  height , age ,weight , hobbies) {
        this.name = name
        this.height = height
        this.age = age 
        this.weight = weight
        this.hobbies =  hobbies


      }
      grow(): void {
        this.age++;
      }
      loseWeight(weight : number) {
         return this.weight-weight;
       }
       addHobby(hobby : IHobby) {
         return this.hobbies.push(hobby)

       }
       getHobbiesNames() {
         return this.hobbies.forEach(e => {
             e.hobbyName
         });

       }
}