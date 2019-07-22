function address(){
    
  
    var day=parseInt(document.getElementById("birth").value);
    var month=parseInt(document.getElementById("birth").value);
    var year=parseInt(document.getElementById("birth").value);
    var CC=(year-1)/100+1;
    var birthday=( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
    document.getElementById("displayday".innerHTML=Math.floor(birthday));


    var male=["Kwasi", "Kwadwo","Kwabena", "Kwaku", "yaw", "Kofi" ,"Kwame"];
    var female=["Akosua" ,"Adwoa" ,"Abenaa" ,"Akua" ,"yaa" ,"Afua" ,"Ama"];
    var gender=document.getElementById("displayname").value;

    if(gender==="male" && (day>=1||day<31)&& (month>0||month<=12)){
        console.log (male[Math.floor(birthday)]);
        document.getElementById("displayname").innerHTML=male[Math.floor(birthday)]             
    }
      else if(gender==="female" && (day>=1||day<31)&& (month>0||month<=12));{
          console.log (female[Math.floor(birthday)])
          document.getElementById("displayname").innerHTML=female[Math.floor(birthday)]
        }

<<<<<<< HEAD
    }
=======
      }
>>>>>>> gh-pages
