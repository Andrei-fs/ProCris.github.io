function calc() {

    let selectedValue = document.getElementById("list").value;
    let suprafata = document.getElementById("suprafata").value;
    valoare = selectedValue * suprafata;
    document.getElementById("suma").innerHTML = valoare;

    console.log(valoare)

}