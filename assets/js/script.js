        var header = document.getElementById("myHeader");
        var home = document.getElementById("home");
        var homeClass = document.querySelector(".homeClass");
        var about = document.getElementById("about");
        var aboutClass = document.querySelector(".aboutClass");
        var portfolio = document.getElementById("portfolio"); 
        var portfolioClass = document.querySelector(".portfolioClass"); 
        var services = document.getElementById("services"); 
        var servicesClass = document.querySelector(".servicesClass"); 
        var testimonials = document.getElementById("testimonials");
        var testimonialsClass = document.querySelector(".testimonialsClass");
        var blog = document.getElementById("blog");
        var blogClass = document.querySelector(".blogClass");
        var contact = document.getElementById("contact");
        var contactClass = document.querySelector(".contactClass");

        window.onscroll = function() {headerFunction(),homeActive(),aboutActive(),portfolioActive(),servicesActive(),testimonialsActive(),blogActive(),contactActive()}
        
        function homeActive(){
            if(window.pageYOffset>=home.offsetTop){
              homeClass.classList.add("active");
                if(window.pageYOffset>=about.offsetTop-1){
                  homeClass.classList.remove("active");
                }
            }
            else{
              homeClass.classList.remove("active");
            }
        }
        function aboutActive(){
            if(window.pageYOffset>=about.offsetTop-1){
                aboutClass.classList.add("active");
                if(window.pageYOffset>=team.offsetTop-1){
                    aboutClass.classList.remove("active");
                }
            }
            else{
                aboutClass.classList.remove("active");
            }
        }
        function portfolioActive(){
            if(window.pageYOffset>=portfolio.offsetTop-1){
                portfolioClass.classList.add("active");
                if(window.pageYOffset>=services.offsetTop-1){
                    portfolioClass.classList.remove("active");
                }
            }
            else{
                portfolioClass.classList.remove("active");
            }
        }
        function servicesActive(){
            if(window.pageYOffset>=services.offsetTop-1){
                servicesClass.classList.add("active");
                if(window.pageYOffset>=testimonials.offsetTop-1){
                    servicesClass.classList.remove("active");
                }
            }
            else{
                servicesClass.classList.remove("active");
            }
        }
        function testimonialsActive(){
            if(window.pageYOffset>=testimonials.offsetTop-1){
                testimonialsClass.classList.add("active");
                if(window.pageYOffset>=blog.offsetTop-1){
                  testimonialsClass.classList.remove("active");
                }
            }
            else{
              testimonialsClass.classList.remove("active");
            }
        }
        function blogActive(){
            if(window.pageYOffset>=blog.offsetTop-1){
              blogClass.classList.add("active");
                if(window.pageYOffset>=contact.offsetTop-1){
                  blogClass.classList.remove("active");
                }
            }
            else{
              blogClass.classList.remove("active");
            }
        }
        function contactActive(){
            if(window.pageYOffset>=contact.offsetTop-1){
              contactClass.classList.add("active");
            }
            else{
              contactClass.classList.remove("active");
            }
        }

        function headerFunction() {
          if (window.pageYOffset > 0) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }