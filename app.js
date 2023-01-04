// Start DropDown-Container 

$(document).ready(function(){
    var getbrowsedpd = document.getElementById('navbrowse');
    var getcommtydpd = document.getElementById('navcomty');
    var getwritedpd = document.getElementById('navwrite')
    
    var getdropdowncontainer = document.querySelector('.dropdown-container');
    var getdropdowncontainer2 = document.querySelector('.dropdown-container2');
    var getdropdowncontainer3 = document.querySelector('.dropdown-container3')
    var brstoggledpd = document.querySelector('.togl');
    

    var getbanner = document.querySelector('.banner');

    $(getbrowsedpd).click(function(){
        console.log('hei')
        
        $(getdropdowncontainer).toggle(brstoggledpd);


        $(getcommtydpd).click(function(){
            $(getdropdowncontainer).css('display','none')
        });


        $(`getbanner,.cover-bg`).click(function(){
            $(getdropdowncontainer).css('display','none')
        })

    });

    
    $(getcommtydpd).click(function(){
        console.log('hei')
        
        $(getdropdowncontainer2).toggle(brstoggledpd)

        $(getbrowsedpd).click(function(){
            $(getdropdowncontainer2).css('display','none')
        });

        $(getwritedpd).click(function(){
            $(getdropdowncontainer2).css('display','none')
        });

        $(`getbanner,.cover-bg`).click(function(){
            $(getdropdowncontainer2).css('display','none')
        })


    });
    

    $(getwritedpd).click(function(){
        console.log('hei')
        
        $(getdropdowncontainer3).toggle(brstoggledpd)

        $(getcommtydpd).click(function(){
            $(getdropdowncontainer3).css('display','none')
        });
        $(getbrowsedpd).click(function(){
            $(getdropdowncontainer3).css('display','none')
        });

        $(`getbanner,.cover-bg`).click(function(){
            $(getdropdowncontainer3).css('display','none')
        })
    });


    // start progress bar 
    $(window).scroll(function(){
        console.log('his');
        var getprogress = document.querySelector('.progress-bar')
        // console.log(getprogress)
        var getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        var getclientheight = $(window).height();
        console.log(getclientheight)

        var getscrollheight = $(document).height();
        console.log(getscrollheight);


        var getclaheight = getscrollheight-getclientheight
        console.log(getclaheight)

        var getfinalheight = (getscrolltop *100 )/ getclaheight 
        console.log(getfinalheight);

        getprogress.style.width = `${getfinalheight}%`
    }); 

    var followbtn = document.getElementsByClassName('followbtn'); 
    $(followbtn).click(function(){
        $(this).toggleClass('foled');

       if($(this).hasClass('foled')){

        $('.fl-text').html('Following')

        $('.fl-icon').html('<i class="fa-regular fa-user-check"></i>')
       }else{

        $('.fl-text').html('Follow')
        $('.fl-icon').html('<i class="fa-solid fa-user-plus"></i>')


       }
    })

});






