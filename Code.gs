
function doPost(e) {
  const sheet = SpreadsheetApp.openById("1JEW50bHweL-eJT_9YkmDJ-VLTL7FMwn-q8AHrsfuW6A");
  const ws = sheet.getSheetByName("비교표");
  const params = JSON.parse(e.postData.contents);

  ws.getRange("B1").setValue(params.productType || "");
  ws.getRange("B2").setValue(params.age || "");
  ws.getRange("B3").setValue(params.gender || "");
  ws.getRange("B4").setValue(params.암진단금 || "");
  ws.getRange("B5").setValue(params.유사암 || "");
  ws.getRange("B6").setValue(params.뇌혈관질환 || "");
  ws.getRange("B7").setValue(params.확대심장질환 || "");
  ws.getRange("B8").setValue(params.허혈성심장질환 || "");

  const result = ws.getRange("E6:F20").getValues();
  return ContentService.createTextOutput(JSON.stringify(result))
                       .setMimeType(ContentService.MimeType.JSON);
}
