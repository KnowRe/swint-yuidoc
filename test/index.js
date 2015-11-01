var os = require('os'),
	path = require('path'),
	fs = require('fs'),
	assert = require('assert'),
	swintHelper = require('swint-helper'),
	swintYUIDoc = require('../lib');

global.swintVar.printLevel = 5;

describe('copy-dir', function() {
	it('Error when no callback', function() {
		assert.throws(function() {
			swintYUIDoc({});
		});
	});

	it('Error when inDir doesn\'t exist', function(done) {
		swintYUIDoc({
			inDir: '/this-directory-does-not-exist'
		}, function(err, res) {
			assert.notEqual(err, null);
			done();
		});
	});

	it('Common case', function(done) {
		var options = {
			name: 'TestJS',
			inDir: path.join(__dirname, '../test_case'),
			outDir: path.join(os.tmpdir(), 'swint-yuidoc'),
			pkgJSON: path.join(__dirname, '../test_case/package.json'),
		};

		swintYUIDoc(options, function(err, results) {
			var flag = true;

			try {
				fs.accessSync(path.join(options.outDir, 'data.json'));
			} catch(e) {
				flag = false;
			}

			assert.equal(flag, true);
			done();
		});
	});
});


