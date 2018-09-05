export default function() {
  this.namespace = '/api';

  let players = [{
        type: 'player',
        id: 1,
        attributes: {
          name: 'Kardtrick',
          accountuid: 'stuff',
          money: 123,
          damage: 'stuff',
          hunger: 'stuff',
          thirst: 'stuff',
          lastUpdated: "1st June 2018"
        }
    },{
      type: 'player',
      id: 2,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
      }
    },{
      type: 'player',
      id: 3,
      attributes: {
        name: 'Soxun',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 4,
      attributes: {
        name: 'Other',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 5,
      attributes: {
        name: 'Stuff',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 6,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 7,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 8,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 9,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 10,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 11,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 12,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 13,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 14,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
        }
      },{
      type: 'player',
      id: 15,
      attributes: {
        name: 'Max',
        accountuid: 'stuff',
        money: 123,
        damage: 'stuff',
        hunger: 'stuff',
        thirst: 'stuff',
        lastUpdated: "1st June 2018"
      }
    }];

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

  this.get('/players', function(db, request) {
    if(request.queryParams.name !== undefined) {
      let filteredPlayers = players.filter(function(i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredPlayers };
    } else if (request.queryParams.id !== undefined) {
      let filteredPlayers = players.filter(function(i) {
        return i.id == request.queryParams.id;
      });
      return { data: filteredPlayers };
    } else {
      return { data: players };
    }
  });
    this.del('/players/:id', function(db, request) {
    //Emulates deletion of player!
  });
}
