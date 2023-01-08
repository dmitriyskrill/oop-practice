class User {

}

interface IUserRepo {
  getUsers: () => User[]
}

class UserMongoDBRepo implements IUserRepo {
  getUsers (): User[] {
    console.log('Пользователи от монго')
    return [{ age: 15, username: 'Пользователь из Mongo' }]
  }
}

class UserPostgresqlRepo implements IUserRepo {
  getUsers (): User[] {
    console.log('Пользователи из postgresql')
    return [{ age: 15, username: 'Пользователь из postgresql' }]
  }
}

class UserService {
  userRepo: IUserRepo

  constructor (userRepo: IUserRepo) {
    this.userRepo = userRepo
  }

  filterUserByAge (age: number) {
    const users = this.userRepo.getUsers()
    console.log(users)
  }
}

const userService1 = new UserService(new UserPostgresqlRepo())
userService1.filterUserByAge(15)
const userService2 = new UserService(new UserMongoDBRepo())
userService2.filterUserByAge(15)
