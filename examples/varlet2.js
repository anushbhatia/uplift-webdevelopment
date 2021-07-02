function colour() {

    setInterval(function () {

        if (document.getElementById('var').style.color == 'black')
            var col1 = 'blue';
        else
            col1 = 'black';

        // setting value of color 1 through var

        if (document.getElementById('let').style.color == 'black') {
            let col2 = 'red';
        } else {
            col2 = 'black';
        }

        // setting value of color 2 through let

        document.getElementById('var').style.color = col1;

        document.getElementById('let').style.color = col2;

        // changing color of h1 in html
    }, 500);

}