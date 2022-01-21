class User {
    constructor(firstName, lastName, address, phone, education, email, password, age, country) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.phone = phone
        this.education = education
        this.email = email
        this.password = password
        this.age = age
        this.country = country
    }
}

class UserDAO {
    constructor() {
        this.users = [
            new User('Anakin', 'Skywalker', 'Downing St. 10', '6912345678', 'Master', 'anakin@example.com', 'testing321', 23, 'Greece'),
        ]
    }

    getUser(email) {
        for (let user of this.users) {
            if (email == user.email) {
                return user
            }
        }

        return null
    }

    getAllUsers() {
        return this.users
    }

    addUser(user) {
        const index = users.findIndex((User) => User.email === user.email)
        if (index == -1) {
            this.users.push(user)
            return -1
        } else {
            return 0
        }
    }
}

module.exports = { User, UserDAO }
