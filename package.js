Package.describe({
	summary: "Robust RSS, Atom, and RDF feed parsing in Node.js"
});

Npm.depends({feedparser: "0.16.3"});

Package.on_use(function(api){
	api.add_files(['feedparser.js'], 'server');
	if(api.export)
		api.export('Feedparser');
});