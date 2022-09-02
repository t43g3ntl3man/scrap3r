var product = {
    name: window.location.href.replace('https://www.rollingcomponents.com/product-detail.php?rc_num=', '').replace('&type=search', ''),
    price: document.getElementById('prod_amnt').innerText
}
prodInfo = []
prodInfo.push(product)
dataCollected = []
dataCollected.push(prodInfo)
function tableToJson(table) {
    var data = [];
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }

    for (var i=1; i<table.rows.length; i++) {
        var tableRow = table.rows[i];
        var rowData = {};
        for (var j=0; j<tableRow.cells.length; j++) {
            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;
        }
        data.push(rowData);
    }       

    return data;
}

for (i=0; i<document.getElementsByClassName('table text-center table-bordered table-sm').length; i++){
    try{
        str = document.getElementsByClassName('table text-center table-bordered table-sm')[i];
        dataCollected.push(tableToJson(str));
    } catch (err) {
        console.log('opps')
    }
    
}


jsoned = [].concat.apply([], dataCollected)
JSON.stringify(jsoned)