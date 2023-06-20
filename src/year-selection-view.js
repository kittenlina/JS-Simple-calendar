export function selectYearView() {
    Array.from(document.querySelectorAll("section")).forEach(s => s.style.display = "none");
    document.getElementById("years").style.display = 'block';
}

