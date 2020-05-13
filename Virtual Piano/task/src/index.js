document.addEventListener("keypress",function (event) {
  if(event.code == "KeyA") {
      let audioA = new Audio("assets/audio/A.mp3");
      audioA.play();
  } else if(event.code == "KeyS") {
      let audioS = new Audio("assets/audio/S.mp3");
      audioS.play();
  } else if(event.code == "KeyD") {
      let audioD = new Audio("assets/audio/D.mp3");
      audioD.play();
  } else if(event.code == "KeyF") {
      let audioF = new Audio("assets/audio/F.mp3");
      audioF.play();
  } else if(event.code == "KeyG") {
      let audioG = new Audio("assets/audio/G.mp3");
      audioG.play();
  } else if(event.code == "KeyH") {
      let audioH = new Audio("assets/audio/H.mp3");
      audioH.play();
  } else if(event.code == "KeyJ") {
      let audioJ = new Audio("assets/audio/J.mp3");
      audioJ.play();
  } else if(event.code == "KeyW") {
      let audioW = new Audio("assets/audio/W.mp3");
      audioW.play();
  } else if(event.code == "KeyE") {
      let audioE = new Audio("assets/audio/E.mp3");
      audioE.play();
  } else if(event.code == "KeyT") {
      let audioT = new Audio("assets/audio/T.mp3");
      audioT.play();
  } else if(event.code == "KeyY") {
      let audioY = new Audio("assets/audio/Y.mp3");
      audioY.play();
  } else if(event.code == "KeyU") {
      let audioU = new Audio("assets/audio/U.mp3");
      audioU.play();
  } else {
      console.log(`Warning '${event.key}' key is pressed`)
  }
});
