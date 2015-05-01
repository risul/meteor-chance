Package.describe({
    name: 'risul:chance',
    summary: 'Meteor package for Chance - Random generator helper for JavaScript: http://chancejs.com',
    version: '1.0.2',
    git: 'https://github.com/risul/meteor-chance'
});

Npm.depends({
    chance: '0.7.4'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.export('Chance');
    api.addFiles('.npm/package/node_modules/chance/chance.js', ['client']);
    api.addFiles('lib/chance.js', 'server');
});