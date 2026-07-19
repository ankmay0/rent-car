/**
 * ============================================================
 *  ADITI CAB SERVICE — Website lead logger
 *  Writes every booking & enquiry from the website into this
 *  Google Sheet. Free, no server needed.
 *
 *  SETUP (see SETUP-GOOGLE-SHEETS.md for screenshots-style steps):
 *   1. Create a Google Sheet.
 *   2. Extensions → Apps Script. Delete everything, paste this file.
 *   3. Deploy → New deployment → type "Web app".
 *        - Execute as: Me
 *        - Who has access: Anyone
 *   4. Copy the Web app URL and paste it into script.js as
 *      SHEET_ENDPOINT.
 * ============================================================
 */

var SHEET_NAME = 'Leads';
var TIMEZONE   = 'Asia/Kolkata';

/** Receives POST from the website (booking form + enquiry clicks). */
function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); }
      catch (err) { data = e.parameter || {}; }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    appendRow_(data);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

/** Lets you test in a browser. Add ?test=1 to the URL to write a test row.
 *  Opening the URL also reports WHICH spreadsheet/tab it is writing to and
 *  how many rows are there — handy for debugging "I don't see anything". */
function doGet(e) {
  var diag = { ok: true, service: 'Aditi Cab Service lead logger' };
  try {
    if (e && e.parameter && e.parameter.test) {
      appendRow_({ type: 'TEST', name: 'Test row', phone: '0000000000' });
    }
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (ss) {
      var sheet = ss.getSheetByName(SHEET_NAME);
      diag.spreadsheet = ss.getName();
      diag.spreadsheetUrl = ss.getUrl();
      diag.leadsTabExists = !!sheet;
      diag.rowsInLeads = sheet ? sheet.getLastRow() : 0;
    } else {
      diag.ok = false;
      diag.error = 'No bound spreadsheet — the script is NOT attached to a Sheet. ' +
                   'Create the script from the Sheet via Extensions > Apps Script.';
    }
  } catch (err) {
    diag.ok = false;
    diag.error = String(err);
  }
  return json_(diag);
}

function appendRow_(d) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Type', 'Name', 'Phone', 'Trip Type',
                     'Vehicle', 'Pickup', 'Drop', 'Date', 'Time', 'Page']);
    sheet.getRange(1, 1, 1, 11).setFontWeight('bold').setBackground('#16130d').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 150);
  }

  var stamp = Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd HH:mm:ss');
  sheet.appendRow([
    stamp,
    d.type    || 'Booking',
    d.name    || '',
    d.phone   || '',
    d.trip    || '',
    d.vehicle || d.car || '',
    d.pickup  || '',
    d.drop    || '',
    d.date    || '',
    d.time    || '',
    d.page    || ''
  ]);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
