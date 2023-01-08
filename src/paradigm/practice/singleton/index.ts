class Database {
  url: number
  private static instance: Database

  constructor () {
    this.url = Math.random()
    if (Database.instance) {
      return Database.instance
    }
    Database.instance = this
  }
}

const db1 = new Database()
const db2 = new Database()

console.log(db1.url)
console.log(db2.url)