let closeBtn = document.querySelector("#closeBtn");
let login = document.querySelector(".login");
let loginBtn = document.querySelector(".loginBtn");
let container = document.querySelector(".container");

const loginData = {
    fullName: "",
    email: "",
    password: "",
};

// Displaying None while clicking on Close Button
closeBtn.addEventListener("click", () => {
    let x = true;
    if (x == true) {
        login.style = "display: none";
    }
    let refText = document.createTextNode(
        "Refresh The Page for Logging In Again"
    );
    container.appendChild(refText);
});
// Event Listener Ends Here

//Getting The Inputs From The Login Form
let fName = document.querySelector("#fName");
let mail = document.querySelector("#mail");
let passWord = document.querySelector("#passWord");


//Function For Displaying the Data Inputed Inside Login Form
function DispData() {
    loginData["fullName"] = fName.value;
    loginData["email"] = mail.value;
    loginData["password"] = passWord.value;
    document.write(
        loginData.fullName +
        "<br>" +
        loginData.email +
        "<br>" +
        loginData.password
    );
}

// Checking if the Login Form is fully filled
// And Displaying Check if Login is Successfull
const tickDisp =
    `
        <div style= "padding: 10px 40px">
            <img src="images/tick.png" alt="">
            <h1 style="color: white">Thanks For Logging Up!</h1>
            <button onclick="DispData();">View Data</button>
        </div>
        `;

loginBtn.addEventListener("click", (e) => {
    if (fName.value == "" || mail.value == "" || passWord.value == "") {
        e.preventDefault();
        alert("Please Fill all The Inputs !");
    } else if (Object.keys(passWord.value).length <= 8) {
        e.preventDefault();
        alert("Password Should be More Than 8 Character/Numbers")
    } else {
        container.innerHTML = tickDisp;
    }
});