function getHandScoreX(cards: string): number {

  let cardList: string[] = cards.split(' ');
  
  
  let values: {[key: string]: number} = {
      'A': 11,
      'K': 10,
      'Q': 10,
      'J': 10
  };
  
 
  let ranks: string[] = cardList.map(card => card.substring(1));
  if (new Set(ranks).size === 1) {
      if (ranks.includes('A')) {
          return 35.0;
      } else {
          return 32.5;
      }
  }
  

  let suitsScore: {[key: string]: number} = {'S': 0, 'C': 0, 'H': 0, 'D': 0};
  
  for (let card of cardList) {
      let suit: string = card[0];
      let rank: string = card.substring(1);
      let score: number = values[rank] || parseInt(rank);
      suitsScore[suit] += score;
  }
  

  let maxScore: number = Math.max.apply(null, Object.keys(suitsScore).map(key => suitsScore[key]));
  
  return maxScore;
}
console.log(getHandScoreX("S3 H3 C3")); //32.5
console.log(getHandScoreX("S8 S10 CA")); //18
console.log(getHandScoreX("S2 S3 CA")); //11
