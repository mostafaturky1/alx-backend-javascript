"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClas = void 0;
exports.printTeacher = printTeacher;
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
var StudentClas = /** @class */ (function () {
    function StudentClas(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClas.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClas.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClas;
}());
exports.StudentClas = StudentClas;
