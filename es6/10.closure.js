// Fonction pure
// 1. Pour un input donné, j'ai toujours le meme output en sortie
// ex: addition
// contre exemple: Math.random()
// 2. Il ne faut pas modifier le contexte - ce qui est extérieur à la fonction - ne pas avoir avoir d'effet de bord
// 3. Une fonction pure est synchrone


let counter = 1;

const addFive = () => {
  counter = counter + 5;
}
addFive(); // returns 6 - modifie la variable counter - addFive n'est donc pas une fonction pure (mais utilise les closures)