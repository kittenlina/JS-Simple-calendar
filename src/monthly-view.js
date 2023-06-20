export function showMonthlyView(month) {
    let monthNum = -1;
    switch(month) {
        case 'Jan': monthNum = 1; break;
        case 'Feb': monthNum = 2; break;
        case 'Mar': monthNum = 3; break;
        case 'Apr': monthNum = 4; break;
        case 'May': monthNum = 5; break;
        case 'Jun': monthNum = 6; break;
        case "Jul": monthNum = 7; break;
        case 'Aug': monthNum = 8; break;
        case "Sept":monthNum = 9; break;
        case "Oct": monthNum = 10; break;
        case "Nov": monthNum = 11; break;
        case "Dec": monthNum = 12; break;
    }

    const id = `month-2020-${monthNum}`;
    let selectedMonthSection = document.getElementById(id);

    //hide all, show only the month table
    Array.from(document.querySelectorAll("section")).forEach(s => s.style.display = "none");
    selectedMonthSection.style.display = 'block';
}