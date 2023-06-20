export function showYearlyView(year) {
    const currentYearSection = document.getElementById(`year-${year}`);

    //hide all other sections and show only this one:
    Array.from(document.querySelectorAll("section")).forEach(s => s.style.display = "none");
    currentYearSection.style.display = 'block';   
}
