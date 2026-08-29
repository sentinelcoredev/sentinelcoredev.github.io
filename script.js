function predictKCETRank() {

    // Get input values
    const boardMarks = parseFloat(
        document.getElementById("boardMarks").value
    );

    const kcetMarks = parseFloat(
        document.getElementById("kcetMarks").value
    );

    // Validate inputs
    if (
        isNaN(boardMarks) ||
        isNaN(kcetMarks) ||
        boardMarks < 0 ||
        boardMarks > 300 ||
        kcetMarks < 0 ||
        kcetMarks > 180
    ) {
        alert(
            "Please enter valid marks (Board: 0–300, KCET: 0–180)"
        );
        return;
    }

    // Calculate percentages
    const boardPct = (boardMarks / 300) * 100;
    const kcetPct = (kcetMarks / 180) * 100;

    // 50:50 composite score
    const compositeScore = (boardPct + kcetPct) / 2;

    // Rank lookup table
    const rankTable = [
        { minScore: 98, rankRange: "1 - 150" },
        { minScore: 96, rankRange: "151 - 400" },
        { minScore: 94, rankRange: "401 - 800" },
        { minScore: 92, rankRange: "801 - 1,400" },
        { minScore: 90, rankRange: "1,401 - 2,200" },
        { minScore: 88, rankRange: "2,201 - 3,200" },
        { minScore: 86, rankRange: "3,201 - 4,500" },
        { minScore: 84, rankRange: "4,501 - 6,000" },
        { minScore: 82, rankRange: "6,001 - 8,000" },
        { minScore: 80, rankRange: "8,001 - 10,500" },
        { minScore: 78, rankRange: "10,501 - 14,500" },
        { minScore: 76, rankRange: "14,501 - 18,500" },
        { minScore: 74, rankRange: "18,501 - 23,500" },
        { minScore: 72, rankRange: "23,501 - 29,000" },
        { minScore: 70, rankRange: "29,001 - 37,000" },
        { minScore: 68, rankRange: "37,001 - 41,000" },
        { minScore: 66, rankRange: "41,001 - 49,500" },
        { minScore: 64, rankRange: "49,501 - 59,000" },
        { minScore: 62, rankRange: "59,001 - 70,000" },
        { minScore: 60, rankRange: "70,001 - 80,000" },
        { minScore: 58, rankRange: "80,001 - 93,000" },
        { minScore: 56, rankRange: "93,001 - 1,10,000" },
        { minScore: 54, rankRange: "1,10,001 - 1,27,000" },
        { minScore: 52, rankRange: "1,27,001 - 1,44,000" },
        { minScore: 50, rankRange: "1,44,001 - 1,64,000" },
        { minScore: 45, rankRange: "1,64,001 - 2,00,000" },
        { minScore: 0, rankRange: "2,00,000+" }
    ];

    // Find matching rank
    const match = rankTable.find(
        entry => compositeScore >= entry.minScore
    );

    const estimatedRank = match ? match.rankRange : "2,00,000+";

    // Display result
    document.getElementById("predictedRank").innerText =
        "Estimated Rank: " + estimatedRank;

    //document.getElementById("compositeScore").innerText =
        "Composite Score: " + compositeScore.toFixed(2);

    document.getElementById("resultBox").style.display = "block";
}

/* Dynamic Current Year */
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

/* Navbar Controller */
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("vgHamburger");
    const navMenu = document.getElementById("vgNavMenu");
    const dropdownItems = document.querySelectorAll(
        ".vg-nav-item.has-dropdown"
    );

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("mobile-active");
            hamburger.setAttribute("aria-expanded", isOpen);
        });
    }

    dropdownItems.forEach(item => {
        const link = item.querySelector(".vg-nav-link");
        if (!link) return;

        link.addEventListener("click", event => {
            if (window.innerWidth <= 992) {
                event.preventDefault();
                item.classList.toggle("mobile-dropdown-open");
            }
        });
    });
});