document.getElementById("tax_form").addEventListener("submit",function(event){
event.preventDefault()

    let basic_salary = Number(document.getElementById("basic").value)
    let benefits = Number(document.getElementById("benefits").value)

    function getGross(basic, benefits){
        return basic + benefits
    }

    let gross = getGross(basic_salary, benefits);    
    document.getElementById("gross").innerHTML = gross;

    function findNhif(gross){
    let nhif = 0
    if (gross >= 0 && gross <=5999) {
        nhif += 150
    } else if (gross >= 6000 && gross <=7999) {
        nhif += 300
    } else if (gross >= 8000 && gross <=11999) {
        nhif += 400
    } else if (gross >= 12000 && gross <=14999) {
        nhif += 500
    } else if (gross >= 15000 && gross <=19999) {
        nhif += 600
    } else if (gross >= 20000 && gross <=24999) {
        nhif += 750
    } else if (gross >= 25000 && gross <=29999) {
        nhif += 850
    } else if (gross >= 30000 && gross <=34999) {
        nhif += 900
    } else if (gross >= 35000 && gross <=39999) {
        nhif += 950
    } else if (gross >= 40000 && gross <=44999) {
        nhif += 1000
    } else if (gross >= 45000 && gross <=49999) {
        nhif += 1100
    } else if (gross >= 50000 && gross <=59999) {
        nhif += 1200
    } else if (gross >= 60000 && gross <=69999) {
        nhif += 1300
    } else if (gross >= 70000 && gross <=79999) {
        nhif += 1400
    } else if (gross >= 80000 && gross <=89999) {
        nhif += 1500
    } else if (gross >= 90000 && gross <=99999) {
        nhif += 1600
    } else if (gross >= 10000) {
        nhif += 1700
    } 
    return nhif
}

let nhif = findNhif(gross);
document.getElementById("nhif").innerHTML = nhif;

function findNssf(gross){
    let nssf = 0
    if (gross >= 18000){
        nssf += 0.6 * gross
    } else {
        nssf = 0
    }
    return nssf
}

let nssf = findNssf(gross);
document.getElementById("nssf").innerHTML = nssf;


function getNhdf(gross){
    let nhdf = gross * 0.015
    return nhdf
}

let nhdf = getNhdf(gross);
document.getElementById("nhdf").innerHTML = nhdf;

function findTaxableIncome(gross, NSSF, NHDF, NHIF){
    let taxable_income = gross - (NSSF + NHDF + NHIF)
    return taxable_income
}

let taxable_income = findTaxableIncome(gross, nssf, nhdf, nhif);
document.getElementById("taxable_income").innerHTML = taxable_income;

function findPaye(tax_inc){
    let paye
    let relief = 2400
    if (tax_inc <= 24000 && tax_inc >= 0){
        paye = 24000 * 0.1
    } else if (tax_inc <= 32333 && tax_inc > 24000){
        paye = (24000 * 0.1) + 8333 * 0.25
    } else if (tax_inc <= 500000 && tax_inc > 32333){
        paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) 
    } else if (tax_inc <= 800000 && tax_inc > 500000){
        paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + 300000 * 0.325
    } else if (tax_inc > 800000){
        paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) +( 300000 * 0.325) + (800000 * 0.35);
    }
    return paye - relief
}

let paye = findPaye(taxable_income);
document.getElementById("paye").innerHTML = paye;

function getNetSal(gross, nhif, nhdf, nssf, payee){
    let net_sal = gross - (nhif + nhdf + nssf + payee)
    return net_sal
}

let net_salary = getNetSal(gross, nhif, nhdf, nssf, paye);
document.getElementById("net_salary").innerHTML = net_salary;

}) 