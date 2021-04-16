const input = document.querySelector('input[name="input_text"]');
const words_container = document.querySelector('.container-words');
const word_list = document.querySelector('.container-words');
console.log(word_list);
const english = {
    "A": "Alpha",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu",
    " ": "---------------"
};



input.addEventListener('keyup', (e) => {
    text_value = e.target.value;
    word_list.innerHTML = '';
    const div = document.createElement('div');
    words_container.appendChild(div);

    console.log(e);
    for (let i = 0; i < text_value.length; i++) {
        const word = document.createElement('p');
        const char = text_value.charAt(i)
        word.textContent = `${char}- ${english[char.toUpperCase()]}`;
        div.appendChild(word);
    };

});

