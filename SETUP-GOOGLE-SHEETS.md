# Connect the website to Google Sheets (free, ~5 minutes)

Every **booking** and every **enquiry** (Call / WhatsApp click) from the site will be
appended as a new row in your Google Sheet — automatically, with a timestamp.

No server, no monthly cost. It uses Google Apps Script.

---

## Step 1 — Create the Sheet
1. Go to <https://sheets.google.com> and create a **blank spreadsheet**.
2. Name it e.g. **Aditi Cab Service — Leads**.
   (You don't need to add any headings — the script creates them on the first entry.)

## Step 2 — Add the script
1. In the sheet menu: **Extensions → Apps Script**.
2. Delete any code shown in the editor.
3. Open the file **`google-apps-script.gs`** (in this project folder), copy **all** of it,
   and paste it into the Apps Script editor.
4. Click the **💾 Save** icon.

## Step 3 — Publish it as a Web App
1. Top right: **Deploy → New deployment**.
2. Click the ⚙️ gear next to "Select type" → choose **Web app**.
3. Set:
   - **Description:** `Aditi leads`
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**  ← important, so the website can post to it
4. Click **Deploy**.
5. Google will ask you to **Authorize access** → pick your Google account →
   on the "Google hasn't verified this app" screen click **Advanced → Go to … (unsafe)** → **Allow**.
   (It's your own script — this is normal.)
6. Copy the **Web app URL**. It looks like:
   `https://script.google.com/macros/s/AKfycb....../exec`

## Step 4 — Paste the URL into the website
1. Open **`script.js`** in this project.
2. Near the top, find this line:
   ```js
   var SHEET_ENDPOINT = "";
   ```
3. Paste your URL between the quotes:
   ```js
   var SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycb....../exec";
   ```
4. Save the file.

## Step 5 — Test
- **Quick test:** paste your Web app URL in a browser and add `?test=1` at the end:
  `https://script.google.com/macros/s/AKfycb....../exec?test=1`
  → refresh your Sheet; a **TEST** row should appear.
- **Real test:** open the website, fill the booking form, hit **Send Booking on WhatsApp**.
  A new **Booking** row appears in the Sheet.

---

## What gets recorded
| Column | Filled from |
|--------|-------------|
| Timestamp | automatic (India time) |
| Type | `Booking`, `Enquiry — Call`, or `Enquiry — WhatsApp` |
| Name / Phone | booking form |
| Trip Type / Vehicle | booking form |
| Pickup / Drop / Date / Time | booking form |
| Page | which page they were on |

## Optional extras (ask me to set up)
- **Email or WhatsApp alert to the owner** the moment a booking arrives.
- Turn **off** the Call/WhatsApp click logging if you only want full bookings
  (keeps the sheet cleaner).
- A simple **dashboard tab** (bookings per day, most-requested vehicles).

## Updating later
If you change the `.gs` code, redeploy: **Deploy → Manage deployments → ✏️ Edit →
Version: New version → Deploy**. The URL stays the same.
