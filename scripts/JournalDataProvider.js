let journal = [];

export const getJournaEntries = () => {
  return fetch("http://localhost:3000/entries")
  .then(res => {
    return res.json()
  })
  .then(entries => {
    return (journal = entries.slice())
  })
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};