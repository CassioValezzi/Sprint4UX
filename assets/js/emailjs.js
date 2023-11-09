const named = document.getElementById("Name");
const email = document.getElementById("exampleInputEmail1");
const exemplo = document.getElementById("exemplo")
const message = document.getElementById("exampleFormControlTextarea1");
const quest1 = document.getElementById("quest1");
const quest2 = document.getElementById("quest2");
const quest3 = document.getElementById("quest3");
const quest4 = document.getElementById("quest4");


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
    if ( quest1.value == '' || quest2.value == '' || quest3.value == '' || quest4.value == '' || message.value == ''){
        alert("Campos obrigatórios vazios\nPreencha os compos para mandar a mensagem")
    }
    else{
        Emailjs()
        alert("Sucesso! Sua Mensagem foi enviada.")
        
    }
})