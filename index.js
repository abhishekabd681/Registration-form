
function resetFields()
{
   //  firstName= document.getElementById("first-name").value='';
   //  lastName= document.getElementById("last-name").value='';
   //  email = document.getElementById("email").value='';
   //  city=document.getElementById("city").value='';
   //  state =document.getElementById("state").value='';
   //  zipCode = document.getElementById("zip-code").value='';
   //  tnC = document.getElementById("t-and-c").checked = false;
   
    document.getElementById("registration-form").reset(); 

    document.getElementById("first-name-valid").style.display="none";
    document.getElementById("last-name-valid").style.display="none";
    document.getElementById("email-valid").style.display="none";
    document.getElementById("city-valid").style.display="none";
    document.getElementById("zip-valid").style.display="none";
    document.getElementById("tNC-valid").style.display="none"; 
    document.getElementById("state-valid").style.display="none";
}

function validate()
{
   
    let firstName= document.getElementById("first-name").value;
    let lastName= document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let city=document.getElementById("city").value;
    let state =document.getElementById("state").value;
    let zipCode = document.getElementById("zip-code").value;
    let tnC = document.getElementById("t-and-c").checked;
   //  let city = document.getElementById("city").value;
   //  let zipcode = document.getElementById("zip-code").value;
    // console.log(firstName,lastName,city,zipcode,email,tnc);
    let error =false;
   
    if(firstName.length >= 2)
    {
        document.getElementById("first-name-valid").style.display="Block";
        document.getElementById("first-name-invalid").style.display="none";
    }
    else 
    {
        document.getElementById("first-name-invalid").style.display="Block";
        document.getElementById("first-name-valid").style.display="none";
        error = true;
    }

    if(lastName.length >= 2)
    {
        document.getElementById("last-name-valid").style.display="Block";
        document.getElementById("last-name-invalid").style.display="none";
    }
    else 
    {
        document.getElementById("last-name-invalid").style.display="Block";
        document.getElementById("last-name-valid").style.display="none";
        error = true;
    }
    
   
     if(email.substr(email.lastIndexOf('.')+1).length >= 2 && email.includes('@') && email.includes('.') && email.indexOf('@')>0 )
     {
        document.getElementById("email-valid").style.display="block";
        document.getElementById("email-invalid").style.display="none";
     }
     else{
        document.getElementById("email-invalid").style.display="block";
        document.getElementById("email-valid").style.display="none";
        error = true;
     }
     if(city.length >= 3)
     {
        document.getElementById("city-valid").style.display="block";
        document.getElementById("city-invalid").style.display="none";
     }
     else{
        document.getElementById("city-invalid").style.display="block";
        document.getElementById("city-valid").style.display="none";
        error = true;
     }
     let numberZip = parseInt(zipCode)
     
     if(numberZip > 100000 && 
      numberZip <= 999999 && 
      !isNaN(numberZip))
     {
        document.getElementById("zip-valid").style.display="block";
        document.getElementById("zip-invalid").style.display="none";
     }
     else{
        document.getElementById("zip-invalid").style.display="block";
        document.getElementById("zip-valid").style.display="none";
        error = true;
     }
     if(tnC)
     {
      document.getElementById("tNC-invalid").style.display="none";
     }
     else{
      document.getElementById("tNC-invalid").style.display="block";
      error = true;
     }
     

     if(state != 'none')
     {
      document.getElementById("state-valid").style.display="block";
      document.getElementById("state-invalid").style.display="none";
     }
     else{
      document.getElementById("state-invalid").style.display="block";
      document.getElementById("state-valid").style.display="none";
      error = true;
     }
  if(error === false)
  {
   alert("Your details is saved successfully!");
   resetFields();
  }

}
