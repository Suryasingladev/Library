
console.log("Its Running");

// baner computer image
document.getElementById("baner-img").style.width = "30vw";
document.getElementById("baner-img").style.marginRight = "13vw";
document.getElementById("baner-img").style.opacity = "1";
document.getElementById("baner-img").style.display = "flex";

//----->

document.getElementById("title").style.width = "50vw";
document.getElementById("title").style.marginLeft = "25vw";
document.getElementById("title").style.opacity = "1";
document.getElementById("title").style.display = "flex";

document.getElementById("disc").style.width = "50vw";
document.getElementById("disc").style.opacity = "1";
document.getElementById("disc").style.display = "flex";




function openFunction() {
          document.getElementById("menu").style.height = "20vw";
          document.getElementById("menu").style.marginTop = "10vh";
          // document.getElementById("menu").style.padding = "10px";
          document.getElementById("mama").style.display = "flex";

}
function closeFunction() {
          document.getElementById("menu").style.height = "0vw";
          document.getElementById("menu").style.marginTop = "0vh";
          // document.getElementById("menu").style.padding = "0px";
          document.getElementById("mama").style.display = "none";
}
function openFunction2() {
          console.log("More");
          document.getElementById("menu1").style.height = "70vh";
          document.getElementById("menu1").style.width = "70vw";
          document.getElementById("menu1").style.marginBottom = "13vh";
          // document.getElementById("menu").style.padding = "10px";
          document.getElementById("mama").style.display = "flex";
}
function closeFunction2() {
          document.getElementById("menu1").style.height = "0vh";
          document.getElementById("menu1").style.width = "20vw";
          document.getElementById("menu1").style.marginBottom = "0vh";
          // document.getElementById("menu").style.padding = "0px";
          document.getElementById("mama").style.display = "none";

}
function makeCircle() {

          document.getElementById("other-circle").style.height = "10vw";
          document.getElementById("other-circle").style.marginLeft = "10vw";
          document.getElementById("other-circle").style.marginTop = "0vh";
          document.getElementById("other-circle").style.display = "flex";
          // document.getElementById("other-circle").style.background = "yellow";

          // 1
          document.getElementById("other-circle1").style.height = "10vw";
          document.getElementById("other-circle1").style.marginTop = "0vh";
          document.getElementById("other-circle1").style.marginLeft = "25vw";
          document.getElementById("other-circle1").style.display = "flex";
          // document.getElementById("other-circle1").style.background = "green";


          // 2
          document.getElementById("other-circle2").style.height = "10vw";
          document.getElementById("other-circle2").style.marginTop = "0vh";
          document.getElementById("other-circle2").style.marginLeft = "40vw";
          document.getElementById("other-circle2").style.display = "flex";
          // document.getElementById("other-circle2").style.background = "orange";


          // 3
          document.getElementById("other-circle3").style.height = "10vw";
          document.getElementById("other-circle3").style.marginTop = "0vh";
          document.getElementById("other-circle3").style.marginLeft = "55vw";
          document.getElementById("other-circle3").style.display = "flex";
          // document.getElementById("other-circle3").style.background = "pink";

          document.getElementById("other-circle4").style.height = "10vw";
          document.getElementById("other-circle4").style.marginTop = "0vh";
          document.getElementById("other-circle4").style.marginLeft = "70vw";
          document.getElementById("other-circle4").style.display = "flex";
          // document.getElementById("other-circle4").style.background = "purple";

}



