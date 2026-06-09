const hamburger = document.getElementById('menu-hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const assunto = document.getElementById('assunto').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        if (nome === '' || email === '' || assunto === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
            formContato.reset();
        }
    });
}