"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Director = void 0;
exports.createEmployee = createEmployee;
exports.isDirector = isDirector;
exports.executeWork = executeWork;
exports.teachClass = teachClass;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}
function isDirector(employee) {
    if (employee instanceof Teacher) {
        return false;
    }
    return true;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return new Director().workDirectorTasks();
    }
    return new Teacher().workTeacherTasks();
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
