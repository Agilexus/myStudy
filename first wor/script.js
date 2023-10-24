function myFirsApp(name, age) {
    alert(`Привіт, мене звати ${name} і це моя перша програма`)

    function showSkills() {
        let skills = ['html', 'css', 'js'];

        for (let i = 0; i < skills.length; i++) {
            console.log(`Я володію ${skills[i]}`)
        }

        function checkAge() {
            if (age > 18) {
                console.log('В тебе чудові шанси стати розробником')
            } else {
                console.log('Круто що ти так рано задумався про майбутнє:)')
            }
        }
        checkAge();
    }

    showSkills();

    function calcPow(num) {
        return num ** 2;
    }

    console.log(calcPow(4));
}

myFirsApp('Oleksii', '31')