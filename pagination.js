
var request = new XMLHttpRequest();
request.open('GET','https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json');
var data = [];


request.onload  = () =>{
 data = JSON.parse(request.response);
  var Previous = document.createElement('input');
  Previous.setAttribute('id','prev');
   Previous.setAttribute('value', 'Previous');
   Previous.setAttribute('type',"button");
    Previous.setAttribute('onClick','previous()');
      document.body.append(Previous);

for(var i=1;i<=10;i++){
    var button = document.createElement('input');
      button.setAttribute('id',i);
      button.setAttribute('type', 'button');
      button.setAttribute('value', i);
      button.setAttribute('onClick','display(id)');
      document.body.append(button)
    }
    var next = document.createElement('input');
  next.setAttribute('id','next');
      next.setAttribute('type', 'button');
      next.setAttribute('value', 'next');
      next.setAttribute('onClick','next()');
      document.body.append(next);
  }
  var table = document.createElement('table');
  var thead =document.createElement("thead");
thead.setAttribute('class','thead-dark');
var tr= document.createElement('tr');
var th1=createtrth('th','ID');
var th2=createtrth('th','Name');
var th3 = createtrth('th','Email')
tr.append(th1,th2,th3);
thead.append(tr);




function createtrth(elementname, value=""){
   var td =document.createElement(elementname);
   td.innerHTML=value;
  
    return td;
  
}

var n= 1;
  function display(id){
      var id  = parseInt(id);
      n= id;
      table.innerHTML="";
      table.setAttribute("class", "table");
      for(var i=((id-1)*10);i<id*10;i++){
        var tr1 = document.createElement('tr');
        var td1  = document.createElement('td');
        var td2  = document.createElement('td');
        var td3  = document.createElement('td');
        td1.innerText = data[i].id;
        td2.innerText = data[i].name;
        td3.innerText = data[i].email;

        tr1.append(td1);
        tr1.append(td2);
        tr1.append(td3);
        table.append(thead, tr1);
      }
      document.body.append(table)
  }

  function previous(){
  if(n>1){
    n--;
      display(n);
    }
  }

    function next(){
  if(n<10){
    n++;
      display(n);
    }
  }
request.send();