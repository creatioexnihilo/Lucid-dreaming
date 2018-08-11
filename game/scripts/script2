//executes when the window is loaded

		window.onload = function(){
			//loads the background image
			loadBg();

			function loadBg(){


				var html=document.getElementsByTagName("HTML")[0];

			 html.style.background = "url('images/jjj.jpg') no-repeat center center";
			 html.style.backgroundSize="cover";

			}



			// get the image and set the initial position
			var x=0;
			var obj= document.getElementById("img1");

			//set a value to increment the value of the position
			var value=1;



			//creates a loop 
			var t = setInterval(move,1);

			
			//specify how things should move
			function move(){

				//if the position is greater than 6 the value will be negated so the position will decrease
				if (x>6)
					{value=-value;
						
					}

				//if the position is less than 0 the value will be negated again so the position will increase
				if (x<0)
				{
					value=-value;
				}


				//adds the value to the current position
				x=x+value;

				//display the image where it should be
				obj.style.left=x+"px";
				

			}

			//calls this function (f1()) after 0.5 seconds

			setTimeout(f1(),500);
		 



			function f1(){

				//create paragraph and text node
		 var p=document.createElement("p");

		 p.style.textShadow = "2px 1px 1px #8A2BE2";

		 var text=document.createTextNode("Fool! I managed to trick you...now I'm free to control this realm.");
		 p.appendChild(text);

		 //get the text area and the important element
		 var div = document.getElementById("textarea");
		 var aci = document.getElementById("aci");

		 //adds the paragraph before aci
		 div.insertBefore(p,aci);


		 //calls the function after a while
		 setTimeout(function (){div.removeChild(p);   setTimeout(f2(),500);},6000);


		}


			function f2(){

		  //create paragraph and text node
		  var p2=document.createElement("p");


		   //adds shadow to the paragraph
		   p2.style.textShadow = "2px 1px 1px #8A2BE2";

		  var text2=document.createTextNode("I'll make you wish you never came here at all...");
		  p2.appendChild(text2);

		  //get the text area and the important element
		  var div = document.getElementById("textarea");
		 var aci = document.getElementById("aci");

		  //adds the paragraph before aci
		  div.insertBefore(p2,aci);

		   //calls the function after a while
		   setTimeout(function (){div.removeChild(p2);   setTimeout(f3(),500);},8000);

		}

		  	function f3(){
		  //create paragraph and text node
		  var p3=document.createElement("p");

		   p3.style.textShadow = "2px 1px 1px #8A2BE2";


		  var text3=document.createTextNode("How could you be so naive...Well I won't blame you...you never had a choice...You thought you were free,didn't you?");
		  p3.appendChild(text3);

		  //get the text area and the important element
		  var div = document.getElementById("textarea");
		 var aci = document.getElementById("aci");

		 //adds the paragraph before aci
		 div.insertBefore(p3,aci);

		  //calls the function after a while
		  setTimeout(function (){div.removeChild(p3);   setTimeout(f4(),500);},10000);

		}


		  	function f4(){

		  //create paragraph and text node
		  var p4=document.createElement("p");

		   p4.style.textShadow = "2px 1px 1px #8A2BE2";

		  var text4=document.createTextNode("Think again...Next time you'll wake up in a nightmare........Your Best Nightmare...");
		  p4.appendChild(text4);

		  //get the text area and the important element
		  var div = document.getElementById("textarea");
		 var aci = document.getElementById("aci");

		 //adds the paragraph before aci
		 div.insertBefore(p4,aci);

		  //calls the function after a while
		  setTimeout(function (){div.removeChild(p4);   setTimeout(f5(),500);},10000);


		}

			function f5(){

		  //create paragraph and text node
		  var msg=document.createElement("p");

		   msg.style.textShadow = "2px 1px 60px #0000ff";


		  var txt=document.createTextNode("*WAKE UP*");
		  msg.appendChild(txt);



		  //get the text area and the important element
		  var div = document.getElementById("textarea");
		 var aci = document.getElementById("aci");


		  //adds the paragraph before aci,changes the color of the text
		  div.style.color="black";
		  div.insertBefore(msg,aci);

		  //calls a function
		  awake();

		}


		function awake(){

			//hide the image and chande the background image
			obj.style.display="none";


			var html=document.getElementsByTagName("HTML")[0];

			 html.style.background = "url('images/fff.jpg') no-repeat center center";
			 html.style.backgroundSize="cover";



			//get the audio element and then pause it
			var audio=document.getElementById("audio");
			audio.pause();


			

			setTimeout(function(){  setInterval(cryptic,10);  },2000);
			

		}




					//important variable for the following if statement
					 var ok=1;

		function cryptic(){

			//gets the special element
			 
			var p=document.getElementById("special");
			 p.style.textShadow = "2px 1px 100px #000";
			
			//get random numbers from 65 to 90
			var q = Math.floor( Math.random() * 25 ) + 65 ;
			var w = Math.floor( Math.random() * 25 ) + 65 ;
			var e = Math.floor( Math.random() * 25 ) + 65 ;
			var r = Math.floor( Math.random() * 25 ) + 65 ;


			//transform numbers in letters
			var Q = String.fromCharCode(q);
			var W = String.fromCharCode(w);
		    var E = String.fromCharCode(e);
		    var R = String.fromCharCode(r);


		    //make a string
		    var str = Q + W + E +R;

		    //modify the special element
		    p.innerHTML = str;

		    //add new text to a paragraph
		     var wake=document.createElement("p");

		      p.style.textShadow = "2px 1px 60px #0000ff";

		  	 var string=document.createTextNode("*You have to wake up!*");
		  	 wake.appendChild(string);



		  	 var div = document.getElementById("textarea");
		  	 var there = document.getElementById("there");


		  	//insert the text once
		  	 if (ok){
		  	 	 div.insertBefore(wake,there);
		  	 	 ok=0;
		  	 }
		  	
		  	 


		}
		


		}
		
