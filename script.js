var countryElements = document.getElementById('countries').childNodes;
    var countryCount = countryElements.length;
    for (var i = 0; i < countryCount; i++) {
      countryElements[i].onclick = function() {
        alert('You clicked on ' + this.getAttribute('data-name'));
        console.log(this.getAttribute('data-name'))
     
        if ( this.getAttribute('data-name') == "Philippines") {
            window.location = ('https://my.matterport.com/show/?m=KY7x1Znwqw9') 
        }else if ( this.getAttribute('data-name') == "United States"){
            window.location = ('https://my.matterport.com/show/?m=JAxyUNbfEKH') 
        }else if ( this.getAttribute('data-name') == "Japan"){
            window.location = (' https://my.matterport.com/show/?m=SX1oSDauzXf') 
        }else {
            window.location = ('http://google.com') 
        }
      }
    }

   