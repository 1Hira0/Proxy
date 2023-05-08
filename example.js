import fetch from "node-fetch";

async function yourUselessFunction(url="https://www.google.com"){
    var yourVariable = await fetch(url) //Don't use var. Just don't. use let
    /*
    Try this in a js file sourced to an html. It works here bc it's not sourced to html, it runs on Node.JS 
    Won't work bc CORS wants to protect the other site from being scraped by stealers(maybe you) in the html. 
    If it did, you can just make a request for a site's HTML and display the HTML on your site
    */
}

async function yourCopiedFuntion(url="https://www.google.com") {
    let response = await fetch(`http://localhost:3000/fetch?url=${url}`) 
    /*
    This works! Why? why of course this is a copied funtion. just joking, copied code never works, you have to adjust it(like i did for this proxy server-but it wasn't working)
    nothing to say here
    just sends your url to proxy>proxy makes request using your given url and sends the response back(here it sends the res.text() not the entire thing)
    */
}