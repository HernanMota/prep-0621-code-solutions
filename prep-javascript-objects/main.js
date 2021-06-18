var hernan = {
  firstName: ' Hernan ',
  lastName: ' Mota ',
  hobby: 'Basketball Playing'
};

var fullName = hernan.firstName + ' ' + hernan.lastName;

console.log("The person's name is: ", fullName + '.');

hernan.mota = 'Fun';

console.log("The person's current job is: " + hernan.mota + '.');

hernan.mota = 'bad';

console.log("The person's previous job is:" + hernan.mota + '.');

console.log('The complete person object;', hernan);
