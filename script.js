let numCorrecto = 0;
let numIncorrecto = 0;
let finished =0;

var header = document.createElement("h1");
header.textContent = "Spanish Script Story One";
document.body.appendChild(header);

var header2 = document.createElement("h2");
header2.textContent = "Miguel va a la parque";
document.body.appendChild(header2);

var startButton = document.createElement("button");
startButton.textContent = "Start Story!";
startButton.id = "button";
document.body.appendChild(startButton);

function paragraph1 () {
  document.body.removeChild(startButton);
  var paragraphUno = document.createElement("p");
  paragraphUno.textContent = "Es de la mañana y hay un muchacho que se llama Miguel. Este mañana, Miguel decide que quiere ir a la parque. Miguel quiere ir a la parque porque el tiempo hace mucho sol y muy bueno!";
  paragraphUno.id = "paragraphUno";
  document.body.appendChild(paragraphUno);

  var question1 = document.createElement("h3");
  question1.textContent = "Why does Miguel want to go to the park?";
  document.body.appendChild(question1);

  var div1 = document.createElement("div");
  document.body.appendChild(div1);

  var ans1 = document.createElement("button");
  ans1.textContent = "The weather is nice and sunny!";
  div1.appendChild(ans1);

  var ans2 = document.createElement("button");
  ans2.textContent = "He wants to see his friends";
  div1.appendChild(ans2);

  function rightAns1() {
    ans1.textContent = "Correcto! 😉";
    ans1.style.backgroundColor = "green";
    div1.removeChild(ans2);
    setTimeout(() => {
      div1.removeChild(ans1);
      document.body.removeChild(question1);
      numCorrecto += 1;
      paragraph2();
    }, 2000);
  }

  function wrongAns1() {
    ans2.textContent = "Incorrecto 🤔";
    ans2.style.backgroundColor = "red";
    div1.removeChild(ans1);
    setTimeout(() => {
      div1.removeChild(ans2);
      document.body.removeChild(question1);
      numIncorrecto += 1;
      paragraph2();
    }, 2000);
  }
  ans1.addEventListener("click", rightAns1);
  ans2.addEventListener("click", wrongAns1);
};

startButton.addEventListener("click", paragraph1);

function paragraph2 () {
  var paragraphDos = document.createElement("p");
  paragraphDos.textContent = "Cuando Miguel le pregunta a su mamá, ella le dice que Miguel tiene que limpiar su dormitorio antes de saliendo. Miguel no quiere limpiar su dormitorio, pero él tiene que limpiar su dormitorio"
  paragraphDos.id = "paragraphDos";
  document.body.appendChild(paragraphDos);

  var question2 = document.createElement("h3");
  question2.textContent = "What does Miguel have to do before going to the park?";
  document.body.appendChild(question2);

  var div2 = document.createElement("div");
  document.body.appendChild(div2);

  var ans3 = document.createElement("button");
  ans3.textContent = "He has to clean the kitchen.";
  div2.appendChild(ans3);

  var ans4 = document.createElement("button");
  ans4.textContent = "He has to clean his bedroom";
  div2.appendChild(ans4);

  function rightAns2() {
    ans4.textContent = "Correcto! 😉";
    ans4.style.backgroundColor = "green";
    div2.removeChild(ans3);
    setTimeout(() => {
      div2.removeChild(ans4);
      document.body.removeChild(question2);
      numCorrecto += 1;
      paragraph3();
    }, 2000);
  }

  function wrongAns2() {
    ans3.textContent = "Incorrecto 🤔";
    ans3.style.backgroundColor = "red";
    div2.removeChild(ans4);
    setTimeout(() => {
      div2.removeChild(ans3);
      document.body.removeChild(question2);
      numIncorrecto += 1;
      paragraph3();
    }, 2000);
  }
  ans3.addEventListener("click", wrongAns2);
  ans4.addEventListener("click", rightAns2);
};

function paragraph3() {
  var paragraphTres = document.createElement("p");
  paragraphTres.textContent = "Entonces, Miguel va a su dormitorio y limpia el piso, limpia la cama, y finalmente, limpia el closet. De repente, Miguel descubre un objeto misterioso en el closet. El recuerda que quieria ir a la parque y pone el objeto en el piso."
  paragraphTres.id = "paragraphTres";
  document.body.appendChild(paragraphTres);

  var question3 = document.createElement("h3");
  question3.textContent = "What is the correct translation of this sentence?";
  document.body.appendChild(question3);

  var sentenceQuote = document.createElement("blockquote");
  sentenceQuote.textContent = "De repente, Miguel descubre un objeto misterioso en el closet.";
  document.body.appendChild(sentenceQuote);

  var div3 = document.createElement("div");
  document.body.appendChild(div3);

  var ans5 = document.createElement("button");
  ans5.textContent = "Suddenly, Miguel discovers a mysterious object in the closet.";
  div3.appendChild(ans5);

  var ans6 = document.createElement("button");
  ans6.textContent = "Meanwhile, Miguel picks up a pair of pants in his closet.";
  div3.appendChild(ans6);

  function rightAns3() {
    ans5.textContent = "Correcto! 😉";
    ans5.style.backgroundColor = "green";
    div3.removeChild(ans6);
    setTimeout(() => {
      div3.removeChild(ans5);
      document.body.removeChild(question3);
      document.body.removeChild(sentenceQuote);
      paragraph4();
      numCorrecto += 1;
    }, 2000);
  }

    function wrongAns3() {
      ans6.textContent = "Incorrecto 🤔";
      ans6.style.backgroundColor = "red";
      div3.removeChild(ans5);
      setTimeout(() => {
        div3.removeChild(ans6);
        document.body.removeChild(question3);
        document.body.removeChild(sentenceQuote);
        paragraph4();
        numIncorrecto += 1;
      }, 2000);
    }
  ans6.addEventListener("click", wrongAns3);
  ans5.addEventListener("click", rightAns3);
};

function paragraph4() {
  var paragraphCuatro1 = document.createElement("p");
  paragraphCuatro1.textContent = "Finalmente, Miguel llega a la parque, pero no hay nadie. Es casi la noche y Miguel regresa a su casa. Cuando llega a su casa, no hay nada, y tambien, hay silencio. Él va a su dormitorio y abre la puerta...";
  paragraphCuatro1.id = "paragraphCuatro1";
  document.body.appendChild(paragraphCuatro1);

  setTimeout(() => {
   var birthdayImg = document.createElement("img");
   birthdayImg.src = "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   birthdayImg.id = "birthdayImg";
   document.body.appendChild(birthdayImg);

   var paragraphCuatro2 = document.createElement("p");
   paragraphCuatro2.textContent = 'Su familia y sus amigos cantan "feliz cumpleaños a ti". Entonces, su madre le da un regala a Miguel. Es la objeto misterioso. Él abre la regala y encuentra un telefono celular y está feliz. Les dice a su padres y amigos "gracias!"';
   paragraphCuatro2.id = "paragraphCuatro2";
  document.body.appendChild(paragraphCuatro2);

  var question4 = document.createElement("h3");
  question4.textContent = "What happens at the end of the story";
  document.body.appendChild(question4);

  var div4 = document.createElement("div");
  document.body.appendChild(div4);

  var ans7 = document.createElement("button");
  ans7.textContent = "Brandon celebrated his sister's birthday with his family and her friends.";
  div4.appendChild(ans7);

  var ans8 = document.createElement("button");
  ans8.textContent = "His family and friends sang happy birthday to him and his mom gave him a cell phone as a gift.";
  div4.appendChild(ans8);

   function rightAns4() {
    ans8.textContent = "Correcto! 😉";
    ans8.style.backgroundColor = "green";
    div4.removeChild(ans7);
    setTimeout(() => {
      div4.removeChild(ans8);
      document.body.removeChild(question4);
      numCorrecto += 1;
      end();
    }, 2000);
  }

    function wrongAns4() {
      ans7.textContent = "Incorrecto 🤔";
      ans7.style.backgroundColor = "red";
      div4.removeChild(ans8);
      setTimeout(() => {
        div4.removeChild(ans7);
        document.body.removeChild(question4);
        numIncorrecto += 1;
        end();
      }, 2000);
    }
  ans7.addEventListener("click", wrongAns4);
  ans8.addEventListener("click", rightAns4);
  }, 5000);
};

function end () {
  document.body.removeChild(header);
  document.body.removeChild(header2);
  var paragraphFirst = document.getElementById("paragraphUno");
  var paragraphSecond = document.getElementById("paragraphDos");
  var paragraphThird = document.getElementById("paragraphTres");
  var paragraphFourth1 = document.getElementById("paragraphCuatro1");
  var paragraphFourth2 = document.getElementById("paragraphCuatro2");
  var bdayImg = document.getElementById("birthdayImg");
  document.body.removeChild(paragraphFirst);
  document.body.removeChild(paragraphSecond);
  document.body.removeChild(paragraphThird);
  document.body.removeChild(paragraphFourth1);
  document.body.removeChild(paragraphFourth2);
  document.body.removeChild(bdayImg);

  var completed = document.createElement("h1");
  completed.textContent = "Activity Completed";
  document.body.appendChild(completed);

  var endGif = document.createElement("img");
  endGif.src = "/giphy.gif";
  document.body.appendChild(endGif);

  var resultHeading = document.createElement("h1");
  resultHeading.textContent = "Results";
  document.body.appendChild(resultHeading);
  
  var percentCor = document.createElement("h2");
  percentCor.textContent = numCorrecto/4 * 100 + "% Correcto";
  document.body.appendChild(percentCor);
  
  var corAndIncor = document.createElement("div");
  document.body.appendChild(corAndIncor);

  var quanCor = document.createElement("p");
  quanCor.textContent = "You got " + numCorrecto + " correct!"
  quanCor.style.color = "green";
  quanCor.style.fontStyle = "bold";
  quanCor.style.padding = "20px 5px";
  corAndIncor.appendChild(quanCor);

  var quanIncor = document.createElement("p");
  quanIncor.textContent = "You got " + numIncorrecto + " incorrect :(";
  quanIncor.style.color = "red";
  quanIncor.style.fontStyle = "bold";
  quanIncor.style.padding = "20px 5px";
  corAndIncor.appendChild(quanIncor);

  var print = document.createElement("button");
  print.textContent = "Print Results";
  document.body.appendChild(print);

  var retry = document.createElement("button");
  retry.textContent = "Try Again";
  document.body.appendChild(retry);

  function reloadPage () {
    location.reload();
  }

  function printResults () {
    window.print();
  }

  retry.addEventListener("click", reloadPage);
  print.addEventListener("click", printResults);
};
