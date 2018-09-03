import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByName(param) {
			if (param != '') {
				return this.store.query('player', { name: param });
			} else {
				return this.store.findAll('player');
			}
		}
	}
});
