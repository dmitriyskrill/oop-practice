/*
 Модификаторы доступа:
  Префикс readonly - предотвращает присваивание полю вне конструктора
  Префикс public -
  Префикс protected - из вне класса видны только в классах-наследниках
  Префикс private - нельзя обратиться извне при создании объекта данного класса
  Префикс static - можно обращаться без создания экземпляра класса

  "_" перед названием переменной - соглашение об именовании приватной переменной
 Accessors - методы доступа
*/

class Person {
  // [s: string]: boolean | ((s: string) => boolean)
  height: number // эквивалентно public publicPropFirst
  public birthdate
  private _citizenship: string | undefined
  protected name //поля и методы, которые
  readonly weight

  constructor (
    height: number,
    birthdate: string,
    citizenship: string,
    name: string,
    weight: number,
  ) {
    this.height = height
    this.birthdate = birthdate
    this.citizenship = citizenship
    this.name = name
    this.weight = weight
  }

  get citizenship () {
    return this._citizenship
  }

  set citizenship (value) {
    this._citizenship = value
  }

  public print (): void {
    console.log(`Имя: ${this.name}  Дата рождения: ${this.birthdate}`)
  }

  protected printPerson (): void {
    console.log(`Имя: ${this.name}  Гражданство: ${this._citizenship}`)
  }

  private setYear (age: number): number {
    return new Date().getFullYear() - age
  }

  static staticMethod (): any {
    return 'staticMethod'
  }
}

let tom = new Person(
  25, '23.23.25', 'РФ', 'Том', 142,
)
tom.print()
console.log('tom citizenship', tom.citizenship)
// console.log(tom._name); // нельзя обратиться, так как _name - private
// tom.setYear(45); // нельзя обратиться, так как функция - private

class Employee extends Person {
  protected company: string

  constructor (
    height: number,
    birthdate: string,
    citizenship: string,
    name: string,
    weight: number,
    company: string,
  ) {
    super(height, birthdate, citizenship, name, weight)
    this.company = company
  }

  public printEmployee (): void {
    //console.log("Citizenship: " + this._citizenship);    // поле _citizenship недоступно, так как private
    // setYear(25);                         // метод setYear недоступен, так как private
    this.printPerson()                     // метод printPerson доступен, так как protected
    console.log(`Компания: ${this.company}`)
  }
}

let sam = new Employee(25, '23.23.25', 'ОР', 'Sam', 142, 'Microsoft')
sam.printEmployee()
console.log('sam citizenship', sam.citizenship)
//sam.printPerson() // Не доступен в объектах дочернего класса (вне дочернего класса),