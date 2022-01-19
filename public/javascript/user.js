class User {
  constructor(firstName, lastName, address, card_number, education, email, password, age, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.card_number = card_number;
    this.education = education;
    this.email = email;
    this.password = password;
    this.age = age;
    this.country = country;
  }
}

module.exports = User;
