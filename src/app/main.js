const $search = document.getElementById("search")
const$chats = document.querySelectorAll(".user-chat")

console.log($chats)
const searchChats = () => {
    const nameSearch = $search.value

    for (let i = 0; i < $chats.length; i++){
        const$chat = $chats[i]
        const $titleTag = $chat.querySelector("h3")
        const name = $titleTag
    }
}

$search.addEventListener("input", searchChats)