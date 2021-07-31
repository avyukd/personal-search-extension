const postSelection = (info, tab) => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;

        fetch(`http://127.0.0.1:8000/test/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'selectedText': info.selectionText,
                'url': url,
                'origin': "Chrome"
            })
        }).then(
            response => {
                console.log("Saved!");
            }
        )

    });
    
}

chrome.contextMenus.create({
    title: "Save on NavSearch", 
    contexts:["selection"], 
    onclick: postSelection
});