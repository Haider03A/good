import { useState } from "react"

function Nav() {
    let open = 1
    return (
        <div>
            <header>
                <h1 onClick={() => open+1}>Header</h1>

                <h1>{open}</h1>
            </header>
        </div>
        
    )
}

export default Nav