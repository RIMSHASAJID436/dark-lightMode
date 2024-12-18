$(document).ready(function(){
$('#toggle-btn').click(function(){
    //change background color
    $('body').toggleClass('change-background');
    $(this).css("border","1px solid #f5f5f5")
    //toggle btn text
    $("span").text($("span").text()=="Light Mode"?"Dark Mode":"Light Mode")
})
$('#toggle-btn').click(function(){
    $(this).find("i").toggleClass("fa-moon fa-sun")
})
$('#toggle-btn').click(function(){
    $("#h1").text($("#h1").text()=="Light Mode"?"Dark Mode":"Light Mode")

})

})