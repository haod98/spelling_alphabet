const input = document.querySelector('input[name="input_text"]');
const words_container = document.querySelector('.container-words');
const word_list = document.querySelector('.container-words');
const en = document.querySelector('#english');
const de = document.querySelector('#german');

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

const german = {
    "A": "Anton",
    "Ä": "Ärger",
    "B": "Berta",
    "C": "Cäsar",
    "D": "Dora",
    "E": "Emil",
    "F": "Friedrich",
    "G": "Gustav",
    "H": "Heinrich",
    "I": "Ida",
    "J": "Julius",
    "K": "Kaufmann",
    "L": "Ludwig",
    "M": "Martha",
    "N": "Nordpol",
    "O": "Otto",
    "Ö": "Ökonom",
    "P": "Paula",
    "Q": "Quelle",
    "R": "Richard",
    "S": "Siegfried",
    "T": "Theodor",
    "U": "Ulrich",
    "Ü": "Übermut",
    "V": "Viktor",
    "W": "Willhelm",
    "X": "Xanthippe",
    "Y": "Ypsilon",
    "Z": "Zeppelin"
};

const valid_en = 'ABCDEFGHIJKLMNOPQRSTUVWYZ '
const valid_de = 'ABCDEFGHIJKLMNOPQRSTUVWYZÄÜÖ '

const spelling = (e, validation, lang) => {
    text_value = e.target.value.trim().toUpperCase();
    word_list.innerHTML = '';
    let div = document.createElement('div');
    words_container.appendChild(div);
    for (let i = 0; i < text_value.length; i++) {
        const word = document.createElement('p');
        const char = text_value.charAt(i);
        if (validation.indexOf(char) !== -1) {
            if (char === ' ') {
                const new_div = document.createElement('div');
                div = new_div;
                words_container.appendChild(new_div);
            } else {
                word.textContent = `${char}- ${lang[char.toUpperCase()]}`;
                div.appendChild(word);
            };
        };
    };
};

input.addEventListener('keyup', (e) => {
    if (de.checked) {
        spelling(e, valid_de, german);
    } else {
        spelling(e, valid_en, english);
    };
});

