function main(){
	var urlRSS = document.getElementById("monChampRSS").value;
	var urlWeb = document.getElementById("monChampWeb").value;
	var urlVideo = document.getElementById("monChampVideo").value;

	var frame;
	var source;
	if(urlVideo != ""){
		document.getElementById("frameVideo").style.visibility = 'visible';
		frame = document.getElementById("frameVideo");
		urlVideo = "http://www.youtube.com/embed/"+urlVideo+"?autoplay=0origin=http://example.com";
		source = urlVideo;

		//Affichage de la fenetre demandée
		frame.setAttribute("src", source);
		frame.setAttribute("width", "900");
		frame.setAttribute("height", "450");

		document.getElementById("monChampVideo").value = "";
	}
	if(urlWeb != ""){
		//On récupère la frame et on lui assigne celle RSS
		 frame = document.getElementById("frameRSS");

		 //Passage par proxy https://crossorigin.me/ pour accéder à la ressource
		 //var url="https://crossorigin.me/"+urlRSS;	//A décomenter pour utiliser crossorigin

		 //On modifie la source de la frame
		 frame.setAttribute("src", urlWeb); //Accés par crossorigin , Error 522 : Website is offline No cached version of this page is available.
											//Nous avons donc décidé de laisser le lien "brut"

		 //Modifier "urlRSS" par "url" a la ligne du dessus si la ligne "var url" est décomentée

		 //On augmente la taille pour l'affichage
		 frame.setAttribute("width", "900");
		 frame.setAttribute("height", "450");

		 //On affiche la frame
		 document.getElementById("frameRSS").style.visibility = 'visible';

		document.getElementById("monChampRSS").value = "";
	}
$(document).ready(function(){

var x=10; // your X iteration limit

// load the xml data. it is parsed by jquery
		$.get(urlRSS, function(data) {
		    var $xml = $(data);

		    $xml.find("item").each(function(i, val) { // find the items in the rss and loop

		        // create an item object with all the necessary information out of the xml
		        var $this = $(this),
		            item = {
		                title: $this.find("title").text(),
		                link: $this.find("link").text(),
		                description: $this.find("description").text(),
		                pubDate: $this.find("pubDate").text(),
		                author: $this.find("author").text(),
		                guid: $this.find("guid").text()
		        };
		        // replace the CDATA in the item title
		        item.title = item.title.replace("<![CDATA[", "").replace("]]>", "");

		        // #feed selects the ul element with the id feed
		        // and append() appends a newly created li element
		        // to the ul
		        $('#feed').append($('<li><a href="' +item.guid +'">' +item.title +'</a> + <p class="item"> ' + item.description + '</p></li>'));

		        return i<(x-1); // (stop after x iterations)
		    });
		});
		});

}
