var config = {
        "000b571a8c38" : {
         "uuid" : "000b571a8c38",
         "enabled" : true,
         "family" : "thunderboard",
         "type" : "sense",
         "autoconnect" : true,
         "readIntervals" : {
           "environment" : {
             "humidity" : 15000,
             "temperature" : 15000,
             "uv" : 15000
           },
           "ambient-light" : {
             "ambient-light" : 15000
           }
          },
         "services" : {
           "environment" : ["temperature"]
        }
      }
    };

    var dataCallback = function(data) {
      console.log('Thunderboard Event',data);
    };

    var normalizeData = true;

    var ThunderBoard = require('thunderboard-ble');
    var tb = new ThunderBoard(config,dataCallback,normalizeData);

