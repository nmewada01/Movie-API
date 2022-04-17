function moviefun() {
  //console.log("inside")
  let newmovie = document.querySelector("#searching").value;
 

  const url = `http://www.omdbapi.com/?apikey=adec4a1d&type=movie&t=${newmovie}`;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res);
      append(res);
    });
}

function append(film) {
    document.querySelector("#container1").innerHTML = null;

  if (film.Response !== "False") {

    if(film.imdbRating<8.5){
        let dibba = document.createElement("div");

        let image = document.createElement("img");
        image.src =film.Poster;
        
          

          let r = document.createElement("h2");
          r.innerText = "Not Recommended";
    
        let title = document.createElement("h2");
        title.innerText = `Movie: ${film.Title}`;
    
        let director = document.createElement("h3");
        director.innerText = `Director: ${film.Director}`;
    
        let released = document.createElement("h4");
        released.innerText = `Released: ${film.Released}`;
    
        let imdb = document.createElement("p");
        imdb.innerText = `IMDB: ${film.imdbRating}`;
    
        dibba.append(image,r, title, director, released, imdb);
    
        document.querySelector("#container1").append(dibba);
}
else{
    let dibba = document.createElement("div");

        let image = document.createElement("img");
        image.src =film.Poster;
         

          let r = document.createElement("h2");
          r.innerText = "Recommended by Naresh"
    
        let title = document.createElement("h2");
        title.innerText = `Movie: ${film.Title}`;
    
        let director = document.createElement("h3");
        director.innerText = `Director: ${film.Director}`;
    
        let released = document.createElement("h4");
        released.innerText = `Released: ${film.Released}`;
    
        let imdb = document.createElement("p");
        imdb.innerText = `IMDB: ${film.imdbRating}`;
    
        dibba.append(image,r, title, director, released, imdb);
    
        document.querySelector("#container1").append(dibba);
}
    
  } else {
    let image = document.createElement("img");
    image.src =
      "https://media4.giphy.com/media/PIBuZutkhuKqV09TEf/giphy.gif?cid=ecf05e472c6uvqhrjzo5rj4vyfi5e7pruk63soxek1xav9ty&rid=giphy.gif&ct=g";
    document.querySelector("#container1").append(image);
  }
}
