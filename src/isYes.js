export default isYes;

function isYes(answer) {
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') return true;
    else return false;
}