/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const JournalEntryComponent = entry => {
  return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="bolded">${entry.concept}</div>
            <br>
            <div>${entry.entry}</div>
            <div>${entry.date}</div>
            <br>
        </section>
    `;
};

export default JournalEntryComponent;
