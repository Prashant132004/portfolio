var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");

          function opentab(tabname){
              for (tablink of tablinks){
                  tablink.classList.remove("active-link");
              }
             for (tabcontent of tabcontents){
            tabcontent.classList.remove("activetab");
         }
            event.currentTarget.classList.add("active-link")
           document.getElementById(tabname).classList.add("activetab");
     }
     document.getElementById('Aboutme').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('about').scrollIntoView({behaviour:'smooth'});
     });
     document.getElementById('projects1').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('portfolio').scrollIntoView({behaviour:'smooth'});
     });
     