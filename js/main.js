let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
  // console.log(e.keyCode, e.which);
  // 38 -strzałka do góry
  // 40 - strzałka w dół


  //wersja 1 - instukcja if
  // if (e.keyCode === 38 && red < 255) {
  //   console.log("góra");
  //   red++;
  //   green++;
  //   blue++;
  //   document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  // } else if (e.keyCode === 40 && red >= 0) {
  //   console.log("dół")
  //   red--;
  //   green--;
  //   blue--;
  //   document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  // }



  // wersja 2 - instrukcja switch

  switch (e.keyCode) {
    case 38:
      red++;
      green++;
      blue++;
      document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
      break;
    case 40:
      red--;
      green--;
      blue--;
      document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
      break;
    default:
      // code block
  }


}

window.addEventListener("keydown", changeColor)