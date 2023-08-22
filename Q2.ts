function getClockAngle(hh_mm: string): number {
    // แยกชั่วโมงและนาทีจาก input
    const [hour, minute] = hh_mm.split(":").map(num => parseInt(num, 10));
    
    // คำนวณมุมของเข็มนาที 1 นาทีขึ้น 6 องศา
    const minuteAngle = 6 * minute;
    
    // คำนวณมุมของเข็มชั่วโมง (รวมมุมที่เพิ่มเติมเมื่อเข็มนาทีเคลื่อนที่)
    const hourAngle = (hour % 12) * 30 + (minute/60) * 30;
    
    // หาความต่างระหว่างมุมของเข็มนาทีและเข็มชั่วโมง
    let angleDifference = Math.abs(hourAngle - minuteAngle);
    // console.log("angleDifference",angleDifference);
    
    // คืนค่ามุมที่เล็กกว่าระหว่าง angleDifference และ 360 - angleDifference
    // console.log(Math.min(angleDifference, 360 - angleDifference));
    return Math.min(angleDifference, 360 - angleDifference);
}

// ทดสอบฟังก์ชัน
console.log(getClockAngle("09:00"));  // ควรได้ผลลัพธ์ 90
console.log(getClockAngle("17:30"));  // ควรได้ผลลัพธ์ 15
console.log(getClockAngle("18:30"));  // ควรได้ผลลัพธ์ 15
console.log(getClockAngle("19:30"));  // ควรได้ผลลัพธ์ 15
console.log(getClockAngle("12:00"));  // ควรได้ผลลัพธ์ 0
console.log(getClockAngle("00:00"));  // ควรได้ผลลัพธ์ 0