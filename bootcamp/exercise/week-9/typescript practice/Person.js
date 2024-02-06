"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, height, age, weight, hobbies) {
        this.name = name;
        this.height = height;
        this.age = age;
        this.weight = weight;
        this.hobbies = hobbies;
    }
    Person.prototype.grow = function () {
        this.age++;
    };
    Person.prototype.loseWeight = function (weight) {
        return this.weight - weight;
    };
    Person.prototype.addHobby = function (hobby) {
        return this.hobbies.push(hobby);
    };
    Person.prototype.getHobbiesNames = function () {
        return this.hobbies.forEach(function (e) {
            e.hobbyName;
        });
    };
    return Person;
}());
exports.Person = Person;
