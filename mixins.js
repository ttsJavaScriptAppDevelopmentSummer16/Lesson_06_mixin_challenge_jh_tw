
// Create a user profile object that contains properties for
// name
// address
// city
// state
// zipcode
// avatar

userProfile = {
	name: '',
	address: '',
	city: '',
	state: '',
	zipcode: '',
	avatar: '',
}



// Write a function getProfileUpdate() that hypothetically asks the user to
// update some profile properties and returns information about which properties
// were changed, and to what values.(for now, just hard code the return value)

getProfileUpdate: function(userProfile) {
    this.name = 'Shane';
    this.address = '123 Main';
    this.city = 'Charlotte';
    this.state = 'NC';
    this.zipcode = '28202';
    this.avatar = 'shane.jpg';
}

// Write a function updateProfile() that takes a single object of keys:values
// and overwrites those keys on the profile object

updateProfile(){};


// var updateProfile = Object.assign({}, userProfile, {
//     name: 'Jimmy',
//     addressstring: '300 Hawthorne Lane',
// 		city: 'Charlotte',
// 		state: 'NC',
// 		zipcode: '28204',
// 		avatar: 'http://placehold.it/200x200',
// });





// log the new profile
console.log();
