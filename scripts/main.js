import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JournalEntryList.js";
import { JournalFormComponent } from "./JournalFormComponent.js";

getJournalEntries()
    .then(JournalFormComponent)
    .then(EntryListComponent)