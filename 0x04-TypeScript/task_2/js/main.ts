export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home'
  }
  getCoffeeBreak() {
    return 'Getting a coffee break'
  }
  workDirectorTasks() {
    return 'Getting to director tasks'
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): (Teacher | Director) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher;
  }
  return new Director;
}

export function isDirector(employee: Teacher | Director) {
  if (employee instanceof Teacher) {
    return false;
  }
  return true;
}

export function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)){
    return new Director().workDirectorTasks();
  }
  return new Teacher().workTeacherTasks();
}

export type Subjects = ('Math' | 'History');

export function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math'
  }
  return 'Teaching History'
}

console.log(teachClass('Math'))
console.log(teachClass('History'))

