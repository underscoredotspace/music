import * as Tone from "tone"

document.querySelector("button")?.addEventListener("click", async () => {
    await Tone.start()

    console.log("you can now do stuff")
})
