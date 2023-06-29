$(document).ready(function () {
    $(".main").mouseover(function () {
        $(".sub li,.menu_bg").stop().slideDown(300)
    }).mouseout(function () {
        $(".sub li,.menu_bg").stop().slideUp(300)
    })
    start()
    var imgs = 2
    var now = 0
    function start() {
        $(".slide a").eq(0).siblings().animate({ marginTop: "-300px" })
        setInterval(function () {
            now = now == imgs ? 0 : (now += 1)
            $(".slide a").eq(now-1).animate({ marginTop: "-300px" }) 
             $(".slide a").eq(now).animate({ marginTop: "0" })
        }, 3000);
    }
    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox').show();
    })
    
    $('.popUpBox button').click(function(){
        $('.popUpBox').hide();
    })
})
