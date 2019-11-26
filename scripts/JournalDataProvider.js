/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.

const journal = [
    {
        date: "11/25/2019",
        concept: "Automation",
        entry: "We learned about automating HTML representations and event listeners. The power generator then blew up, providing convenient cover for my escape from this hellish abyss.",
        mood: "Ok"
    },
    {
        date: "11/21/2019",
        concept: "GitHub",
        entry: "We learned how to use GitHub on a team and finished our first group project. It was difficult but rewarding to learn so many new valuable things, and I came away with a great sense of achievement.",
        mood: "Cautiously optimistic"
    },
    {
        date: "11/22/2019",
        concept: "Professional grade JavaScript",
        entry: "Things are now in motion that cannot be undone.",
        mood: "Fatal"
    }

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}