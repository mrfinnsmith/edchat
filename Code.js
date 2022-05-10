/*
Copied/inspired from here: https://levelup.gitconnected.com/send-tweets-from-google-sheet-using-google-apps-script-d35382e901d8

uses TwitLIb: https://github.com/airhadoken/twitter-lib
 */
props = PropertiesService.getScriptProperties();

function someTweets() {
  let sheet = SpreadsheetApp.openById('1dYn7PvlUMQdVeDI6JG_JQ4ild86aQA5InajsUpOJvLY').getSheetByName('Sheet1');

let params = new Array(0);
let service = new Twitterlib.OAuth(props);

try {
  let response = service.fetchTweets('#sanfrancisco',null, {count:10});
  console.log(response);
} catch(e) {
  console.log(e);
}
}