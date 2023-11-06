const named = document.getElementById("Name");
const email = document.getElementById("exampleInputEmail1");
const exemplo = document.getElementById("exemplo")
const message = document.getElementById("exampleFormControlTextarea1");
const submit = document.getElementById("submit");


(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('eveTFIxqPivUunqJX');
})(); 

function Emailjs(){
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // these IDs from the previous steps
            emailjs.sendForm('service_5rtitga', 'template_4in5myp', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }



submit.addEventListener('click',()=>{
    if (named.value == '' || email.value == '' || message.value == ''){
        alert("Campos vazios")
    }
    else{
        alert("Sucesso! Sua Mensagem foi enviada.")
        Emailjs()
    }
})