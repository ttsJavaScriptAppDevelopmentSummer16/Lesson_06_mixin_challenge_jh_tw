
User.prototype = {
	name: '',
	address: '',
	city: '',
	state: '',
	zipcode: '',
	avatar: '',
	getProfileUpdate: function(n, a, c, s, z, p) {
		this.name = n;
		this.address = a;
		this.city = c;
		this.state = s;
		this.zipcode = z;
		this.avatar = p;
	}
}
