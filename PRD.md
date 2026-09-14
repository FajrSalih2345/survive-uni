# Product Requirement Document (PRD): Survive Uni

## 1. Executive Summary & Core Game Idea
**Survive Uni** is an interactive, text-and-choice-based resource-management web game designed to capture the humorous, chaotic, and high-stakes reality of university student life. Players navigate a semester filled with academic, social, financial, and personal challenges where every decision impacts their survival resources.

The goal is to complete the semester without running out of vital resources and achieve a passing grade on the final **Report Card**.

---

## 2. Target Audience
- **Primary Audience:** University and college students who resonate with student lifestyle struggles (cramming for finals, budget meals, sleep deprivation, balancing social life vs. study).
- **Secondary Audience:** Casual web gamers who enjoy turn-based resource management and decision-making games.

---

## 3. Technology Stack & Scope Boundaries

### Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Mobile-First Design)

### In Scope
- Single-player interactive choice engine.
- Real-time stat tracking (Money, Time, Sanity).
- 10 structured, replayable survival scenarios.
- Dynamic Report Card win/loss screen with custom performance feedback based on end-of-semester stats.
- Local state management (React `useState` / `useReducer` or Context API).

### Explicitly Out of Scope
- **Complex Animations:** Complex 3D/canvas animations, keyframe physics, or heavy particle effects (UI micro-transitions via CSS/Tailwind are allowed).
- **Backend Authentication:** User accounts, passwords, database persistence, multi-user multiplayer support, or OAuth logins.

---

## 4. State Tracking & Core Mechanics

The player starts the semester with base values for three core resources:

| Resource | Initial Value | Range | Description | Impact of Reaching 0 |
| :--- | :---: | :---: | :--- | :--- |
| **Money ($)** | $500 | $0 – $2,000 | Available funds for food, books, social outings, and emergency expenses. | Financial Crisis / Forced to drop out due to unpaid tuition & expenses. |
| **Time (Hrs)** | 100 Hours | 0 – 100 Hours | Remaining usable hours in the semester for study, work, and extra tasks. | Semester ends; final grade evaluated based on accumulated effort and sanity. |
| **Sanity (%)** | 100% | 0% – 100% | Mental health, stress resilience, and emotional well-being. | Mental Burnout / Hospitalization / Semester failure. |

---

## 5. 10 Survival Scenarios

Each scenario presents a situation with 3 distinct choices, balancing trade-offs between Money, Time, and Sanity.

### Scenario 1: Textbook Dilemma
- **Description:** The professor assigns a mandatory \$150 textbook for the upcoming midterm.
- **Choice A:** Buy the brand-new official textbook. *(Money: -\$150, Time: 0, Sanity: +10%)*
- **Choice B:** Spend 10 hours searching for a suspicious free PDF online. *(Money: \$0, Time: -10, Sanity: -15%)*
- **Choice C:** Share a copy with a classmate, but study on their schedule. *(Money: -\$30, Time: -5, Sanity: -5%)*

### Scenario 2: 3:00 AM Coffee Cramming
- **Description:** Major Midterm in 5 hours. You haven't started studying.
- **Choice A:** All-nighter powered by 4 energy drinks. *(Money: -\$20, Time: -8, Sanity: -30%)*
- **Choice B:** Sleep 6 hours and hope for the best. *(Money: \$0, Time: -2, Sanity: +15%)*
- **Choice C:** Hire a student tutor for a emergency crash course. *(Money: -\$100, Time: -4, Sanity: +5%)*

### Scenario 3: Weekend Part-Time Shifts
- **Description:** Your boss asks if you can cover extra weekend shifts at the campus cafe.
- **Choice A:** Work full weekend shift. *(Money: +\$150, Time: -15, Sanity: -20%)*
- **Choice B:** Decline and use weekend to rest & study. *(Money: \$0, Time: 0, Sanity: +15%)*
- **Choice C:** Work half shift and negotiate free meals. *(Money: +\$70, Time: -7, Sanity: -5%)*

### Scenario 4: Group Project Slackers
- **Description:** Your group project team is unresponsive 48 hours before the deadline.
- **Choice A:** Do the entire project yourself. *(Money: \$0, Time: -18, Sanity: -35%)*
- **Choice B:** Email the professor and report everyone. *(Money: \$0, Time: -4, Sanity: -10%)*
- **Choice C:** Bribe them with pizza to split the workload. *(Money: -\$40, Time: -8, Sanity: +5%)*

### Scenario 5: Campus Housing & Rent Due
- **Description:** Unplanned utility fees and dorm maintenance costs are due.
- **Choice A:** Pay fees immediately in full. *(Money: -\$120, Time: 0, Sanity: -5%)*
- **Choice B:** Delay payment and face late penalties later. *(Money: -\$40, Time: 0, Sanity: -20%)*
- **Choice C:** Eat instant ramen for two weeks to offset costs. *(Money: -\$80, Time: -3, Sanity: -15%)*

### Scenario 6: The Legendary Campus Party
- **Description:** It's mid-semester bash night, but your assignment is due tomorrow morning.
- **Choice A:** Go to the party and skip the assignment. *(Money: -\$50, Time: -6, Sanity: +30%)*
- **Choice B:** Stay in dorm, ignore friends, finish paper. *(Money: \$0, Time: -8, Sanity: -20%)*
- **Choice C:** Go for 1 hour, then come back and rush the paper. *(Money: -\$20, Time: -10, Sanity: +5%)*

### Scenario 7: Laptop Blue Screen of Death
- **Description:** Your laptop crashes 3 hours before an online quiz submission.
- **Choice A:** Express repair at the campus tech center. *(Money: -\$100, Time: -2, Sanity: -10%)*
- **Choice B:** Rush to the computer lab and use slow public desktop. *(Money: \$0, Time: -5, Sanity: -25%)*
- **Choice C:** Ask professor for an extension with screenshot proof. *(Money: \$0, Time: -1, Sanity: +5%)*

### Scenario 8: Unexpected Illness (Flu Outbreak)
- **Description:** You catch a fever during midterms week.
- **Choice A:** Buy premium meds, order soup delivery, rest 2 days. *(Money: -\$60, Time: -12, Sanity: +20%)*
- **Choice B:** Power through through sheer willpower and cold meds. *(Money: -\$15, Time: -4, Sanity: -40%)*
- **Choice C:** Visit campus health clinic (long waiting lines). *(Money: -\$10, Time: -8, Sanity: +5%)*

### Scenario 9: Internship Interview Call
- **Description:** Dream company calls for an immediate in-person interview during a busy day.
- **Choice A:** Buy a formal suit & uber to the downtown office. *(Money: -\$110, Time: -5, Sanity: +10%)*
- **Choice B:** Request virtual interview via Zoom. *(Money: \$0, Time: -2, Sanity: 0%)*
- **Choice C:** Reschedule for next week (risk losing the slot). *(Money: \$0, Time: 0, Sanity: -15%)*

### Scenario 10: Final Exam Crunch
- **Description:** Cumulative final exam covering 14 weeks of course material.
- **Choice A:** Study non-stop, order delivery food, skip sleep. *(Money: -\$40, Time: -16, Sanity: -30%)*
- **Choice B:** Balanced study schedule with review groups. *(Money: -\$15, Time: -10, Sanity: +10%)*
- **Choice C:** Wing it based on general knowledge. *(Money: \$0, Time: -2, Sanity: -5%)*

---

## 6. End-of-Game Logic & Report Card Screen

When either **Money <= 0**, **Sanity <= 0**, or all **10 Scenarios** (or **Time <= 0**) are completed, the player transitions to the **Report Card** screen.

### Outcome Conditions

1. **Bankrupt Drop-Out (Loss):**
   - Trigger: Money reaches $0.
   - Result: Grade `F` (Dropped Out - Out of Funds).

2. **Mental Burnout (Loss):**
   - Trigger: Sanity reaches 0%.
   - Result: Grade `F` (Medical Leave - Burnout Failure).

3. **Academic Probation (Partial Pass/Loss):**
   - Trigger: Finished all scenarios, but Sanity < 30% OR Money < $50.
   - Result: Grade `C-` (Barely Survived on Probation).

4. **Dean's List Legend (Victory):**
   - Trigger: Finished all scenarios with Sanity >= 70% AND Money >= $200.
   - Result: Grade `A+` (Summa Cum Laude Survivor).

5. **Solid Graduate (Standard Victory):**
   - Trigger: Finished all scenarios without hitting 0 in any resource.
   - Result: Grade `B+` (Successful Semester Graduate).

### Report Card Features
- **Overall GPA / Letter Grade** displaying the outcome.
- **Stat Summary breakdown** showing final Money, Time spent, and Sanity left.
- **Title / Badge Awarded** (e.g. "Ramen Gourmet", "Coffee Addict", "Master Planner").
- **Play Again Button** to restart the game with refreshed initial state.
