import { saveJournalEntry, useJournalEntries, editJournalEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".form")
const eventHub = document.querySelector(".content")

export const JournalFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const entryToBeEdited = event.detail.entryId

        const allEntriesArray = useJournalEntries()

        const theFoundEntry = allEntriesArray.find(
            (currentEntryObject) => {
                return currentEntryObject.id === parseInt(entryToBeEdited, 10)
            }
        )

        document.querySelector("#entryId").value = theFoundEntry.id
        document.querySelector("#journalDate").value = theFoundEntry.date
        document.querySelector("#concepts").value = theFoundEntry.concept
        document.querySelector("#entry").value = theFoundEntry.entry
        document.querySelector("#mood").value = theFoundEntry.mood
    })


    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "record") {
            // Does the hidden input field have a value?
            const hiddenInputValue = document.querySelector("#entryId").value

            // If so, edit the entry with a PUT operation
            if (hiddenInputValue !== "") {
                const editedEntry = {
                    id: parseInt(document.querySelector("#entryId").value, 10),
                    date: document.querySelector("#journalDate").value,
                    concept: document.querySelector("#concepts").value,
                    entry: document.querySelector("#entry").value,
                    mood: document.querySelector("#mood").value
                }

                editJournalEntry(editedEntry).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("entryHasBeenEdited"))
                })

            } else {
                const newEntry = {
                    date: document.querySelector("#journalDate").value,
                    concept: document.querySelector("#concepts").value,
                    entry: document.querySelector("#entry").value,
                    mood: document.querySelector("#mood").value
                }

                saveJournalEntry(newEntry)
                    .then(
                        () => {
                            const message = new CustomEvent("journalEntryCreated")
                            eventHub.dispatchEvent(message)
                        })
                    }
                }
            })

    contentTarget.innerHTML += `
        <form action="">
            <fieldset>
                <label class="basics" for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
        </form>
        <form>
            <fieldset>
                <label class="basics" for="concepts">Concepts covered</label>
                <input type="text" name="concepts" id="concepts">
            </fieldset>
        </form>
        <form>
            <fieldset>
                <label class="basics" for="journalEntry">Journal Entry</label>
                <textarea name="journalEntry" id="entry"></textarea>
            </fieldset>
        </form>
        <form>
            <fieldset>
                <label class="basics" for="mood">Mood for the day</label>
                <select name="mood" id="mood">
                    <option value="Fine">Fine</option>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                </select>
            </fieldset>
        </form>
        <form>
            <input class="button-styling" type="button" name="record" id="record" value="Record Journal Entry">
            <input type="hidden" name="entryId" id="entryId">
        </form>
    `

}