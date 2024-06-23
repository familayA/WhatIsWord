var times = 0;
      var clickTimes = 0;
      var arrayLetters = new Array();
      var arraySpanIds = new Array();

      var wordarr=["צלחת","מלכה","מורה","מחשב"];
      let matchWord = "";
      var randomNumber =Math.floor(Math.random() * (3 - 0) + 0);
      console.log(randomNumber, wordarr);
      matchWord = wordarr[randomNumber];
      console.log(matchWord);
      window.addEventListener('load', function() {
        console.log("window")
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    });

      function addKeyboardListener()
      {
        document.getElementById("enter").addEventListener("click", checkIsMatchWord);
        var keyboardItems = document.getElementsByClassName("keyboard");
        for (const item of keyboardItems) {
          item.addEventListener('click', clickKeyBoard);
        }

       // loadJson();
      }

      function loadJson()
      {
       
      }

      function clickKeyBoard()
      {
        const arrLength = arrayLetters.length;
        let spanId = "key"+ Math.floor(arrLength / 4)  + arrayLetters.length;

        var element = event.target.querySelector("div");
        let selectedText = "";
        if(element != null)
        {
          selectedText = element.innerText;
          arrayLetters.push(element.innerText)
        }
        else{
          selectedText = event.target.innerText;
          arrayLetters.push(event.target.innerText)
        }

        console.log(arrayLetters);

        
        
        
        arraySpanIds.push(spanId);
        console.log(spanId);
        document.getElementById(spanId).innerText = selectedText;

        clickTimes++;

        if(clickTimes > 0 && clickTimes / 4 >= 1)
        {
          var keyboardItems = document.getElementsByClassName("keyboard");
          for (const item of keyboardItems) {
            item.setAttribute('disabled', '');
          }

          document.getElementById("enter").removeAttribute('disabled');
        }
      }

      function checkIsMatchWord()
      {
        var boolCount = 0;
        var rowNumber = 4*times;
          for(var i = arrayLetters.length-1; i>=rowNumber; i--)
          {
            let letter = arrayLetters[i];
            if(matchWord.indexOf(letter) >=0)
            {
              console.log("matchWord.indexOf(letter)", matchWord.indexOf(letter), letter);
              if(matchWord.indexOf(letter) == i - (rowNumber) )
              {
                document.getElementById(arraySpanIds[i]).classList.add("bool");
                boolCount++;
              }
              else{
                document.getElementById(arraySpanIds[i]).classList.add("pgia");
              }
            }
            else{
              document.getElementById(arraySpanIds[i]).classList.add("notInclude");
            }
          }
          
if(boolCount == 4)
{
  finalGame();
  return false;
}


          times++;

          clickTimes = 0;
          
            var keyboardItems = document.getElementsByClassName("keyboard");
            for (const item of keyboardItems) {
              item.removeAttribute('disabled');
            }
  
            document.getElementById("enter").setAttribute('disabled', '');

            if(times >= 4)
            {
              location.reload();
            }
      }

      function finalGame()
      {

          h=document.createElement("h3");
          var message = localStorage.getItem("name") +" " + localStorage.getItem("lastName") + " " +"כל הכבוד!!";
          text=document.createTextNode(message);
          h.appendChild(text);


           var p = document.getElementById("msg");
           p.appendChild(h);

           var div = document.getElementById("finalGame");
           div.setAttribute('open','');
          }
           
         function reload()
          {
location.reload();
          }