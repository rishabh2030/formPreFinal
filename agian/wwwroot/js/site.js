// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.






function openDivTraining() {
    document.getElementById('divTraining').style.display = 'block';
    document.getElementById('divInternship').style.display = 'none';
    document.getElementById('divJob').style.display = 'none';
}

function openDivInternship() {
    document.getElementById('divInternship').style.display = 'block';
    document.getElementById('divTraining').style.display = 'none';
    document.getElementById('divJob').style.display = 'none';
}


function openDivJob() {
    document.getElementById('divJob').style.display = 'block';
    document.getElementById('divInternship').style.display = 'none';
    document.getElementById('divTraining').style.display = 'none';
}
function alertshow() {
    if ($("#name").val() == "") {
        $('#name').removeClass('bordernone');
        $('#name').addClass('textbox');
    }
    else {
       $('#name').removeClass('textbox');
    }
    //alert("We will let you know thank you for showing your intrest");
}


// to get city name from pin code

function check() {
    var pincode = document.getElementById("pincode");
    var head = document.getElementById("city");

    console.log(pincode.value);
    $.ajax({
        type: "GET",
        url: "https://api.postalpincode.in/pincode/" + pincode.value,
        success: function (reponse) {
            console.log(reponse[0].PostOffice[0]);
            head.value = reponse[0].PostOffice[0].Region;
        },
        error: function (data) {
            console.log(data);
        }

    })
}
// to make current address and parmanet address same
function setBillingAddress() {
    if ($("#homepostalcheck").is(":checked")) {
        $('#addressp').val($('#address').val());
        $('#addressp').attr('disabled', 'disabled');
    } else {
        $('#addressp').removeAttr('disabled');
        $('#addressp').val(" ");
    }
}

$('#homepostalcheck').click(function () {
    setBillingAddress();
})

// 
function check() {
    var pincode = document.getElementById("pincode");
    var head = document.getElementById("city");

    console.log(pincode.value);
    $.ajax({
        type: "GET",
        url: "https://api.postalpincode.in/pincode/" + pincode.value,
        success: function (reponse) {
            console.log(reponse[0].PostOffice[0]);
            head.value = reponse[0].PostOffice[0].Region;
        },
        error: function (data) {
            console.log(data);
        }

    })
}
//

// validate Address

const AddressChecker = (Number) => {
    return Number.match(
        /^([^\p{N}\p{S}\p{C}\p{P}]{2,200})$/
    );
};

const validateAdress = () => {

    const Address = $('#address').val();


    if (AddressChecker(Address)) {

        $('#address').css({
            'background-color': 'white',
        });
        document.getElementById("submit").disabled = false;
  
    } else {

        $('#address').css({
            'background-color': '#FFCCCB',
        });
        document.getElementById("submit").disabled = true;
    }
    return false;
}

$('#address').on('input', validateAdress);

// validate email

const emailAddressChecker = (email) => {
    return email.match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
};

const validateEmailAdress = () => {

    const email = $('#email').val();


    if (emailAddressChecker(email)) {

        $('#email').css({
            'background-color': 'white',
        });
        
    } else {

        $('#email').css({
            'background-color': '#FFCCCB',
        });
        document.getElementById("submit").disabled = true;
    }
    return false;
}

$('#email').on('input', validateEmailAdress);

// validate FN And LS


const namechecker = (name) => {
    return name.match(
        /^([^\p{N}\p{S}\p{C}\p{P}]{2,20})$/
    );
};

const validateNameFN = () => {

    const name = $('#FirstName').val();


    if (namechecker(name)) {

        $('#FirstName').css({
            'background-color': 'white',
        });
        
    } else {

        $('#FirstName').css({
            'background-color': '#FFCCCB',
        });
        document.getElementById("submit").disabled = true;
    }
    return false;
    
}

$('#FirstName').on('input', validateNameFN);
// LN
const namechecker1 = (name) => {
    return name.match(
        /^([^\p{N}\p{S}\p{C}\p{P}]{2,20})$/
    );
};

const validateNameLN = () => {

    const name = $('#LastName').val();


    if (namechecker1(name)) {

        $('#LastName').css({
            'background-color': 'white',
        });
      
    } else {

        $('#LastName').css({
            'background-color': '#FFCCCB',
        });
        document.getElementById("submit").disabled = true;
    }
    return false;
}

$('#LastName').on('input', validateNameLN);


// validate number

const numberChecker = (number) => {
    return number.match(

        /^[0-9]{10}$/
    );
};

const validatenumberPhone = () => {

    const number = $('#number').val();


    if (numberChecker(number)) {

        $('#number').css({
            'background-color': 'white',
        });
        
    } else {

        $('#number').css({
            'background-color': '#FFCCCB',
        });
        document.getElementById("submit").disabled = true;
    }
    return false;
}

$('#number').on('input', validatenumberPhone);

// validate pinCode

const pinNumberChecker = (number) => {
    return number.match(

        /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/
    );
};

const validatenumberPin = () => {

    const pinNumber = $('#pincode').val();


    if (pinNumberChecker(pinNumber)) {

        $('#pincode').css({
            'background-color': 'white',
        });
        
    } else {

        $('#pincode').css({
            'background-color': '#FFCCCB',
        });
        document.getElementById("submit").disabled = true;
    }
    return false;
}

$('#pincode').on('input', validatenumberPin);

// validate college name

const collegeName = (name) => {
    return name.match(

        /^([^\p{N}\p{S}\p{C}\p{P}]{2,200})$/
    );
};

const validateCollegeName = () => {

    const name = $('#institue').val();


    if (collegeName(name)) {

        $('#institue').css({
            'background-color': 'white',
            
        });
        
        document.getElementById("submit").disabled = false;
        
    } else {

        $('#institue').css({
            'background-color': '#FFCCCB',
            

        });
        document.getElementById("submit").disabled = true;
        
   
    }
    return false;
}

$('#institue').on('input', validateCollegeName);
//document.getElementById("submit").disabled = true;

    

