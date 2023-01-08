class Person {

  private _firstname
  private _surname
  private _age

  constructor (firstname: string, surname: string, age: number) {
    this._age = age
    this._surname = surname
    this._firstname = firstname
  }

  get age () {
    return this._age
  }

  get surname () {
    return this._surname
  }

  get firstname () {
    return this._firstname
  }

  public fullname (): string {
    return this.firstname + ' ' + this.surname
  }

  public greeting () {
    console.log(`Привет, я человек, и меня зовут ${this.fullname()}`)
  }
}

class Employee extends Person {
  private company

  constructor (
    firstname: string,
    surname: string,
    age: number,
    company: string,
  ) {
    super(firstname, surname, age)
    this.company = company
  }

  greeting () {
    console.log(`Привет, я работник, и меня зовут ${this.fullname()}`)
  }
}

class Developer extends Employee {
  private level
  private language

  constructor (
    firstname: string,
    surname: string,
    age: number,
    company: string,
    level: string,
    language: string,
  ) {
    super(firstname, surname, age, company)
    this.level = level
    this.language = language
  }

  greeting () {
    console.log(`Привет, я разработчик, и меня зовут ${this.fullname()}`)
  }
}

const person = new Person('Иван', 'Иванов', 66)
const employee = new Employee('Петр', 'Петров', 56, 'Крутая компания')
const developer = new Developer('Семен', 'Семенов', 76, 'Еще одна компания',
  'Средняк', 'Питончик')

// person.greeting()
// employee.greeting()
// developer.greeting()

const personList: Person[] = [person, employee, developer]

function massGreeting (persons: Person[]) {
  persons.forEach(person => person.greeting())
}

massGreeting(personList)
