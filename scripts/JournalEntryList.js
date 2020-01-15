import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js";
import JournalEntryComponent from "./JournalEntry.js";

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog");
const eventHub = document.querySelector(".content")

const EntryListComponent = () => {

  const renderEntriesAgain = () => {
    const allTheEntries = useJournalEntries()
    render(allTheEntries)
  }

  eventHub.addEventListener("journalEntryCreated", event => {
    renderEntriesAgain()
  })

  const render = (journalEntries) => {
    entryLog.innerHTML = `
    ${journalEntries
      .map(entry => {
        return JournalEntryComponent(entry);
      })
      .join("")}
    `;
  }

  render(useJournalEntries())

};

export default EntryListComponent;