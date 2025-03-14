const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const formattedDate = `Data atual: ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

document.getElementById("data-atual").innerText = formattedDate;

function calcularDiasParaAnoNovo() {
    const now = new Date();
    const anoAtual = now.getFullYear();
    const anoNovo = new Date(anoAtual + 1, 0, 1);
    const diffMilissegundos = anoNovo - now;
    const diasRestantes = Math.ceil(diffMilissegundos / (1000 * 60 * 60 * 24)); // Converter para dias

    document.getElementById("dias-restantes").innerText = `Faltam ${diasRestantes} dias para o Ano Novo!`;
}

document.getElementById("calcular-btn").addEventListener("click", calcularDiasParaAnoNovo);
