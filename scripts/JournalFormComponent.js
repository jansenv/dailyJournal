import { saveJournalEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".form")
const eventHub = document.querySelector(".content")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "record") {
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
            }
        )
    }
})

export const JournalFormComponent = () => {

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
        </form>
    `

}