/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const JournalEntryComponent = entry => {
  return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="bolded">${entry.concept}</div>
            <div>${entry.entry}</div>
            <div>${entry.date}</div>
            <button id="editEntry--${entry.id}">Edit</button>
            <button id="deleteEntry--${entry.id}">Delete</button>
        </section>
    `;
};

export default JournalEntryComponent;