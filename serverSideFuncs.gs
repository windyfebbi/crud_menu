function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();             // get data from spreadsheet
  const ws = ss.getSheetByName("MUTASI");                       // get data from worksheet
  return ws.getRange(2, 1, ws.getLastRow()-1, 25).getValues();  // row, column, numRows ( -1 because have header), numColumns
}

function deleteById(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();             
  const ws = ss.getSheetByName("MUTASI");
  const mutasiIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = mutasiIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.deleteRow(rowNumber);
} 

function getMutasiById(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();             
  const ws = ss.getSheetByName("MUTASI");
  const mutasiIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = mutasiIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  const mutasiInfo = ws.getRange(rowNumber, 1, 1, 25).getValues()[0];    // for display data fill before when edit 
  return { mutasiID: mutasiInfo[0], noAgenda: mutasiInfo[1], tglAgenda: mutasiInfo[2], tglMasuk: mutasiInfo[3], cdpw: mutasiInfo[4], tsCadin: mutasiInfo[5], nsCadin: mutasiInfo[6], tsLbAsal: mutasiInfo[7], nsLbAsal: mutasiInfo[8], tsLbTujuan: mutasiInfo[9], nsLbTujuan: mutasiInfo[10], nama: mutasiInfo[11], nip: mutasiInfo[12], telp: mutasiInfo[13], npsnAsal: mutasiInfo[14], sekolahAsal: mutasiInfo[15], npsnTujuan: mutasiInfo[16], sekolahTujuan: mutasiInfo[17], mapel: mutasiInfo[18], tglVerif: mutasiInfo[19], petugas: mutasiInfo[20], kelengkapan: mutasiInfo[21], keterangan: mutasiInfo[22], notaPertimbangan: mutasiInfo[23], status: mutasiInfo[24] }
}

function editMutasiById(id,mutasiInfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet();             
  const ws = ss.getSheetByName("MUTASI");
  const mutasiIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = mutasiIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.getRange(rowNumber, 2,1,24).setValues([[
                                            mutasiInfo.noAgenda, 
                                            mutasiInfo.tglAgenda, 
                                            mutasiInfo.tglMasuk,
                                            mutasiInfo.cdpw,
                                            mutasiInfo.tsCadin,
                                            mutasiInfo.nsCadin,
                                            mutasiInfo.tsLbAsal,
                                            mutasiInfo.nsLbAsal,
                                            mutasiInfo.tsLbTujuan,
                                            mutasiInfo.nsLbTujuan,
                                            mutasiInfo.nama,
                                            mutasiInfo.nip,
                                            mutasiInfo.telp,
                                            mutasiInfo.npsnAsal,
                                            mutasiInfo.sekolahAsal,
                                            mutasiInfo.npsnTujuan,
                                            mutasiInfo.sekolahTujuan,
                                            mutasiInfo.mapel,
                                            mutasiInfo.tglVerif,
                                            mutasiInfo.petugas,
                                            mutasiInfo.kelengkapan,
                                            mutasiInfo.keterangan,
                                            mutasiInfo.notaPertimbangan,
                                            mutasiInfo.status
                                          ]]);
  return true;
}

function inputMutasi(mutasiInfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet();             
  const ws = ss.getSheetByName("MUTASI");
  const uniqueIDs = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues();
  var maxNum = 0;
  uniqueIDs.forEach(r => {
    maxNum = r[0] > maxNum ? r[0] : maxNum
  });
  var newID = maxNum + 1;
  
  ws.appendRow([
                newID,
                mutasiInfo.noAgenda, 
                mutasiInfo.tglAgenda, 
                mutasiInfo.tglMasuk,
                mutasiInfo.cdpw,
                mutasiInfo.tsCadin,
                mutasiInfo.nsCadin,
                mutasiInfo.tsLbAsal,
                mutasiInfo.nsLbAsal,
                mutasiInfo.tsLbTujuan,
                mutasiInfo.nsLbTujuan,
                mutasiInfo.nama,
                mutasiInfo.nip,
                mutasiInfo.telp,
                mutasiInfo.npsnAsal,
                mutasiInfo.sekolahAsal,
                mutasiInfo.npsnTujuan,
                mutasiInfo.sekolahTujuan,
                mutasiInfo.mapel,
                mutasiInfo.tglVerif,
                mutasiInfo.petugas,
                mutasiInfo.kelengkapan,
                mutasiInfo.keterangan,
                mutasiInfo.notaPertimbangan,
                mutasiInfo.status
              ]);
}
