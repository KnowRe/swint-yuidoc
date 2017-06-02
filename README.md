# swint-yuidoc

[![Greenkeeper badge](https://badges.greenkeeper.io/Knowre-Dev/swint-yuidoc.svg)](https://greenkeeper.io/)
YUIDoc document generator for Swint batch task manager(swint-task)

**Warning: This is not the final draft yet, so do not use this until its official version is launched**

## Installation
```sh
$ npm install --save swint-yuidoc
```

## Options
* `name` : `String`, default: `'Project'`
* `inDir` : `String`, default: `path.dirname(require.main.filename)`
* `outDir` : `String`, default: `path.join(path.dirname(require.main.filename), 'docs')`
* `pkgJSON` : `String`, default: `path.join(path.dirname(require.main.filename), 'package.json')`
* `extension` : `String`, default: `'js'`

## Usage
```javascript
swintYUIDoc({
	name: 'myProject',
	inDir: path.join(__dirname, 'js'),
	outDir: path.join(__dirname, 'doc'),
	pkgJSON: path.join(__dirname, 'package.json'),
	extension: 'js'
}, function(err, results) {
	// ...
});
```
