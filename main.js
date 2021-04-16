const input = document.querySelector('input[name="input_text"]');
const words_container = document.querySelector('.container-words');
const word_list = document.querySelector('.container-words');
console.log(word_list);
input.addEventListener('keyup', (e) => {
    text_value = e.target.value;
    word_list.innerHTML = '';

    for (let i = 0; i < text_value.length; i++) {
        const word = document.createElement('p');
        word.textContent = text_value.charAt(i);
        words_container.appendChild(word)
    };
});