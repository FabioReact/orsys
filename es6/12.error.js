class UserError extends Error {
	constructor(name) {
		super();
		this.message = "Some User error";
		this.name = name;
	}
}

throw new UserError("UserError");
