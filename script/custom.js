var number = Math.floor(Math.random() * 1000) + 1;
console.log(number);
var count = 9;



document.getElementById('check').onclick = function () {

    if (count > 0) {
        var usernum = document.getElementById('mynum').value;
        usernum = parseInt(usernum);
        var out = document.getElementById('out');

        if (usernum == number) {
            out.innerHTML = 'Congratulations you win!';
        } else if (usernum > number) {
            out.innerHTML = 'Your number is more. Try again.';
        } else if (usernum < number) {
            out.innerHTML = 'Your number is less. Try again.';
        }

        document.getElementById('count').innerHTML = count;
        count = count - 1;
    } else {
        alert('You lose! Wanna try again?')
        location.reload();
    }
}