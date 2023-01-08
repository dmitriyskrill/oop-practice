class Calculator {
  add (a: number, b: number): number {
    return a + b
  }

  // add (a: string, b: string): string {
  //   return a + b
  // }
}

const calculator = new Calculator()
console.log('ad-hoc log', calculator.add(5, 5))
// Calculator.add('7', '7')