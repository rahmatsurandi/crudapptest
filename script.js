function onFromSubmit() {
  var formData = readFromData();
}

function readFromData() {
  var formData = {};
  formData["registrasi"] = document.getElementById("registrasi").value;
  formData["tahun"] = document.getElementById("tahun").value;
  formData["nama"] = document.getElementById("nama").value;
  formData["cc"] = document.getElementById("cc").value;
  formData["merk"] = document.getElementById("merk").value;
  formData["warna"] = document.getElementById("warna").value;
  formData["alamat"] = document.getElementById("alamat").value;
  formData["bahan"] = document.getElementById("bahan").value;
  return formData;
}

function insertData(data) {
  var table = document.getElementById("employelist").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.registrasi;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.tahun;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.cc;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.merk;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.warna;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.alamat;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.bahan;
  cell8 = newRow.insertCell(0);
  cell1.innerHTML = "<a>detail</a><a>edit</a><a>delete<a/>";
}
