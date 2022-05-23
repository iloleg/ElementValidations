function fun()
{
    var ddl = document.getElementById("cardtype");
    var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "selectcard")
    {
        alert("Please select a card type");
    }
}
function readElements()
{
    const x = document.forms["frm1"];
    let text = "";
    for (let i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}