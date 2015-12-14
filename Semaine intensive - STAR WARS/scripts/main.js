console.log('yo');

function Create_Star(){
    
    var cluster = document.querySelector('.cluster');
    
    var star = '<div class="star"></div>';
    for(var i = 0; i < 800; i++){
        
        star = star + ' <div class="star"></div>'
    }
    
    cluster.innerHTML = star;
    
    var star__style = "<style>";
    
    for(var i = 0; i < 800; i++){
        var x = parseInt(Math.random() * 4000 - 2000);
        var y = parseInt(Math.random() * 4000 - 2000);
        var z = parseInt(Math.random() * 4000 - 2000);
        star__style = star__style + " .star:nth-child(" + i + ") {-webkit-transform: translate3d(1455px, -128px, -15px);transform: translate3d(" + x + "px, " + y + "px, " + z + "px);} ";
    }
    star__style += "</style>";
    document.write(star__style);
    
    
}

Create_Star();