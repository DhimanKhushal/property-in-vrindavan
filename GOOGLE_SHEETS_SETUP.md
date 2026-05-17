# Google Sheets Lead Form Setup

This project is already wired to submit the enquiry form to a Google Apps Script web app.

## 1. Google Sheet

Use your lead sheet:

- Title: `Property In Vrindavan Leads`
- URL: `https://docs.google.com/spreadsheets/d/1z-9c2VGFugwMxsoIvSVwznK6ypw-5AMiYicG-EVsT78/edit`

Expected columns in `Sheet1`:

1. `Timestamp`
2. `Site`
3. `Name`
4. `Contact Number`
5. `Property Type`
6. `Where From`
7. `Budget`
8. `Page URL`
9. `User Agent`

## 2. Apps Script code

Create a new Apps Script project and replace `Code.gs` with this:

```js
const SHEET_ID = "YOUR_SHEET_ID";
const SHEET_NAME = "Sheet1";
const NOTIFICATION_EMAIL = "inquiry.vrindavan@gmail.com";

function doPost(e) {
  const payload = e && e.parameter ? e.parameter : {};
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

  sheet.appendRow([
    new Date(),
    payload.site || "",
    payload.name || "",
    payload.contactNumber || "",
    payload.propertyType || "",
    payload.whereFrom || "",
    payload.budget || "",
    payload.pageUrl || "",
    payload.userAgent || "",
  ]);

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "New Property In Vrindavan Enquiry",
    htmlBody: `
      <h2>New Enquiry</h2>
      <p><strong>Site:</strong> ${payload.site || ""}</p>
      <p><strong>Name:</strong> ${payload.name || ""}</p>
      <p><strong>Contact Number:</strong> ${payload.contactNumber || ""}</p>
      <p><strong>Property Type:</strong> ${payload.propertyType || ""}</p>
      <p><strong>Where From:</strong> ${payload.whereFrom || ""}</p>
      <p><strong>Budget:</strong> ${payload.budget || ""}</p>
      <p><strong>Page URL:</strong> ${payload.pageUrl || ""}</p>
    `,
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Replace `YOUR_SHEET_ID` with the ID from the sheet URL.

## 3. Deploy the Apps Script

1. Click `Deploy`
2. Click `New deployment`
3. Select `Web app`
4. Execute as: `Me`
5. Who has access: `Anyone`
6. Click `Deploy`
7. Copy the `Web app URL`

## 4. Connect the site

Open:

- `src/content/sites/propertyinvrindavan.ts`

Set:

```ts
leadFormEndpoint: "YOUR_WEB_APP_URL",
```

## 5. Deploy again

Push the change to GitHub and let Cloudflare rebuild.
