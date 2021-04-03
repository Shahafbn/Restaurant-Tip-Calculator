function tipInput () {
    let mealPrice = document.getElementById("meal").value;
    let numOfDiners = document.getElementById("diners").value;
    let servQuality = document.getElementById("quality").value;
    let tip = tipCalc(parseInt(mealPrice), parseInt(numOfDiners), parseInt(servQuality));
    tipOutput(tip);
}

// meal * quality (in percents) / diners
function tipCalc (meal, diners, quality) {
    if (quality == 1) {
        return meal * 0.05 / diners;
    }
    else if (quality == 2) {
        return meal * 0.1 / diners;
    }
    else {
        return meal * 0.15 / diners;
    }
}

function tipOutput (tip) {
    document.getElementById('outputBox').removeAttribute('hidden');
    document.getElementById('tip').innerText = tip + " shekels!";
}

function closeOutputBox () {
    document.getElementById('outputBox').setAttribute('hidden', '');
}

