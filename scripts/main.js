import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JournalEntryList.js";
import { JournalFormComponent } from "./JournalFormComponent.js";

JournalFormComponent()
getJournalEntries()
    .then(useJournalEntries)
    .then(EntryListComponent)