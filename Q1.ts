function getHandScore(inputStr: string): number | string {
  // กำหนดค่าของการ์ด
  const cardValues: { [key: string]: number } = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 10,
    Q: 10,
    K: 10,
    A: 11,
  };
  let sumvalue: number = 0; // รวมคะแนน
  const cards: string[] = inputStr.split(" ");
  const suits: string[] = cards.map((card) => card[0]);
  // ตรวจสอบว่าสัญลักษณ์หรือตัวเลขทั้งหมดเหมือนกันหรือไม่
  const ranks: string[]=[];
  for (const card of cards) {
    if (card.length >= 4) {
      return "input ผิดพลาด";
    }
    ranks.push(card.length > 2 ? card.slice(1,3) : card[1]);
    sumvalue+=(cardValues[card.length > 2 ? card.slice(1,3) : card[1]]);
  }
  if (new Set(suits).size !== 1 && new Set(ranks).size !== 1) {
    return "input ผิดพลาด";
  }
  // ตรวจสอบว่าการ์ดมีตัวเลขเหมือนกันทั้งสามใบหรือไม่
  if (ranks.filter((rank) => rank === ranks[0]).length === 3) {
    if (ranks[0] === "A") {
      return 35;
    } else {
      return 32.5;
    }
  }
  return sumvalue

  


}

// ทดสอบฟังก์ชันด้วยรูปแบบใหม่
const testInput1: string = "S8 H8 D10"; //ถ้าinput ไม่เหมือนกันจะไม่แจ้งเตือน
const testInput2: string = "S8 S6 S10"; //Output 24
const testInput3: string = "SA HA DA"; //Output 35
const testInput4: string = "S2 H2 D2"; //Output 32.5
console.log(getHandScore(testInput1));
console.log(getHandScore(testInput2));
console.log(getHandScore(testInput3));
console.log(getHandScore(testInput4));
