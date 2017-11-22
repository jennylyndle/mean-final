/**{ "_id" : ObjectId("5a051d1bd6579944ea05cf6a"), "CARRIER" : "AA", "ORIGIN" : "DFW", "ORIGIN_CITY_NAME" : "Dallas/Fort Worth, TX", "ORIGIN_STATE_ABR" : "TX", "ORIGIN_STATE_FIPS" : 48, "ORIGIN_STATE_NM" : "Texas", "ORIGIN_WAC" : 74, "DEST" : "DTW", "DEST_CITY_NAME" : "Detroit, MI", "DEST_STATE_ABR" : "MI", "DEST_STATE_FIPS" : 26, "DEST_STATE_NM" : "Michigan", "DEST_WAC" : 43, "DEP_TIME" : 1053, "ARR_TIME" : 1432, "CANCELLED" : 0, "CANCELLATION_CODE" : "", "" : "" } */

const mongoose = require('mongoose');
let Flight = mongoose.model('Flight',
                      {
                          ident : String,
                          CARRIER : String,
                          ORIGIN : String,
                          ORIGIN_CITY_NAME: String,
                          ORIGIN_STATE_ABR : String,
                          ORIGIN_STATE_FIPS : String,
                          ORIGIN_STATE_NM : String,
                          ORIGIN_WAC : String,
                          DEST : String,
                          DEST_CITY_NAME : String,
                          DEST_STATE_ABR : String,
                          DEST_STATE_FIPS :String,
                          DEST_WAC : String,
                          DEP_TIME : String,
                          ARR_TIME : String,
                          CANCELLATION_CODE:String 
                      });
module.exports = Flight;                      