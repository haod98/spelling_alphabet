const input = document.querySelector('input[name="input_text"]');
const words_container = document.querySelector('.container-words');
const word_list = document.querySelector('.container-words');
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
};

const valid_en = 'ABCDEFGHIJKLMNOPQRSTUVWYZ '

input.addEventListener('keyup', (e) => {
    text_value = e.target.value.trim().toUpperCase();
    word_list.innerHTML = '';
    let div = document.createElement('div');
    words_container.appendChild(div);
     for (let i = 0; i < text_value.length; i++) {
        const word = document.createElement('p');
        const char = text_value.charAt(i);
        if (valid_en.indexOf(char) !== -1) {
            if (char === ' ') {
                const new_div = document.createElement('div');
                div = new_div;
                words_container.appendChild(new_div);
            } else {
                word.textContent = `${char}- ${english[char.toUpperCase()]}`;
                div.appendChild(word);
            };
        };
    };

});

