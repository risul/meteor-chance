if (Meteor.isClient) {
    Chance = window.Chance;
} else {
    Chance = Npm.require('chance');
}