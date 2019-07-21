function address(){
    
  
    var day=document.getElementById("birth").value;
    var month=parseFloat(document.getElementById("birth").value);
    var year=parseFloat(document.getElementById("birth").value);
    var CC=(year-1)/100+1;
    var birthday=( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
    document.getElementById("displayday".innerHTML=Math.floor(birthday));


    var male=["Kwasi", "Kwadwo","Kwabena", "Kwaku", "yaw", "Kofi" ,"Kwame"];
    var female=["Akosua" ,"Adwoa" ,"Abenaa" ,"Akua" ,"yaa" ,"Afua" ,"Ama"];
    var gender=document.getElementById("displayname").value;

    if(gender==="male"){document.getElementById("displayname").innerHTML=male[Math.floor(birthday)]             
    };
      elseif(gender==="female");{
          document.getElementById("displayname").innerHTML=female[Math.floor(birthday)]}

      }
      function changecolor(){
        var GENDER = document.getElementById("gender").value;
         if (GENDER==="Female"){
            document.body.style.backgroundColor = "#ffe6e6";
         }
         else if(GENDER==="Male"){ 
             document.body.style.backgroundColor = " #e6fffa";

         }
            
     }
if (month==" "|| day==" "){
    alert("Please fill the form correctly")
}
else if(year==" "|| gender==" "){
    alert("please fill the form correctly")

}
else if(month<=0||month>12){
    alert("please fill the form correctly")

}
else if(day<=0 || day>31){
    alert("please fill the form correctly")
}