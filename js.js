
const Validalas={
    pattern: {
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        jelszo: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    },

    validate(text, type){
        return text.match(this.pattern[type]) ? "Érvényes " + type : "Érvénytelen " + type;
    }
}

console.log(Validalas.validate('kisspeter@gmail.com', 'email'));
console.log(Validalas.validate('Peti1234?', 'jelszo'));

function ellenorzes() {
    const email=document.getElementById("email").value.trim();
    const jelszo=document.getElementById("jelszo").value.trim();
    const jelszoujra=document.getElementById("jelszoujra").value.trim();

    ellenorzesEmail();

    const eredmenyek=[
        Validalas.validate(email, "email"),
        Validalas.validate(jelszo, "jelszo"),
        Validalas.validate(jelszoujra, "jelszo")
    ];
    alert(eredmenyek.join("\n"));
}

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const email = "kisspeter@gmail.com";
console.log(email.match(emailPattern));

function ellenorzesEmail() {
    const email = document.getElementById("email").value.trim();
    if (email.match(emailPattern)) {
        alert("Az email cím helyes!");
    } else {
        close();
    }
}


