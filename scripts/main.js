import { useJournalEntries, getJournaEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JournalEntryList.js";
import { JournalFormComponent } from "./JournalFormComponent.js";

getJournaEntries()
    .then(useJournalEntries)
    .then(JournalFormComponent)
    .then(EntryListComponent)