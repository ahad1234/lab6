function loadDoc() {
  var colorData;

		var oReq = new XMLHttpRequest();
		oReq.onload = reqListener;
		oReq.open("get", "data.json", true);
		oReq.send();

		function reqListener(e) {
			colorData = JSON.parse(this.responseText);
			
			var i;

			for (i = 0; i < colorData.length; i++)
			{
				var li = document.createElement("li");
				var ellipse = document.createElement("div");
				ellipse.className = "ell";
				ellipse.style.background = colorData[i].value;
				li.className = "fitem";
				li.id = "first" + i;
				var t = document.createTextNode(colorData[i].color);
				li.appendChild(t);
				li.appendChild(ellipse);
				
				document.getElementById("first").appendChild(li);

			}

			for (i = 0; i < colorData.length; i++)
			{
				var li = document.createElement("li");
				var ellipse = document.createElement("div");
				ellipse.className = "ell";
				ellipse.style.background = colorData[i].value;
				li.className = "sitem";
				li.id = "second" + i;
				var t = document.createTextNode(colorData[i].value);
				li.appendChild(t);
				li.appendChild(ellipse);
				document.getElementById("second").appendChild(li);

			}
		}
}

 