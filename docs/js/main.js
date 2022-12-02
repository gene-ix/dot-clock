window.onload = function () {

    // <div class="_view">
    let _view = document.querySelector("._view");

    for (let i = 0; i < 9; i++) {

        // <div class="_row">
        let _row = document.createElement("div");
        _row.className = "_row";

        for (let j = 0; j < 27; j++) {
            // <div class="_dot-wrapper">...</div>
            let _dotWrapper = document.createElement("div");
            _dotWrapper.className = "_dot-wrapper";
            // <div class="_dot-reset">...</div>
            let _dotReset = document.createElement("div");
            _dotReset.className = "_dot-reset";
            // <div class="_dot">...</div>
            let _dot = document.createElement("div");
            _dot.className = "_dot";

            // <div class="_dot-wrapper">
            //    <div class="_dot-reset">
            //       <div class="_dot"></div>
            //    </div>
            // </div>
            _dotReset.appendChild(_dot);
            _dotWrapper.appendChild(_dotReset);

            _row.appendChild(_dotWrapper);
        }

        _view.appendChild(_row);
    }

    let displaytime = "";
    setInterval(() => {
        let date = new Date();
        let hour = ("00" + date.getHours()).slice(-2);
        let minute = ("00" + date.getMinutes()).slice(-2);
        let now = hour + ":" + minute;
        if (displaytime != now) {
            displaytime = now;
            textToDot(displaytime);
        }
    }, 1000);
}

function textToDot(text) {
    let dotElements = document.querySelectorAll("._dot");
    for (let e of dotElements) {
        e.setAttribute("class", "_dot");
    }
    chars = text.split("");
    for (let i = 0; i < 7; i++) {
        let row = [0];
        for (let c of chars) {
            row = row.concat(numdata(c)[i]);
            row = row.concat(0);
        }
        let col = 0;
        for (let dot of row) {
            if (dot == 1) {
                document.querySelectorAll("._row")[i + 1].querySelectorAll("._dot-wrapper>._dot-reset>._dot")[col].setAttribute("class", "_dot _on");
            }
            col++;
        }
    }
}

function numdata(val) {
    let number = {
        "0": [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0]
        ],
        "1": [
            [0, 0, 1, 0, 0],
            [0, 1, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0]
        ],
        "2": [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0],
            [1, 1, 1, 1, 1]
        ],
        "3": [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 1],
            [0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0]
        ],
        "4": [
            [0, 0, 0, 1, 0],
            [0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 1, 0]
        ],
        "5": [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0]
        ],
        "6": [
            [0, 0, 1, 1, 0],
            [0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0]
        ],
        "7": [
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0]
        ],
        "8": [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0]
        ],
        "9": [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0, 1],
            [0, 1, 1, 1, 0]
        ],
        ":": [
            [0],
            [1],
            [0],
            [0],
            [0],
            [1],
            [0]
        ]
    };

    return number[val];
}