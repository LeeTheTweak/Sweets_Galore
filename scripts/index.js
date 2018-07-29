var serviceIcons = document.querySelectorAll("#area2 img");

function jumpCake() {
    console.log("Cake was mouseovered");
    $(serviceIcons).eq(0).animate({
      paddingBottom: 20,
    });
}
function sitCake() {
    console.log("Cake was mouseout");
    $(serviceIcons).eq(0).animate({
      paddingBottom: -20,
    });
}
function jumpBook() {
    console.log("Book was mouseover");
    $(serviceIcons).eq(1).animate({
      paddingBottom: 20,
    });
}
function sitBook() {
    console.log("Book was mouseout");
    $(serviceIcons).eq(1).animate({
      paddingBottom: -20,
    });
}
function jumpSmiley() {
    console.log("Smiley was mouseover");
    $(serviceIcons).eq(2).animate({
      paddingBottom: 20,
    });
}
function sitSmiley() {
    console.log("Smiley was mouseout");
    $(serviceIcons).eq(2).animate({
      paddingBottom: -20,
    });
}
function jumpBeacon() {
    console.log("Beacon was mouseover");
    $(serviceIcons).eq(3).animate({
      width: 80,
    });
}
function sitBeacon() {
    console.log("Beacon was mouseout");
    $(serviceIcons).eq(3).animate({
      width: 120,
    });
}
serviceIcons[0].addEventListener("mouseover", jumpCake, false);
serviceIcons[0].addEventListener("mouseout", sitCake, false);
serviceIcons[1].addEventListener("mouseover", jumpBook, false);
serviceIcons[1].addEventListener("mouseout", sitBook, false);
serviceIcons[2].addEventListener("mouseover", jumpSmiley, false);
serviceIcons[2].addEventListener("mouseout", sitSmiley, false);
serviceIcons[3].addEventListener("mouseover", jumpBeacon, false);
serviceIcons[3].addEventListener("mouseout", sitBeacon, false);
