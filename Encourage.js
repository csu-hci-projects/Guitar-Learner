
export default function Encourage(incoming) {
    const messages = ["Keep it up, you're doing great!", "Absolutely killing it, queen!", "Well done my friend.", "You look beautiful when you study! Keep it up!", "The young grasshopper is learning."];
    let index = messages.indexOf(incoming);
    while (incoming === messages[index]) {
        index = Math.floor(Math.random() * 5);
    }
    return messages[index];
}