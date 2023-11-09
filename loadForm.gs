function loadMainForm() {
  const htmlServ = HtmlService.createTemplateFromFile("main");
  const html = htmlServ.evaluate();
  html.setWidth(1200).setHeight(700);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Database Mutasi");
}

function loadHelp() {
  var output = UrlFetchApp.fetch("https://docs.google.com/document/d/1D_ZCxa8onUZFGwgMZ-4tMEEYhO3cEF4lukJEzaGpEcA/edit?usp=sharing");
  var html = HtmlService.createHtmlOutput(output.getContentText());
  html.setWidth(1100).setHeight(700);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Pusat Bantuan");
}

function createMenu_() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("Mutasi");
  menu.addItem("Load Data", "loadMainForm");
  menu.addItem("Help", "loadHelp");
  menu.addToUi();
}

function onOpen() {
  createMenu_();
}
