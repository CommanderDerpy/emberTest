import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	accountuid: DS.attr(),
	money: DS.attr(),
	damage: DS.attr(),
	hunger: DS.attr(),
	thirst: DS.attr(),
	last_updated: DS.attr()
});
