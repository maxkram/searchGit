class Github {
	constructor(){
		this.client_id = "4c22b68748897aed8e6d";
		this.client_secret = "c34f2c4c26161ce992c2c63d754d35b447846cc2";
	}
	async getUser(user){
		const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		return {
			profile
		}
	}
}