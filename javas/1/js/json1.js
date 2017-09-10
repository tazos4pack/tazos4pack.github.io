'use strict';

var youtube = {
    "kind": "youtube#searchListResponse",
    "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"",
    "nextPageToken": "CAUQAA",
    "regionCode": "KE",
    "pageInfo": {
        "totalResults": 4249,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCJowOS1R0FnhipXVqEnYU1A"
            }
    },
        {
            "kind": "youtube#searchResult",
            "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Eqa2nAAhHN0"
            }
    },
        {
            "kind": "youtube#searchResult",
            "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "IirngItQuVs"
            }
    }
  ]
};


var pola = youtube.items;

//console.log(pola);
for (var i = 0; i < pola.length; ++i) {
    console.log(pola[i]);
}

console.log("¯\\_(ツ)_/¯");

for (var i = 0; i < pola.length; ++i) {
    console.log(pola[i].id);
}

console.log("¯\\_(ツ)_/¯");

pola.forEach(function (element, index) {
    console.log(element);
});

console.log("¯\\_(ツ)_/¯");

pola.forEach(function (element, index) {
    console.log(element.id);
});






//var itemsy = youtube.items;
//
//for (var i = 0; i < itemsy.length; i++) {
//    var obj = itemsy[i];
//
//    console.log(obj.items);
//}
//
////console.log(itemsy);
