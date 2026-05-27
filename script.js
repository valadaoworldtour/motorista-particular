/* =========================================
   JAVASCRIPT: FUNCIONALIDADE DE REDIRECIONAMENTO
   ========================================= */

// 1. Configure o número de telefone real aqui (Apenas números)
const numeroDestino = "5511999999999"; 

// 2. Mensagem padrão
const mensagemPadrao = "Olá! Preciso de um motorista. Qual a sua disponibilidade?";

// 3. Chave Pix do Motorista
const chavePix = "celular:11999999999";

const btnWhatsapp = document.getElementById('btn-whatsapp');
const btnCall = document.getElementById('btn-call');
const btnCopyPix = document.getElementById('btn-copy-pix');
const btnShare = document.getElementById('btn-share');
const toastMessage = document.getElementById('toast-message');

// Evento de clique para o WhatsApp
btnWhatsapp.addEventListener('click', () => {
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagemPadrao)}`;
    window.open(url, '_blank');
});

// Evento de clique para Ligação
btnCall.addEventListener('click', () => {
    window.location.href = `tel:+${numeroDestino}`;
});

// Evento de clique para Copiar a Chave Pix
if (btnCopyPix) {
    btnCopyPix.addEventListener('click', () => {
        navigator.clipboard.writeText(chavePix).then(() => {
            toastMessage.classList.add('show');
            setTimeout(() => {
                toastMessage.classList.remove('show');
            }, 3000);
        });
    });
}

// Evento de clique para Compartilhar (Web Share API)
if (btnShare) {
    btnShare.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Motorista Particular',
                    text: 'Conheça meu motorista particular de confiança! Corridas seguras e confortáveis.',
                    url: window.location.href // Compartilha o link em que a página está hospedada
                });
            } catch (err) {
                console.log('Erro ao compartilhar: ', err);
            }
        } else {
            alert('Copie o link desta página para compartilhar com seus amigos!');
        }
    });
}