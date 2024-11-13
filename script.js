function calculateBirthdays() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);

    if (!year || !month || !day) {
        document.getElementById("result").innerText = "Please select a valid date.";
        return;
    }

    const today = new Date();
    const originalBirthday = new Date(year, month - 1, day);
    const currentBirthdayThisYear = new Date(currentYear, month - 1, day);

    // Determine the next birthday
    let nextBirthday = currentBirthdayThisYear;
    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    // Calculate half birthday based on the original birthday
    const halfBirthday = new Date(originalBirthday);
    halfBirthday.setFullYear(currentYear);
    halfBirthday.setMonth(halfBirthday.getMonth() + 6);
    
    // Calculate first and third quarter birthdays
    const firstQuarterBirthday = new Date(originalBirthday);
    firstQuarterBirthday.setFullYear(currentYear);
    firstQuarterBirthday.setMonth(firstQuarterBirthday.getMonth() + 3);

    const thirdQuarterBirthday = new Date(originalBirthday);
    thirdQuarterBirthday.setFullYear(currentYear);
    thirdQuarterBirthday.setMonth(thirdQuarterBirthday.getMonth() + 9);

    // Calculate days until each event
    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    const daysUntilHalfBirthday = Math.ceil((halfBirthday - today) / (1000 * 60 * 60 * 24));
    const daysUntilFirstQuarter = Math.ceil((firstQuarterBirthday - today) / (1000 * 60 * 60 * 24));
    const daysUntilThirdQuarter = Math.ceil((thirdQuarterBirthday - today) / (1000 * 60 * 60 * 24));

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const resultHTML = `
        <table>
            <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Days Left</th>
            </tr>
            <tr>
                <td>Your Half Birthday</td>
                <td>${halfBirthday.toLocaleDateString(undefined, options)}</td>
                <td>${daysUntilHalfBirthday} Days</td>
            </tr>
            <tr>
                <td>Your 1st Quarter Birthday</td>
                <td>${firstQuarterBirthday.toLocaleDateString(undefined, options)}</td>
                <td>${daysUntilFirstQuarter} Days</td>
            </tr>
            <tr>
                <td>Your 3rd Quarter Birthday</td>
                <td>${thirdQuarterBirthday.toLocaleDateString(undefined, options)}</td>
                <td>${daysUntilThirdQuarter} Days</td>
            </tr>
            <tr>
                <td>Your Next Birthday</td>
                <td>${nextBirthday.toLocaleDateString(undefined, options)}</td>
                <td>${daysUntilNextBirthday} Days</td>
            </tr>
        </table>
    `;
    document.getElementById("result").innerHTML = resultHTML;
}