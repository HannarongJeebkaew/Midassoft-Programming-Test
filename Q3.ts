function getQuestionPart(phrase :string[]): string[] {
    // สร้างฟังก์ชันย่อยเพื่อหาส่วนของคำที่ไม่มีคำร่วมกัน
    function removeCommonPart(mainWord: string, commonWord: string): string {
        return mainWord.replace(commonWord, '');
    }

    // ตรวจสอบคำร่วมกันระหว่างคำแรกกับคำที่สอง
    let commonWord: string = "";
    for (let i = 0; i < phrase[0].length; i++) {
        for (let j = i + 1; j <= phrase[0].length; j++) {
            let subStr: string = phrase[0].substring(i, j);
            if (phrase[1].includes(subStr) && phrase[2].includes(subStr) && subStr.length > commonWord.length) {
                commonWord = subStr;
            }
        }
    }
    // ลบส่วนของคำร่วมกันออกจากคำทั้งสาม
    return phrase.map(word => removeCommonPart(word, commonWord));
}

// ทดสอบฟังก์ชัน
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));
console.log(getQuestionPart(["TESTEIEI", "TESTASDF", "TESTXEEIEI"])); //[ 'EIEI', 'ASDF', 'XEEIEI' ]
