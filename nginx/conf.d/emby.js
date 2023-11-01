var api_key = "";

//var reg = /\/emby\/Videos\/(.*)\/stream(.*)/i; 
var reg = /&MediaSourceId=(.*?)(?=&|$)/i; 

function redirect2Pan(r) {
	       var mediaSourceId = extractMediaSourceIdFromURL(r.variables.args);
            var itemInfoUrl = "http://172.17.0.1:8096/emby/Items?Fields=Path&Ids=" + mediaSourceId +"&api_key=" + api_key;
            ngx.fetch(itemInfoUrl)
                .then(reply => reply.json())
                .then(body => body.Items[0].Path)
                .then(path => path.includes('#')? path.replace(/#/g,'%23'):path)
                .then(path => path.includes('/mnt/GD')? path.replace('/mnt/GD','https://your.goindex/0:'):path)
                //.then(uri => encodeURI(uri))
                .then(uri => uri.includes('https://your.goindex')? r.return(301, uri) : r.internalRedirect(uri))
                .catch(e => r.return(501, e.message));
}

function extractMediaSourceIdFromURL(args) {
    var match = args.match(reg);
    if (match && match.length > 1) {
        return match[1];
    }
    return null;
}
