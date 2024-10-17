let firstNameEl = document.getElementById("firstName");
let lastNameEl = document.getElementById("lastName");
let ageEl = document.getElementById("age");
let addressEl = document.getElementById("address");
let cityEl = document.getElementById("city");
let phoneNoEl = document.getElementById("phone");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");

let formDataArray = [];

let formData = {
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    city: "",
    phoneNo: ""
};

firstNameEl.addEventListener("change",function(event) {
    formData.firstName = event.target.value;
});

lastNameEl.addEventListener("change",function(event) {
    formData.lastName = event.target.value;
});

ageEl.addEventListener("change", function(event) {
    formData.age = Number(event.target.value);
});

addressEl.addEventListener("change", function(event) {
    formData.address = event.target.value;
});

cityEl.addEventListener("change", function(event) {
    formData.city = event.target.value;
});

phoneNoEl.addEventListener("change", function(event) {
    formData.phoneNo = Number(event.target.value);
});

function validateFormData(formData){
    let {firstName, lastName, age, address, city, phoneNo} = formData;
    if (firstName === ""){
        alert("Enter First Name");
    };
    if (lastName === ""){
        alert("Enter Last Name");
    };
    if (age === ""){
        alert("Enter Age");
    };
    if (address === ""){
        alert("Enter Address");
    };
    if (city === ""){
        alert("Enter City");
    };
    if (phoneNo === ""){
        alert("Enter Phone No");
    };
}

function submitFormData(formData) {
    formDataArray.push(formData);
    console.log(formDataArray);
}

submitBtnEl.addEventListener("click", function() {
    validateFormData(formData);
    let {firstName,lastName,age,address,city,phoneNo} = formData;
    if (firstName,lastName,age,address,city,phoneNo !== "" ){
        submitFormData(formData);
    }
    resetFormData();
});

function resetFormData(){
        firstNameEl.value = "";
        lastNameEl.value = "";
        ageEl.value = "";
        addressEl.value = "";
        cityEl.value = "";
        phoneNoEl.value = "";
        formData = {
            firstName: "",
            lastName: "",
            age: "",
            address: "",
            city: "",
            phoneNo: ""
        };
}
resetBtnEl.addEventListener("click", function(){
    firstNameEl.value = "";
    lastNameEl.value = "";
    ageEl.value = "";
    addressEl.value = "";
    cityEl.value = "";
    phoneNoEl.value = "";
    formData = {
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        city: "",
        phoneNo: ""
    };
});