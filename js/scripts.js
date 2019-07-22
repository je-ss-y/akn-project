

function address(){
    
  
    var day = parseInt(document.getElementById("Day").value);
    var month = parseInt(document.getElementById("Month").value);
    var year = parseInt(document.getElementById("Year").value);
    var CC = Math.round(year-1)/100+1;
    var birthday = ( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
    document.getElementById("displayday").innerHTML = Math.round(birthday);
   console.log(birthday);

    var choice = document.getElementById("gender").value;
    console.log(choice);

    var male=["Kwasi", "Kwadwo","Kwabena", "Kwaku", "yaw", "Kofi" ,"Kwame"];
    var female=["Akosua" ,"Adwoa" ,"Abenaa" ,"Akua" ,"yaa" ,"Afua" ,"Ama"];  
 if (day >= 1 && day <=31 && month > 0 && month <= 12){
    if(choice==="male"){
        console.log(male[Math.round(birthday)]);
        document.getElementById("displayday").innerHTML = male[Math.round(birthday)]  
 alert ("input details")

    }
    else
         if (choice==="female") {
          console.log(female[Math.round(birthday)]);
          document.getElementById("displayday").innerHTML = female[Math.round(birthday)]
    }
    }
}
