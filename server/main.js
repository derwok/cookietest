import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
    Accounts.onLogin(function () {
        console.log("Login of user: "+Accounts.userId());
    })
});
