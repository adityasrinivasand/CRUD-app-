var selectedRow = null;
var i;
var editicon = '<i onClick = "edit(this)" class = "fas fa-edit btnedit"></i>';
var deleteicon = '<i onClick = "deletee(this)" class = "fas fa-trash btndelete"></i>';
var check = '<input type="checkbox" onClick = "checkbox(this)" name="checkbox" value="checkbox">'




function create() {


    var formdata = readformdata();
    insert(formdata);
    resetform();

}


function readformdata() {
    var formdata = {};
    formdata["id"] = document.getElementById("id").value;
    formdata["pname"] = document.getElementById("pname").value;
    formdata["seller"] = document.getElementById("seller").value;
    formdata["price"] = document.getElementById("price").value;
    formdata["edit"] = editicon;
    formdata["delete"] = deleteicon;

    return formdata;
}

function insert(data) {

    var table = document.getElementById("ptable").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);

    cell1.innerHTML = check;
    cell2.innerHTML = data.id;
    cell3.innerHTML = data.pname;
    cell4.innerHTML = data.seller;
    cell5.innerHTML = data.price;
    cell6.innerHTML = data.edit;
    cell7.innerHTML = data.delete;

}

function resetform() {
    document.getElementById("id").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("seller").value = "";
    document.getElementById("price").value = "";
}



function edit(td) {
    document.getElementById("btn-create").disabled = true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("seller").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;

}


function deletee(td) {
    if (confirm('Are you Sure ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("ptable").deleteRow(row.rowIndex);
        resetform();

    }
}

function deleteselected() {

    var table = document.getElementById("ptable");

    var rowCount = table.rows.length;

    for (var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
        }

    }

}

function deleteall()
{
    var table =document.getElementById("ptable");

    table.innerHTML = "";
}

function checkall() {
    var checkboxes = document.getElementsByTagName('input');
    var val = null;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
            if (val === null) val = checkboxes[i].checked;
            checkboxes[i].checked = val;
        }
    }
}





function updateform() {
    selectedRow.cells[0].innerHTML = document.getElementById("id").value;
    selectedRow.cells[1].innerHTML = document.getElementById("pname").value;
    selectedRow.cells[2].innerHTML = document.getElementById("seller").value;
    selectedRow.cells[3].innerHTML = document.getElementById("price").value;
    resetform();
    document.getElementById("btn-create").disabled = false;
}

function exist() {
    
    var table = document.getElementById("ptable");
    


    var arrpname = ['Apple Iphone', 'Redmi Note 7', 'Redmi Note 7 Pro', 'Lenovo Z2 Plus', 'Honor 7 Plus', 'Sony Bravia 80 cm (32 Inches) Smart TV (Black) ', 'Samsung Galaxy M30 (Gradation Blue, 4+64 GB)', 'OnePlus 7 Pro (Nebula Blue, 8GB RAM, 256GB Storage)', 'Vivo V15 (Aqua Blue, 6GB RAM, 64GB Storage)','Apple Iphone', 'Redmi Note 7', 'Redmi Note 7 Pro', 'Lenovo Z2 Plus', 'Honor 7 Plus', 'Sony Bravia 80 cm (32 Inches) Smart TV (Black) ', 'Samsung Galaxy M30 (Gradation Blue, 4+64 GB)', 'OnePlus 7 Pro (Nebula Blue, 8GB RAM, 256GB Storage)', 'Vivo V15 (Aqua Blue, 6GB RAM, 64GB Storage) '];

    var arrseller = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg','France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];

    var arrprice = ['20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000','20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000'];

    

    for (i = 1; i <=5  ; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = check;
        cell2.innerHTML = i;
        cell3.innerHTML = arrpname[i - 1];
        cell4.innerHTML = arrseller[i - 1];
        cell5.innerHTML = arrprice[i - 1];
        cell6.innerHTML = editicon;
        cell7.innerHTML = deleteicon;

    }
}




function login() {

    var str1 = "Admin";
    var str2 = "pass"

    var str3 = document.getElementById("uname").value;
    var str4 = document.getElementById("psw").value;


    if ((str3 == str1) && (str4 == str2)) {
        window.location.assign("../source/home.html");
    }

}

function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myinput");
    filter = input.value.toUpperCase();
    table = document.getElementById("ptable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

var modal = document.getElementById('modalid');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*
active(){
    var header = document.getElementById("pagination");
    var btns = header.getElementsByClassName("no");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
         this.className += " active";
  });
}

}
*/
/*
page()
{
    var table = document.getElementById("ptable");
    var rowCount = table.rows.length;
    var concount = document.getElementById("pageno").value; //takes 5/10/15/20 - contentcount
    var k=1;
    alert("yesy");
    
    while(k<rowCount){
        for (; k <= 5 ; i++) {
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
    
            cell1.innerHTML = check;
            cell2.innerHTML = i;
            cell3.innerHTML = arrpname[i - 1];
            cell4.innerHTML = arrseller[i - 1];
            cell5.innerHTML = arrprice[i - 1];
            cell6.innerHTML = editicon;
            cell7.innerHTML = deleteicon;
    
        }

        concount += concount;
        

    }

        



  

    

}
*/
