var linkName = document.getElementById('link-name');
var linkAddress = document.getElementById('link-address');
var addressRegex = /[?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/i
var nameRegex = /[?a-zA-Z0-9@:%._\+~#=]{2,10}/i

var allData = [];


function submitData() {
    if (checkAddress() && checkName()) {
        var bookmark = {
            name: linkName.value,
            address: linkAddress.value
        };
        allData.push(bookmark);
    }
    else {
        alert("Address must be at least 2 characters and contain .com/net/............ ") //Condition error always active??????????
    }

    displayData();
}


function checkAddress() {
    if (addressRegex.test(linkAddress.value)) {
        console.log("Valid");
    }
    else {
        console.log("Not Valid");
    }
}

function checkName() {
    if (nameRegex.test(linkName.value)) {
        console.log("Valid");
    }
    else {
        console.log("Not Valid");
    }
}

function displayData() {
    var cartona = "";

    for (var i = 0; i < allData.length; i++) {
        console.log(allData[i]);
cartona+=
        `  
                <td>${allData[i].getindex()}</td> 
                <td>${allData[i].linkName.value}</td>
                <td>${allData[i].linkAddress.value}</td>
                <td> <Button class="btn btn-info" onclick="visitLink()"> <i class="fa-solid fa-eye"></i> Visit</Button> </td>
                <td> <Button class="btn btn-danger" onclick="deleteData()"> <i class="fa-solid fa-trash-can"></i> Delete</Button> </td>`
    }
    document.getElementById('rowData').innerHTML = cartona;
}

function deleteData(i) {
    //how to get index of clicked element?
    allData[i].splice(i, 1);
    
    displayData();
}


function visitLink(i) {
    window.open(`${allData[i].address}`)
}