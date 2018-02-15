document.addEventListener('DOMContentLoaded', function(){

  var summonCatsButton = document.querySelector('.summon-cats');

  summonCatsButton.addEventListener('click', function(){
    $.ajax({
      url: "http://bitkittens.herokuapp.com/cats.json",
      method: "GET",
      dataType: "JSON"
    }).done(function(responseData){
      // clear all the existing cat-box divs to make room for the new kitties
      document.querySelectorAll('.cat-box').forEach(function(box){
        box.innerHTML = "";
      });
      // now place each cat image in a div
      for (var i = 0; i < responseData.cats.length; i++) {
        var imgURL = responseData.cats[i].photo;
        imgEl = document.createElement('img');
        imgEl.src = imgURL
        imgEl.alt = "Photo of " + responseData.cats[i].name;
        imgEl.title = "" + responseData.cats[i].name;
        document.querySelector('#cat' + (i + 1)).appendChild(imgEl);
      }
    })
  })
});
