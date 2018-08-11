				//if right button is pressed
				function right(){
					//get the button and the div element
					var x=document.getElementById("button1");
					var div=document.getElementById("demo");
					//remove the button
					x.style.display="none";
					alert("Oops your astral body won't move in that direction");
					alert("That sucks!");


				}
				//if the left button is pressed

				function left(){
					alert("You seem atracted to this direction like something is pushing you in this way.");
					//create a paragraph and a text node
					var x=document.createElement("p");
					var y=document.createTextNode("*You encounter a new entity beside yourself.*");
					//important element
					var aci=document.getElementById("aci");
					//attach the text to the created paragraph
					x.appendChild(y);
					//get the div and attach the paragraph to it
					var div=document.getElementById("demo");
					 //div.appendChild(x);
					 //insert the text before aci
					div.insertBefore(x,aci);


					//get the first image and display it
					var img1=document.getElementById("img1");
					img1.style.display="inline";
					
					 //remove both buttons
					 var btn2=document.getElementById("button2");
					 div.removeChild(btn2);
					 var btn1=document.getElementById("button1");
					 div.removeChild(btn1);

					 hello();


				}
			
					//dialog function
					function hello()
					{
						//get the important element
						var aci=document.getElementById("aci");


						//create paragraph and text node
						var p=document.createElement("p");
						var text=document.createTextNode("Hello...My name is Amber.You seem to be lost.I can help you...What's your name?");


						//attach the text to the paragraph
						p.appendChild(text);


						//get the div and attach the paragraph to it
						var div = document.getElementById("demo");
						div.insertBefore(p,aci);

						var form=document.getElementById("form");
						form.style.display="inline";
						//document.addEventListener("submit",setName);



					}

					function setName()
					{
						//tell me your name
						var name=document.getElementById("name");
						//getname and attach it to a string
						var zzz=name.value;
						var text=document.createTextNode(zzz + "?"+" I heard that name before!  It sounds somehow familliar.");
						var p=document.createElement("p");
						p.appendChild(text);

						//important element
						var aci=document.getElementById("aci");
						//get div and place the paragraph before aci
						var div=document.getElementById("demo");
						div.insertBefore(p,aci);

						//get the form and make it invisible
						var form=document.getElementById("form");
						form.style.display="none";

						var p=document.createElement("p");
						var text=document.createTextNode("...well...anyway...Soo..." + zzz +" ... you want to exit this realm of chaos.Right?");
						p.appendChild(text);

						div.insertBefore(p,aci);


						//choose();
						document.getElementById("yes").style.display="inline";
						document.getElementById("no").style.display="inline";



					}

					//function choose
					function no()
					{//get the no button
						var no =document.getElementById("no");
						no.innerHTML="Yes";
						alert("Yes");
						yes();


					}

					function yes()
					{
						//get the yes button
						var yes=document.getElementById("yes");
						var no =document.getElementById("no");
						//hide both buttons
						yes.style.display="none";
						no.style.display="none";

						//change the bg image
						document.body.style.backgroundImage="url('images/sg.jpg')";
						document.body.style.backgroundSize="cover";

						allright();



					}


					function allright(){

						//create paragraph and text
						var p=document.createElement("p");
						var text=document.createTextNode("All right...all you have to do is to go through this path.");
						p.appendChild(text);

						//display the text
						var aci = document.getElementById("aci");
						var div = document.getElementById("demo");
						div.insertBefore(p,aci);

						//setTimeout(function (){alert("hello there");},2000);
						//prompt
						setTimeout(function (){promptlol();},1500);

					}

					function promptlol(){

						var answer=prompt("To advance you have to say my name backwards!");
						var ok=0;
						


						while(!ok)
						{
							if (answer!="rebmA")
							{
								alert("That's not right");
								answer=prompt("Try again");

							}
							else
							{
								alert("YOU IDIOT!!! >:D");
								ok=1;
								


							}

						}
						idiot();

					}


					function idiot(){

						//document.body.style.backgroundImage="url('jjj.jpg')";
						//document.body.style.backgroundSize="cover";

						window.location="part2.html";

					}
