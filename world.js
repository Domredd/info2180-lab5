window.onload = function (){
    let btn = document.getElementById("lookup");
    let btn_cities = document.getElementById("Clookup");
    let result = document.getElementById("result");
    let text = document.getElementById("country");
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () =>{
        let output = xhr.responseText;
        result.innerHTML = output;
    });

    btn.addEventListener("click", () => {
        let url = 'world.php?country='+text.value;
        xhr.open('GET',url);
        xhr.send();
    });

    btn_cities.addEventListener("click", () => {
        let url = 'world.php?country='+text.value+'&context=cities';
        xhr.open('GET',url);
        xhr.send();
    });
}