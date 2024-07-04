export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`
}

export class StudentClas {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return `Currently working`;
  }

  displayName() {
    return this.firstName;
  }
}


