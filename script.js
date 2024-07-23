document.getElementById('deposit-btn').addEventListener('click', function() {
    document.querySelector('.deposit').style.display = 'block';
    document.querySelector('.withdraw').style.display = 'none';
});

document.getElementById('withdraw-btn').addEventListener('click', function() {
    document.querySelector('.deposit').style.display = 'none';
    document.querySelector('.withdraw').style.display = 'block';
});

document.getElementById('send-deposit').addEventListener('click', function() {
    const address = document.getElementById('doge-address').value;
    alert('Send DOGE to ' + address);
});

document.getElementById('send-withdraw').addEventListener('click', function() {
    const amount = document.getElementById('withdraw-amount').value;
    const address = document.getElementById('withdraw-address').value;
    alert('Withdraw ' + amount + ' DOGE to ' + address);
});