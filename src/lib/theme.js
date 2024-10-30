export function setTheme(theme) {
    localStorage.setItem('myTheme', theme);
}

export function getTheme() {
    const neww= localStorage.getItem('myTheme')||" ";
    return neww;
}
