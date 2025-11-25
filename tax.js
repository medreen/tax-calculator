document.getElementById("tax_form").addEventListener("submit",function(event){
event.preventDefault()

    let basic_salary = Number(document.getElementById("basic").value)
    let benefits = Number(document.getElementById("benefits").value)

    function getGross(basic, benefits){
        return basic + benefits
    }

    let gross = getGross(basic_salary, benefits);    
    document.getElementById("gross").innerHTML = gross;

})