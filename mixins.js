
User.prototype = {
	name: '',
	addressstring: '',
	city: '',
	state: '',
	zipcode: '',
	avatar: '',
	getProfileUpdate: function(n, a, c, s, z, p) {
		this.name = n;
		this.addressstring = a;
		this.city = c;
		this.state = s;
		this.zipcode = z;
		this.avatar = p;
	}
}
