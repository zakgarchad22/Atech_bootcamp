

import {IHobby} from "./Hobby.interface"

export interface IPerson {
    name: string;
    age: number;
    height: number;
    hobbies: IHobby[];
    weight: number;
    grow(): void;
    loseWeight(weightToLose: number): void;
    addHobby(hobby: IHobby): void;
    getHobbiesNames(): string[];
    
    
      
}