const contentTarget = document.querySelector(".form")

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
                <textarea name="journalEntry"></textarea>
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