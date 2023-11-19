function AddAnimation(box, animationName) {
    box.classList.add(animationName);

    box.addEventListener('animationend', () => removeAnimation(box, animationName));
}

function removeAnimation(box, animationName) {
    box.classList.remove(animationName);
    box.removeEventListener('animationend', () => removeAnimation(box, animationName));
}