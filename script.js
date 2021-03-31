let section=document.querySelector('section');
let request = new XMLHttpRequest();
request.open('GET', "https://manjotbirsingh.github.io/module3/data/data.json");

request.responseType='json';
request.send();

request.onload = function() {
  loadDeals(request.response);
}

function loadDeals(jsonData) {
  let data = jsonData['weird-deals']
  
  for (let i = 0; i < data.length; i++) {
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p = document.createElement('p');
    
	h2.innerHTML = '<hr/>' + data[i].name + ' : ' + data[i].price; 
	
	img.setAttribute('src', 'https://manjotbirsingh.github.io/module3/images/' + data[i].image);
	
    p.innerHTML = data[i].description + ' <br/><br/>With Following Features : ' + data[i].features;
         
    article.appendChild(h2);
    article.appendChild(img);
    article.appendChild(p);
	
    section.appendChild(article); 
     
  }

}