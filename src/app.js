import {selectYearView} from './year-selection-view.js';
import {showYearlyView} from './yearly-view.js';
import {showMonthlyView} from './monthly-view.js';

Array.from(document.getElementsByTagName("section")).forEach(el => el.addEventListener("click", handleEvent));
selectYearView();

function handleEvent(e) {
    
    let target = e.target; //where user clicked?
    const sectionElement = e.currentTarget; //get class name or id

    
    if(target.nodeName === "CAPTION"){
        if(sectionElement.classList.contains("monthCalendar")) { //go back to year selection view from yearly-view
            selectYearView();
        } else if (sectionElement.classList.contains("daysCalendar")) { //go back from monthly view to yearly view
            let year = target.textContent.split(" ")[1];
            showYearlyView(year);
        }
    } else if (target.nodeName === "TD" || target.nodeName === "DIV") { 
        if(sectionElement.classList.contains("monthCalendar")) { //go to monthly view from yearly view
            let month = "";
            if(target.nodeName === "TD"){
                month = target.querySelector("div.date").textContent;
            } else {
                month = target.textContent;
            }
            showMonthlyView(month);
        } else if (sectionElement.classList.contains("yearsCalendar")) { //go to yearly view from year-selection view
            let year = "";
            if(target.nodeName === "TD"){
                year = target.querySelector("div.date").textContent;
            } else {
                year = target.textContent;
            }
            showYearlyView(year);
        }
    }
}
