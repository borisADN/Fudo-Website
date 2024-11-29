// function averageRank() {
//     const averages = [9.75, 10, 12.75, 9.5, 15, 17, 19, 16, 16.5, 10];
//     const copyArray = [].concat(averages);
//     const newArray = copyArray.sort((a, b) => a - b);

//     for (let counter = 0; counter < averages.length; counter++) {
//         // Obtenez le rang en utilisant l'index dans le tableau trié
//         const rank = newArray.indexOf(averages[counter]) + 1;
//         console.log(`Moyenne: ${averages[counter]}\t\t\tRang: ${rank}`);
//     }
// }


// averageRank();
// function averageRank() {
//     const averages = [9.75, 10, 12.75, 9.5, 15, 17, 19, 16, 16.5, 10];

//     // Créez un tableau d'objets contenant les valeurs et leurs indices d'origine
//     const indexedAverages = averages.map((value, index) => ({ value, index }));

//     // Triez le tableau par valeur
//     indexedAverages.sort((a, b) => a.value - b.value);

//     // Créez un tableau pour les rangs
//     const ranks = new Array(averages.length);
    
//     // Calcul des rangs
//     let currentRank = 1;
//     let rankSum = 0;
//     let count = 0;

//     for (let i = 0; i < indexedAverages.length; i++) {
//         const { value, index } = indexedAverages[i];

//         // Accumule le rang pour les valeurs dupliquées
//         if (i > 0 && value === indexedAverages[i - 1].value) {
//             rankSum += currentRank;
//             count++;
//             ranks[index] = rankSum / (count + 1); // Calculer le rang moyen
//         } else {
//             // Finaliser le rang moyen pour les valeurs précédentes
//             if (count > 0) {
//                 const averageRank = rankSum / (count + 1);
//                 for (let j = i - count; j < i; j++) {
//                     ranks[indexedAverages[j].index] = averageRank;
//                 }
//             }
//             // Réinitialiser pour la nouvelle valeur
//             rankSum = currentRank;
//             count = 0;
//             ranks[index] = currentRank;
//         }

//         currentRank++;
//     }

//     // Finaliser le rang moyen pour les dernières valeurs
//     if (count > 0) {
//         const averageRank = rankSum / (count + 1);
//         for (let j = indexedAverages.length - count - 1; j < indexedAverages.length; j++) {
//             ranks[indexedAverages[j].index] = averageRank;
//         }
//     }

//     // Affiche les résultats
//     for (let i = 0; i < averages.length; i++) {
//         console.log(`Moyenne: ${averages[i]}\t\t\tRang: ${ranks[i]}`);
//     }
// }

// averageRank();
// function averageRank() {
//     const averages = [9.75, 10, 12.75, 9.5, 15, 17, 19, 16, 16.5, 10];

//     // Créez un tableau d'objets contenant les valeurs et leurs indices d'origine
//     const indexedAverages = averages.map((value, index) => ({ value, index }));

//     // Triez le tableau par valeur
//     indexedAverages.sort((a, b) => a.value - b.value);

//     // Créez un tableau pour les rangs
//     const ranks = new Array(averages.length);
//     const rankMap = new Map(); // Map pour stocker les rangs

//     // Initialisation des variables pour le calcul des rangs
//     let currentRank = 1;

//     for (let i = 0; i < indexedAverages.length; i++) {
//         const { value, index } = indexedAverages[i];

//         // Si la valeur précédente est la même, attribuez le même rang avec "e" aléatoirement
//         if (i > 0 && value === indexedAverages[i - 1].value) {
//             const previousRank = rankMap.get(indexedAverages[i - 1].index);
//             ranks[index] = Math.random() > 0.5 ? previousRank + 'e' : previousRank;
//         } else {
//             ranks[index] = currentRank.toString(); // Rang normal sans "e"
//             rankMap.set(index, currentRank.toString());
//             currentRank++;
//         }
//     }

//     // Affiche les résultats
//     for (let i = 0; i < averages.length; i++) {
//         console.log(`Moyenne: ${averages[i]}\t\t\tRang: ${ranks[i]}`);
//     }
// }

// averageRank();
// Définition des élèves et de leurs moyennes
const students = [
    { name: "Alice", average: 18.5 },
    { name: "Bob", average: 15.2 },
    { name: "Charlie", average: 19.8 },
    { name: "David", average: 16.1 },
    { name: "Eve", average: 17.4 },
    { name: "Frank", average: 14.9 },
    { name: "George", average: 18.2 },
    { name: "Helen", average: 16.8 },
    { name: "Ivan", average: 15.6 },
    { name: "Julia", average: 19.1 },
  ];
  
  // Fonction pour trier les élèves par moyenne décroissante
  function sortStudentsByAverage(students) {
    return students.sort((a, b) => b.average - a.average);
  }
  
  // Appel de la fonction pour trier les élèves
  const sortedStudents = sortStudentsByAverage(students);
  
  // Affichage des élèves classés
  console.log(" Classement des élèves par moyenne décroissante :");
  sortedStudents.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - Moyenne : ${student.average}`);
  });
