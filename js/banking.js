// update  diposite total 
const dipositeInputFild = document.getElementById('diposit-fild');
document.getElementById('diposit-button').addEventListener('click', function () {
    const previousTotalDipositeAmmountText = document.getElementById('diposite-total-ammount').innerText;
    const previousTotalDipositeAmmountFloatingNumber = parseFloat(previousTotalDipositeAmmountText);
    const ammountOfNewdipositinText = dipositeInputFild.value;
    const ammountOfNewdipositInFlotingNumber = parseFloat(ammountOfNewdipositinText);
    document.getElementById('diposite-total-ammount').innerText = previousTotalDipositeAmmountFloatingNumber + ammountOfNewdipositInFlotingNumber;
    // update  balance total
    const totalBalanceText = document.getElementById('total-balance').innerText;
    const totalBalanceAmmount = parseFloat(totalBalanceText);
    document.getElementById('total-balance').innerText = totalBalanceAmmount + ammountOfNewdipositInFlotingNumber;
    // console.log(totalBalanceAmmount + ammountOfNewdipositInFlotingNumber);

})




// update  withdeow total 
const widthrowInputFild = document.getElementById('withdrow-fild');
document.getElementById('withdrow-button').addEventListener('click', function () {
    console.log(widthrowInputFild.value);
})