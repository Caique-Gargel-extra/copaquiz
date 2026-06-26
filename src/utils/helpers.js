function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}
export  function generateidPerDate({ tamanho }) {
    // Calcular o número total de dias desde 01/01/2000 até hoje
    const startDate = new Date(2000, 0, 1); // Janeiro é mês 0 em JavaScript
    const today = new Date();
    const totalDays = Math.floor(((today - startDate) - (1000 * 60 * 60 * 1)) / (1000 * 60 * 60 * 24));
    const randomValue = seededRandom(totalDays);
    const id = Math.floor(randomValue * tamanho);
    return id;
}