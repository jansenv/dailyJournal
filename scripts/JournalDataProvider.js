let journal = [];

export const getJournalEntries = () => {
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

export const saveJournalEntry = entry => {
  return fetch("http://localhost:3000/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  }).then(getJournalEntries)
}

export const deleteJournalEntry = entryId => {
  return fetch(`http://localhost:3000/entries/${entryId}`, {
    method: "DELETE"
  }).then(getJournalEntries)
}

export const editJournalEntry = entry => {
  return fetch(`http://localhost:3000/entries/${entry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  }).then(getJournalEntries)
}