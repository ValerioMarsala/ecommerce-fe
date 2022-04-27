import React from 'react'

function HamburgerButton() {
    const ham_open = () => {
        document.getElementById("hamburgerNav").classList.remove("w3-hide");
        document.getElementById("hamburgerNav").classList.add("w3-sidebar");
        document.getElementById("hamburgerNav").focus();
        console.log("displayHam");
    }
    const ham_close = () => {
        document.getElementById("hamburgerNav").classList.remove("w3-sidebar")
        document.getElementById("hamburgerNav").classList.add("w3-hide");
        console.log("hideHam")
    }

    return (
        <div>
            <button
                className="w3-button w3-large"
                onClick={ham_open}>&#9776;
            </button>

            <nav
                id="hamburgerNav"
                className="w3-hide w3-bar-block w3-collapse w3-black w3-animate-right"
                style={{ top: 0, right: 0, width: 200, height: 'unset' }}
                onMouseEnter={() => ham_open}
                onMouseLeave={() => ham_close}
                onBlur={() => ham_close}
                tabIndex='0'
            >
                <button
                    className="w3-bar-item w3-button "
                    onClick={ham_close}
                >Close &times;</button>
                <a href="#" className="w3-bar-item w3-button">Link 1</a>
                <a href="#" className="w3-bar-item w3-button">Link 2</a>
                <a href="#" className="w3-bar-item w3-button">Link 3</a>
            </nav>

        </div>
    )
}

export default HamburgerButton