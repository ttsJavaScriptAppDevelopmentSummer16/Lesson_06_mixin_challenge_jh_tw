
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

getProfileUpdate: function(n, a, c, s, z, p) {
    this.name = n;
    this.address = a;
    this.city = c;
    this.state = s;
    this.zipcode = z;
    this.avatar = p;
}

// Write a function updateProfile() that takes a single object of keys:values
// and overwrites those keys on the profile object

updateProfile(){
    
}
