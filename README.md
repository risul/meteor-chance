# Chance for Meteor

Meteor package for [Chance](http://chancejs/) - a minimalist generator of random strings, numbers, etc. to help reduce some monotony particularly while writing automated tests or anywhere else you need anything random.


## Installing

```bash
    meteor add risul:chance
```

## Usage

On client:

```js
    chance.name();
```

On server:

```js
    var chance = new Chance()
    chance.name()
```

## Documentaion

See the official [documentation](http://chancejs.com/#usage) for more info