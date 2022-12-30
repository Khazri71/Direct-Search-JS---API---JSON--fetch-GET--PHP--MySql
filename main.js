//Variables
let theContent = document.getElementById("content");
let theSearchInput = document.getElementById("searchInp");
let theBtn = document.getElementById("btnAll");
let theAddBtn = document.getElementById("btnAdd");
let theAddData =document.getElementById("AddData")
let theForm = document.getElementById("theForm");



/******************************Get Search Data******************************/
//Url To Get Data
let url = "http://localhost/Direct%20Search%20API%20-%20JSON%20-fetch%20(GET)/read.php";

theSearchInput.oninput = (e) => {
    theAddBtn.style.display="inline";
    e.preventDefault();
    fetch(url).then(response => response.json())
    .then(data => {
    //Search 
    let searchValue = theSearchInput.value;
    getData(data , searchValue);
    })
    .catch(error => console.log(error));
}


function getData(data , searchValue){
    theAddBtn.style.display="inline";
      theContent.innerHTML ='';
      if(searchValue.length > 0){
         data.forEach( element => {
            if(element.firstname.search(searchValue) != -1 || element.lastname.search(searchValue) != -1 || element.age.search(searchValue) != -1 || element.country.search(searchValue) != -1  ){
                theAddData.style.display="none";
                theContent.innerHTML += '<div class="shadow p-3 mb-5 bg-body rounded mt-4"><p><span class="fw-bold text-secondary"> Firstname : </span>' + element.firstname +'<span class="fw-bold text-secondary"> - Lastname : </span>'+ element.lastname +'</p> <p><span class="fw-bold text-secondary">Age : </span> ' +element.age + '</p> <p><span class="fw-bold text-secondary">Country : </span> ' +element.country+'</p></div>';
            }
        });
      }else{
        theAddData.style.display="none";
        theContent.innerHTML = '<div class="shadow p-3 mb-5 bg-body rounded mt-4"><p class="text-center text-secondary fs-5 fw-bold">Enter Data To Search User ! <i class="fa-regular fa-face-smile"></i></p></div>';
    }
}


/******************************Get All Data******************************/
theBtn.onclick = (e) => {
    theAddBtn.style.display="inline";
    e.preventDefault();
    fetch(url).then(response => response.json()).then(data => {
        getAllData(data);
    }).catch(error => console.log(error));
}

function getAllData(data){
    theAddBtn.style.display="inline";
   theContent.innerHTML = '';
   data.forEach(element => {
    theAddData.style.display="none";
    theContent.innerHTML += '<div class="shadow p-3 mb-5 bg-body rounded mt-4"><p><span class="fw-bold text-secondary"> Firstname : </span>' + element.firstname +'<span class="fw-bold text-secondary"> - Lastname : </span>'+ element.lastname +'</p> <p><span class="fw-bold text-secondary">Age : </span> ' +element.age + '</p> <p><span class="fw-bold text-secondary">Country : </span> ' +element.country+'</p></div>';
   })
}



/******************************Add Data******************************/
theAddBtn.style.display="none";


theAddBtn.onclick = (e) => {
    theAddBtn.style.display="none";
    e.preventDefault();
   
    theContent.innerHTML = `
    <div class="container mt-5 mb-5 shadow p-3 mb-5 bg-body rounded" id="AddData">
    <div class="row">
        <div class="col-md-12 col-sm-12">
            <fieldset>
                <legend>Add User</legend>
            </fieldset>
            <form  method="POST" id="theForm">
                <div class="mb-3">
                  <input type="text" class="form-control" id="firstnameInp" name="firstnameInp" placeholder="Firstname">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="lastnameInp"  name="lastnameInp" placeholder="Lastname">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="ageInp" name="ageInp" placeholder="Age">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="countryInp" name="countryInp"  placeholder="Country">
                </div>
    
                <input type="submit" class="btn btn-warning text-white"  value="Add User">
              </form>
        </div>
    </div>
</div>
`;
}


//Url To Add Data
let addUrl ="http://localhost/Direct%20Search%20API%20-%20JSON%20-fetch%20(GET)/add.php";

  theForm.onsubmit = (e) => {
    e.preventDefault();
    let theFormData = new FormData(theForm);
    fetch(addUrl , {
    method : 'POST' ,
    body : theFormData,
    }).then( response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("firstnameInp").value ='';
        document.getElementById("lastnameInp").value ='';
        document.getElementById("ageInp").value = '';
        document.getElementById("countryInp").value = '';
    })
    .catch(error => console.log(error)); 
}
   



