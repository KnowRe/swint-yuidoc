'use strict';

var path = require('path'),
	yuidoc = require('yuidocjs'),
	swintHelper = require('swint-helper'),
	fs = require('fs'),
	defaultize = swintHelper.defaultize;

module.exports = function(options, callback) {
	defaultize({
		name: 'Project',
		inDir: path.dirname(require.main.filename),
		outDir: path.join(path.dirname(require.main.filename), 'docs'),
		pkgJSON: path.join(path.dirname(require.main.filename), 'package.json'),
		extension: 'js'
	}, options);

	return proceed(options, callback);
};

var proceed = function(options, callback) {
	if(callback === undefined) {
		var msg = 'swint-yuidoc function needs callback';
		print(4, msg);
		throw new Error(msg);
	}

	if(!fs.existsSync(options.inDir)) {
		callback('swint-yuidoc: inDir doesn\'t exist', false);
		return;
	}

	if(!fs.existsSync(options.outDir)) {
		fs.mkdirSync(options.outDir);
	}

	var pkg = JSON.parse(fs.readFileSync(options.pkgJSON));

	options = {
		paths: [options.inDir],
		outdir: options.outDir,
		project: {
			version: pkg.version
		},
		extension: '.' + options.extension,
		quiet: true
	};

	var yd = (new yuidoc.YUIDoc(options)),
		json = yd.run(),
		builder = new yuidoc.DocBuilder(defaultize(options, json), json);

	builder.compile(function() {
		if(callback !== undefined) {
			callback(null, true);
		}
	});
};
