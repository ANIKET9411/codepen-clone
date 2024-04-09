let html=document.querySelector(".HTML");
let css=document.querySelector(".css");
let JS=document.querySelector(".JS");
let ui=document.querySelector(".ui");
window.addEventListener('load',()=>{
    html.value=`
    <body>
        
    </body>
    `;
})
function htmlfunc(){
    ui.innerHTML="";
    console.log(html.value);
    ui.innerHTML=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>${css.value}</style>
    </head>${html.value}<script src="codepen.js"></script></html></html>`;
    eval(JS.value);
    
}
html.addEventListener('input',htmlfunc);
function cssfunc(){
    ui.innerHTML="";
    ui.innerHTML=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>${css.value}</style>
    </head>${html.value}<script src="codepen.js"></script></html>`;
    eval(JS.value);
}
css.addEventListener('input',cssfunc);
JS.addEventListener('input',()=>{
    // ui.innerHTML="";
    // ui.innerHTML=`<!DOCTYPE html>
    // <html lang="en">
    // <head>
    // <meta charset="UTF-8">
    // <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // <title>Document</title>
    // <style>${css.value}</style>
    // </head>${html.value}<script src="codepen.js"></script></html>`;
    eval(JS.value);
})
// let codeAsString = "let a='Hello, world!';console.log(a+'%');";
// eval(codeAsString); 
