$(function(){
    let isOn = 0;
    $(".bar-btn").click(function(e){
        e.preventDefault();
        if(isOn==0) {
            $(this).addClass("change");
            isOn=1;
        } else {
            $(this).removeClass("change");
            isOn=0;
        } 
        $('.box-inner').toggleClass('animate')
        // $('.box-inner').fadeIn(1000);

        
    })

    $("body").append("<div id='lightBox'></div>");
    $('.menu-about').click(function(e){
        e.preventDefault();
        $('.about-box').toggle();
        $("#lightBox").toggle();
    })
    $('#lightBox').click(function(){
        $(this).toggle();
        $('.about-box').toggle();
    })
});



const content = "안녕하세요.\n제 이름은 이선호 입니다.\n소통하는 개발자가 되고 싶어요!";
const text = document.querySelector(".text")
let index = 0;
let paragText = "";
 
function typing(){
//   text.textContent < content[index++]
  if(index += content.length){
    // text.textContent = ""
    paragText += content[index];
    paragText.innerText = paragText ;
    index++
    // index = 0;
  }
}
setInterval(typing, 500)

