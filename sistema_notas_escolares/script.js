// Pontue de 0 até 100. Converta a pontuação em Grades de "A até E".

const convert = (nota) => {
    if (nota >= 90) {
        letra = 'A';
    } else if (nota >= 80 && nota <= 89) {
        letra = 'B';
    } else if (nota >= 70 && nota <= 79) {
        letra = 'C';
    } else if (nota >= 60 && nota <= 69) {
        letra = 'D';
    } else if (nota < 60) {
        letra = 'E';
    }

    return letra;
}