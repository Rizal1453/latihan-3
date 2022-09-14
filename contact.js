function submitData(){
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value


console.log(name);
console.log(email);
console.log(phone);
console.log(subject);
console.log(message);

let emailReceiver= "mntpnijal@gmail.com"
let a = document.createElement("a");
  a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}`;
  a.target = "_blank";
  a.click();
}
