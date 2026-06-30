const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const keyboard = document.getElementById("keyboard");
const inputArea = document.getElementById("inputArea");
const result = document.getElementById("result");
const allResults = document.getElementById("allResults");
const lengthLabel = document.getElementById("length");

let input = [];

// キーボード生成
alphabet.forEach(letter => {

    const btn = document.createElement("button");
    btn.className = "key";

    const img = document.createElement("img");
    img.src = `images/${letter}.png`;
    img.alt = letter;

    btn.appendChild(img);

    btn.onclick = () => {
        input.push(letter);
        refreshInput();
    };

    keyboard.appendChild(btn);

});

// 入力表示更新
function refreshInput(){

    inputArea.innerHTML="";

    input.forEach(letter=>{

        const img=document.createElement("img");
        img.src=`images/${letter}.png`;

        inputArea.appendChild(img);

    });

    lengthLabel.textContent=input.length;

}

// シフト
function shiftLetter(letter, shift) {

    let pos = letter.charCodeAt(0) - 65;

    // 前方向へシフト
    let total = pos - shift;

    // Zをまたぐ（0未満になる）場合はさらに1文字進める
    if (total < 0) {
        total--;
   }

    // 0～25に補正
    total = (total % 26 + 26) % 26;

    return String.fromCharCode(total + 65);
}

// 変換
document.getElementById("convertBtn").onclick=()=>{

    const shift=input.length;

    let output="";

    input.forEach(letter=>{

        output+=shiftLetter(letter,shift);

    });

    result.textContent=output;
    // --------------------
    // 全シフト表示
    // --------------------

    allResults.innerHTML = "";

    for(let s = 0; s <= 15; s++){

        let text = "";

        input.forEach(letter=>{
            text += shiftLetter(letter, s);
        });

        const row = document.createElement("div");
        row.className = "shiftRow";
        row.textContent = `${String(s).padStart(2," ")}文字 : ${text}`;

        allResults.appendChild(row);

    }

};

// 削除
document.getElementById("deleteBtn").onclick=()=>{

    input.pop();
    refreshInput();

};

// クリア
document.getElementById("clearBtn").onclick=()=>{

    input=[];
    result.textContent="";
    refreshInput();

};