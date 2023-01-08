class Engine {
  drive () {
    console.log('Двигатель работает')
  }
}

class Wheel {
  drive () {
    console.log('Колесо едет')
  }
}

class Freshener {
  name: string

  constructor (name: string) {
    this.name = name
  }
}

class Flat {
  freshener: Freshener

  constructor (freshener: Freshener) {
    //Агрегация
    this.freshener = freshener
  }
}

class Car {
  engine: Engine
  wheels: Wheel[] = []
  freshener: Freshener

  constructor (freshener: Freshener) {
    //Агрегация
    this.freshener = freshener
    //Композиция
    this.engine = new Engine()
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
  }

  //Делегирование
  drive () {
    this.engine.drive()
    this.wheels.forEach(wheel => wheel.drive())
  }
}

const freshener = new Freshener('')
const car = new Car(freshener)
car.drive()
const flat = new Flat(freshener)