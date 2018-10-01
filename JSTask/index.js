var outline = document.getElementById('outline');
    
var jsonData;
var requestURL = 'https://cors-anywhere.herokuapp.com/http://www.mrsoft.by/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var jsonObj = request.response;
    jsonData = jsonObj['data'];
    ShowData(jsonData);
}

function ShowData(data){
    var ul = document.getElementById("spisok");
    ul.innerHTML = '';
    for(var i = 0;i<data.length;i++)
    {
        var li = document.createElement("li");
        li.innerHTML = data[i];
        ul.appendChild(li);
    }    
}

function lengthfilter(){
    var length = +(document.getElementById("search").value);
    if(!isNaN(length) && (length ^ 0) === length && length > 0 )
    {
        
        var temp = jsonData;
        var result = temp.filter(function(str){
            if(str.length > length){
                return str;
            }
        });   
        ShowData(result);
    } else {
        ShowData(jsonData);
        alert("Не целое положительное число!");
    }
}

function contentfilter(){
    var content = document.getElementById("search").value;
    var checked = document.getElementById("register").checked;
    if(!checked) {
        content = content.toLowerCase();
    }
    if(content != "")
    {
        var temp = jsonData;
        var result = temp.filter(function(str){
            if(!checked){
                str = str.toLowerCase();
            }
            if(str.indexOf(content)!=-1){
                return str;
            }
        });   
        ShowData(result);
    } else {
        ShowData(jsonData);
        alert("Не число!");
    }
}