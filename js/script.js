src1="file:///C:/Users/aralb/Desktop/Kazakhstan/images/image1.jpg"
src4="file:///C:/Users/aralb/Desktop/Kazakhstan/images/image4.jpg"
src2="file:///C:/Users/aralb/Desktop/Kazakhstan/images/image2.jpg"
src5="file:///C:/Users/aralb/Desktop/Kazakhstan/images/image5.jpg"
src3="file:///C:/Users/aralb/Desktop/Kazakhstan/images/image3.jpg"
src6="file:///C:/Users/aralb/Desktop/Kazakhstan/images/image6.jpg"
var images=[src1, src2, src3,src4, src5, src6];
function image_to_right(){
var image1=document.getElementById("images1_1").src;
var image2=document.getElementById("images1_2").src;
var image3=document.getElementById("images1_3").src;
first_image=image1;
images.shift();
images.push(first_image);
src11=images[0].slice(-17);
src22=images[1].slice(-17);
src33=images[2].slice(-17);
document.getElementById("images1_1").src = src11;
document.getElementById("images1_2").src = src22;
document.getElementById("images1_3").src = src33;
}
        

function image_to_left(){
var image1=document.getElementById("images1_1").src;
var image2=document.getElementById("images1_2").src;
var image3=document.getElementById("images1_3").src;
first_image=images[images.length-1];
images.unshift(first_image);
images.pop();
src11=images[0].slice(-17);
src22=images[1].slice(-17);
src33=images[2].slice(-17);
document.getElementById("images1_1").src = src11;
document.getElementById("images1_2").src = src22;
document.getElementById("images1_3").src = src33;
    
}


$(document).ready(function() {
    
$("#footer_form").submit(function(){
    var value_of_id = document.getElementById("name").value;
    var output_text = "Хатыңыз сәтті жіберілді, " + value_of_id+"!";
    alert(output_text);
});


});



document.getElementById("name").onchange = function() {myFunction()};
function change_form(){
    if (document.getElementById("topic").value == "extra_information"){
        $(document).ready(function() {
            $("#fileform").fadeIn();
            });
    }
    else {
        $(document).ready(function() {
            $("#fileform").fadeOut();
            });
    }
}


function image1_big(){
    $("#image_gerb").animate({width: "50%"}, "fast")
}
function image1_small(){
    $("#image_gerb").animate({width: "30%"}, "fast")
    stop();
}

function image2_big(){
    $("#image_tu").animate({width: "50%"}, "fast")
}
function image2_small(){
    $("#image_tu").animate({width: "30%"}, "fast")
}

function image3_big(){
    $("#image3").animate({width: "70%"}, "fast")
}
function image3_small(){
    $("#image3").animate({width: "50%"}, "fast")
}