import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base'

import { FilesCollection } from 'meteor/ostrio:files';

Meteor.startup(() => {
    Accounts.onLogin(function () {
        console.log("Login of user: "+Accounts.userId());
    })


});
