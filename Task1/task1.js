const flagRussia = document.querySelector('#flag_Russia');
const flagFrance = document.querySelector('#flag_France');
const flagFinland = document.querySelector('#flag_Finland');
const flagSwiss = document.querySelector('#flag_Swiss');
const flagJapan = document.querySelector('#flag_Japan');



window.onload = function () {
    flagRussia.innerHTML = `
    <svg height="120" width="180">
        <line style="stroke:black;stroke-width:4"
        x1="0" y1="0"
        x2="0" y2="120"
        />
        <line style="stroke:black;stroke-width:4"
        x1="180" y1="0"
        x2="180" y2="120"
        />
        <line style="stroke:black;stroke-width:4"
        x1="0" y1="0"
        x2="180" y2="0"
        />
        <line style="stroke:black;stroke-width:4"
        x1="0" y1="120"
        x2="180" y2="120"
        />
        <rect x="2" y="40" width="176" height="40" style="fill:#1C3578"/>
        <rect x="2" y="80" width="176" height="38" style="fill:#E4181C"/>
    </svg>
    `;

    flagFrance.innerHTML = `
    <svg height="120" width="180">
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="0" y1="0"
        x2="0" y2="120"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="180" y1="0"
        x2="180" y2="120"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="0" y1="0"
        x2="180" y2="0"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="0" y1="120"
        x2="180" y2="120"
        />
        <rect x="2" y="2" width="58" height="116" style="fill:#002654"/>
        <rect x="118" y="2" width="60" height="116" style="fill:#ED2939"/>
    </svg>
    `;

    flagFinland.innerHTML = `
    <svg height="120" width="180">
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="0" y1="0"
        x2="0" y2="120"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="180" y1="0"
        x2="180" y2="120"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="0" y1="0"
        x2="180" y2="0"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="0" y1="120"
        x2="180" y2="120"
        />
        <rect x="52" y="0" width="30" height="120" style="fill:#002F6C"/>
        <rect x="2" y="45.63" width="176" height="32.7" style="fill:#002F6C"/>
    </svg>
    `;

    flagSwiss.innerHTML = `
    <svg height="120" width="180">
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="30" y1="0"
        x2="30" y2="120"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="150" y1="0"
        x2="150" y2="120"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="30" y1="0"
        x2="150" y2="0"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="30" y1="120"
        x2="150" y2="120"
        />
        <rect x="31" y="2" width="119" height="116" style="fill:#DA291C"/>
        <rect x="48.4" y="46.9" width="85" height="26.2" style="fill:white"/>
        <rect x="76.9" y="18.3" width="26.2" height="85" style="fill:white"/>
    </svg>
    `;

    flagJapan.innerHTML = `
    <svg height="120" width="180">
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="0" y1="0"
        x2="0" y2="120"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="180" y1="0"
        x2="180" y2="120"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="0" y1="0"
        x2="180" y2="0"
        />
        <line style="stroke:rgb(0,0,0);stroke-width:4"
        x1="0" y1="120"
        x2="180" y2="120"
        />
        <circle cx="90" cy="60" r="36" style="fill:#BC002D"/>
    </svg>
    `;

}