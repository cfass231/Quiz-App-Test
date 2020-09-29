const STORE = {
    view: "landing"
}

function main() {
    render()

}


function render() {
    let html
    if (STORE.view = "landing") {
        html = `<div>
<h1>Rock Quiz</h1>

</div>

`
    }
    $("main").html(html)
}
// $(main)