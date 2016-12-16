// https://www.freecodecamp.com/challenges/make-a-person

var Person = function(firstAndLast) {
  let firstName = '';
  let lastName = '';

  this.getFirstName = () => {
    return firstName;
  };
  
  this.getLastName = () => {
    return lastName;
  };

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };

  this.setFirstName = (first) => {
    return firstName = first;
  };
  
  this.setLastName = (last) => {
    return lastName = last;
  };
  
  this.setFullName = (firstAndLast) => {
    var names = firstAndLast.split(" ");
    firstName = names[0];
    lastName = names[1];
  };
  
  this.setFullName(firstAndLast);
  
};

var bob = new Person('Bob Ross');

bob.getFullName();
