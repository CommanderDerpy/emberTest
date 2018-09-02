export default function() {
  this.namespace = '/api';

  this.get('/players', function() {
    return {
      data: [{
        type: 'player',
        id: 1,
        attributes: {
          identifier: 1,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
        }
      },{
        type: 'player',
        id: 2,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
        }
      },{
        type: 'player',
        id: 3,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 4,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 5,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 6,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 7,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 8,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 9,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 10,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 11,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 12,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 13,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 14,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
          }
        },{
        type: 'player',
        id: 15,
        attributes: {
          identifier: 2,
          name: 'Max',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff'
        }
      }]
    };
  });
}
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
