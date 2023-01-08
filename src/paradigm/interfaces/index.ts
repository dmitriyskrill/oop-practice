type TUser = {
  username: string
  age: number
}

interface Repository<T> {
  create: (obj: T) => T
  get: () => T[]
  delete: (obj: T) => T
  update: (obj: T) => T
}

class UserRepo implements Repository<TUser> {
  create (user: TUser): TUser {
    return user
  }

  delete (user: TUser): TUser {
    return user
  }

  get (): TUser[] {
    return []
  }

  update (user: TUser): TUser {
    return user
  }
}