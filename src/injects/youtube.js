const logo = `
    <svg width="25" height="23" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="29" height="26" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_103_2537" transform="matrix(0.00495332 0 0 0.00552486 -0.00771576 0)"/>
        </pattern>
        <image id="image0_103_2537" width="205" height="181" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAC1CAYAAAD8zXvFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABTeSURBVHgB7Z07jBxHesf/NbPk7QW2RoBF2YBt9gI+GY7EDXzW+QHOJvZlIkNFHKZOSGaOzN3QEbmBYw0j25GWiXGO2IRPx7POwI6iA04w2HRinBxoZUO6Pe3O1NXXXU2Olvuo+qq6px/fD2j0kGxyOd39r+9ZVQpCrYwMdDJHYs+j8o+WPp8ks+eDpSM7MECoHQUhOlYYiTmumePdpc/nCYPLDIWI6PzCnmciqOoQ0QRiBXLNHtftOcHqKYX01BwpREjRENEwMDoZoxAInUsL0gZIRKk5HkNExEZE44C1JjdQCIXObRHJRaTmeERno58MghMimjOwQhmb4w7aZU24pBABOSGiOYF1vd43xwTdF8pZTM3x2IhnD8JriGjw0qpMUIhlDKEkM8cOxPp8i16LxoqF3K+76K9VcWVqjh0RT09FI2IJYoqei6dXolkSyzaEUKboqXh6IRqxLJUyRc/E03nRGL2UlkXEUi3b5tjtQ8G0s6KxqeP7aGY27GXTJV41Y35pf+80rtpzsnRO0DwyFFZnig7TOdFYV4zEcherpRQFta58uvT5INZobL5qglfNoHR+F80oxE7RYZetU6Kx1uVDrGYUzlBU1UkgVNeYYUWY+1CKiFp+SiHVDQ0MJJyH6BidEM2KrEvZRUzNj3tNHlWtRRrjVfG2TkuUmuN2l6xO60VjR9WPUI91KYVCPVp7bQ16rUWeoGhATVA9GToU67RaNDYzVof5T1FYlGnXskPmHk5QWKAbqJ6H5vbdQ8tppWisO/YAxWhZFSSO0qKk6DjWhdtG9dYnM8dWm9211onGPtwnqO7Bklh2UYyKna85nIa1PhQjJqiGzBw3V5ksCaFVorG+OMUvVQSyvRfLSWoQz702ZteGaAk2fvlnc6wjLiSQfzDHB+YB/ujQACHH3IqZOXbX19dpwY4q6j8/NP82/ZynaBGtsDRGMDTabSM+ZFm2V21Z9p/p5Mw/XMfB5qZqhOUzz2HbnG4hvuWhZ7CDltB40VQkmBSFa1CLT/3Jx/oa5rimFRI1wFVoJJpePG1GbuU4emscKJXHAgfm72R6gRdDjdliiOz7f6Fqiw2WEga3EJettiRcGi0a84Couj9BPCqvUu/v69HR/+OGWsO75sUeayMQZ2FwKQQ1M4KcqWM8Hf4W0qqtUwXdF9RFsYUW0FjRVCCYPRSV6egv08/+XY9NdPj+YpHXOhI0APNgSUSpsXCP//SvVIqKsC7bfYRDj+ZNtIBGiiayYCqxLi+FMjf/T9X4aQeZsUSpOe9W4crFsjrmGbUixm7cf9I8ACpaxuohoxfkZqxCGrlex1/jjrEod1sglLMgAe3MjRX6wQ9UhkjEiHVENAwiB/00ISqK+MiqmCD+vu7YSjVGPFMjnp3I4tkGz12TmMaXiIKJ5o51VSwniS0eZhPt7bY0dDZCNBEbLzNEaM/oi1hOElM8nu1OM/PMNtESVi4aOyrtI5wMgY2Az0yRcbDAA5PCraPjt7HEEo9trKUEwXn3M2rcWQcrFU3E5ku68Vsh6eSffazvtzzAj02eMDDZtikCsT1s5ZrYL/99czwyj2wbLWNlorGjEFmYBGEE1V/IFVuolU2RbgPUdXAzkstWbmoVbZ2EVbBK0cRILdNINQGTT36sH+jVL8DRCsx9uvfeX6rWdSRXwUpEEynwZwuGYpfhHB/p1Sw40V4U9hYD3IuZom4jtYvGxjHPEcaeEcxNMPjPZ/rW/NgIVmIXLhTr3KyzSbRpDFA/TxAGPazbYEDu2HyOqQgmiERr7FPiBD2lVksToYCZgZFWzjuPv8rdsTGEaKgBHn7/z1XrF8rwpTbR2Ka+ECuTgSEYiV8qxsQ5l7/B7c2tZkyUq4M6RUNxTAI+m76V/rxYOa90EQ4BxTSEeaS0dBuoJaaxblkCPvdEMM2FrDjd62fnTdvuEJVbmgjZMu9uZRHMyshMIXSr6xanDtFQ1Z8bT2RGMBs+f0EEs3Kyy0fY7HKMU6l7ZnuOuIKhm+41v0IE0wiSo0t4sv9EV57WJy/GtubUStUxTUgu32t/E0ori2CaAcU4R5fzZYOjY4XywBxfoHD7v6AkE02Rt6FA5VQmmsDgf+o7ieybr6XpskmYAujkk5/oqMIx7xRNpSZ3/+TeqQmKNSWe2KkmlVKJaKziJ+CRmcNr4bi8Ot3zOTBNRC9w96c/1lEaYs07Rc93ivNX+UxQCCdBhVRlaUKszK6PW/bsYz1ZaNnivKmYTNP9fLHEcFytVjnxrTKiZ88CU8xe2TIJ/FtDUEaN2U1S2YqdVViakODfK1smgmkNSWBiYAx/KmsojSqapb0dOUx93DLbZZtAaAWUGAiIbxL4M7YWKjqxLc0Y/BfZOfgnt0zimPZB8Q2z1YY7d6cSaxNbNNz/pFdNxrplQvsY5av9+MMVzbiK4mc00djqfwJ/MhSpRCdM7v8OxC1rL6Y08IzWwfbABvQpeERfAyKmpeGu4fvI1cqQaafcP4RWM1D4kNFm41W7W+JObGsTRTQBCYAMHlZmuIAE/90g+WbNb/ALsDYkmDEiEsvScGOZ1MvK6Eq3QBfqROFOndYGEYklmjF4ON8Ea2WE7jBiWhtOgTRqQiBYNDYXnsCfqViZnsOzNrvgES0WjmFp2AkA1wvFynQWb2uDYpFJjrW5jkgE957ZeQ2+o4Vzj5ntLwtdXFBoLgeXj7Dh05dm3jna+4bT1b4RY3eCIEtjXTOOryixjFDCsTZcF22CCIS6Z1zXLHW5SGKZnqD8slsBCYEoLlqoaMbwxznNjIWsiNkTRr5dAvCIiZeIkkVji8ZOK03gj/OXHWhxzfrCUHk/6z3wCJ7hG2JpxuCRulxkZ/slEHoBLcbhk35epYsWIhrOD089shdRq7hC4xn9+pJ3/Mpx0VpnaZ66XmgSAGMIvcK8jO/DD46LNgpdeIMlGhvPcAKq1OUicc36CW2F4tkhQPNsWG01CIBraTirixy4LnSwECvTW44uu7tPdrNbzgS1oNVx6hSN85djmGmhO/jGyp/Cn6BkAFc078Ifp3iGzLPsWNZfGLEsJ65JEABXNGP4k7pcdLwmO5b1nGTfb/ENjns2Clm+1ls0AT/M6cstxMr0niOPThAb12Twpz7RgGfaZvbLXYhS8Vq4hZay8H6hnUsZS9QqGs4Pe+F6oWwoK0B5x8wZ/HkDTGqzNC4X2Rx9cEOd0G4YA2cGf2q1NFfhT+ZykSQBBMvIMxmQwp8ETDii4ViCzOWiuRLRCAXfaK93gdMVMOJOE6jLPcucrtLSOiMUKO0+ONskE0s4YOAlGqtM7x/k2tk8HLBcP6GD6IX3AJrBnwQMXltY48ZYj371q7xF+7r9R78lkl8f/XcCT75z6Q8zl+u++12M1tclESAAh4c4MO+hs/U4nh+M5ov/83p3hoPfPlgbjk77GZk5Zqb88fhHP1XpyT/8lmj+5s/0HdAWFkpeXEGwZEY8W0Y8WfkbL0VjBEP7FE4gCMJJDoZDbP3rT1ReOsljmr9+L99VbAJBEE5jNJ/jyQ/fK9LgA/qgZFcxQbiIkdbFhlQD8+EuBEFw4QYlysg9kwZJQXDEZPVukGikCi8I7iSxN6oVhM5DoskgCIITJgdwMDCFG84EHkHoJaZek5KlmUIQBBcyKnAObG9NCkEQzsV4Zfm+SgP7i9uQ2EYQzkRp7BgDM80/l79JnQEmyHkCWQ5WEE5y79/+Qz0sf/Ha1AAjnok53ZIFyIVeY7JkGOKRsTAPlzuciTM3qqV2AVP9fG2KwP5/be4DC6+pA2+98cHW7//O32UXXfe3f7+4ceUP1AMIvefnM3XzX/7RfSHA2O/lSaEs472782g0op2WE/ix5bL4+fPP9bVj6H0IvWftknpz4023HZ/tjOIv4M+bruvxLcPpCOAsA5o4XXVJkhFCvoRT5ioYSwJ/DjiCITii+RL+OPW30Y3SONssCv1A+WdyE/iTgUmzLA2hF9Kh0He09n0HKl319SQc0WTwx3mZUZOt4IhS6BKDQQo/OFu/sN+z2iyN68Jsa/43TOgYa2ve71gCf+oTjV3DjBNAucU1VxR3H0WhG6Q+SQA7GHPcswxMuPNpMvjj/MWUen2tKaEf6IX23Q6QNYnSDP61umcEJ1h33kdTzyUZ0FfUcLAHP8bwJyhu5oqm0h11174zmELoHVSf+d5b3l4GZ42LoEGZK5oU/pD7OXa50Pq0KYReMYBOfa638cwY/tRvaQKSAWPnKxf6MYReodXgEfwYg8dK3DMihT/OplRctH7BdM2c4+QlspAkABEiGo5fOHat14iL1i98XTPLGP6kCCRENL5ZjpKJ85VK7UDoBUfzgdeztvFxAn+CM7Ns0di4JoM/zibVmmspdHaf9E9+z7tR9xZ4pAgkdLFATrDu7KLlaL0LodNoLHwTAMQY/qSuu/KdR6houC7aXdcL1y4PHkKsTWehBMA7V9amPn8nwDWLkpENEo2djcl5oZ1dtDwhINamwyw4cSvXNeMO8t8ixlrOHNN6zbXQSYi16SZMK5OAtwHZLIZrRsQQDVe9910vFGvTVVhWZgwenMH9VLwX1jgNo35a1MA9uH+F88IGz7/Qo+Mj/Zz5c4SGUViZwQY8YS7sQmw0ydIQXCvgnBDIrc1CS92mM/hbGSOYCXiCSWMJhoglGq6Ldscn/fy93x1SbBPUAiGsHgU99Y1lLM4u/QmiuWZEFNHYXp4U/pBgnK1NjlL3ILQa3+o/EWBlqNdsiojE3AmN6zr5WZu3VGpGKkkKtBWtdxjVf4JrZVJEJppoAmo23tZmeGmwrWWXg9aRdzK/PdyGJwFWhogeB8fec5NrAbysDSUFlFK3IbQHhYP5XG2BB9fKTGMmAEpii4ZbhCTBeN0YcdNaxpznlgVamUrejyh1mmXMl9wGf2RwWih9mc8+X9CC6c7rDwj1Q9myP7oy9PYMbPWfu2cSpZm5lu1cqtgSPaTlxVtsx3N1E9Ji01gojhl+NeBmPOl9SMCjsppedNHYCj/XLNK0Aa+kQG7yVS4coWnYOGZjQ3kPagE9ZkTq67H4UIWlIYKsjb1hzuST1RZa6jcNY7FQt5npZeIJ+FT6LlQimkBrQ0mBD+FJ3i2gpc2mMZhn8cdvK1aniBk0Q9yyaejCGRcRPRFQYlPIFKQn4HHPfPmHnn8Hv/jlfGrS0dz5FkIMjGA49RjCehnPwWejijTzMlW5Z6W1CRn5vd004p23hxOtddReI8GDMMHQQBvilu1WLRiiMtEQtucnBQ+6gR+BgQhnRQQIxkKbFCfgkaGIpSunUtFYQoIymuF5AwxEODUTKBjznO+Any0jduqwMkTlorFBWUhldgImJBzpGqiBcMFQcTrESqSxO5nPow5LQ2yD32DJ2RruJaYSfVeyahViUv2BgknAdMOXqLUPsRbR2KQA94sFV/vzhyp1nLiYwqUpKm/ZiYEslgL/BHxqc8tK6rI05dQBjqvE3oV3GXq4GmpTphSEQ/fw+FhtMhYsPwnV4xLwIbdsGzVTm2gs2/B/aaOsVUW8c0XNbHt6CoEFJVcufaU2Ayr9OcbIUKaMleSxZKjZLSuprLh5FjboI5PsMn+Gpqp6r1jiwme/nG8b94Lbjd0/yB2bm4A/wB0rsRX/bYRxu87gf5m6LU2ZTXOJLzJzVNLaTVCcczxXG+KuOZHm7lhzBLO7KsEQtVuaErvC5lk+bYpiJMlQA2J1ziCidSEiCaYy78OVlYmmxIpnbH+Zb+RUdcPdafz8f3RyaQ0PjM8e4md3BqWwd3Ss7oXGLiWxBINiomKGFbJy0TSNX3yuJybcva/CsjptJqXNtCJkxl5ig36veVJn4D2ztwpENGfQQ/FUIZZymkcM672zivTyaYhoLqAH4okuFmKp0h9j/YbGCIYQ0ThC4lHQNE9njG5QiVgIW1YgwSQI55ERzAQNQkTjCSUMhoMFZduut836UHpdmeLk2teDh5x5+y7YbuVYLfozI5hNNAwRTQCf/a8e68Vi0mQB5XWohX6shoO9KqxKSeT4haAM6pbrVix1IqKJBAkIi8WYBIRVunBUW9HmhVP68drxYG8jUsr4PC6ouXHIzLHZRMEQIpqKyEWExTUFdV3r/GWKv6BhIZDMxFozrfCp1oOU+utQE9a6UP0lRjq5hP7/N1ddizkPEU2NmGTCNVM0HJGYsMDIfL5qLNPIiOplH562o7Vaau8xosg/m+teaDXIBgMcDI8wq8OKnEUF1oVorEu2TOdFY0fDCYrJbIn97aeoaHHsrmPvJxUrJ4hLKwRDdFo0DqPhFCuYxNRGrFgoM0aumEuHug+NSyufxxAdxdYKnuH8B0zX3FhfXx8dHh4+hXAqduX+f0KRGVtHXGjQihkTVU5nLQ1jF+AMxQOcQsixKwGFLKt0EawFIVdNJ0VjR0bvpW0tGQq37VEf3balGJBcsQTVQHHLzSY0X3LoqmiohSNGkW2KnsQ8FccsyzQ+pXwRXRUNTaceIx4pim210y4JyAqF4jqqtYxRPbtti19OYw2CC2N70Iu2Z06PzbHXhvToadis4vso3LAqrUpJvoSXuV3RFklZJV21NBRc3kH1pCgs0GwVs01dsRaF3NXr9lyHUEpS1Dh1vQ66Kpoxwlaf55Ch8NfJCq1URHYuyxhFQZdEkqB+8l0j2pgdu4gup5zrsjbnkaIQ0gt7PogpJisOiknofNV+pqNOS3IaKTpmXZbpekfA1JyauMETjcKZPS8fX55y7Rt4JYLEfh6hmVMRMhS1l07ELmfRh96zCcJ2CRYuptwu8mFbkyM+dLaNpuTw8HC2vr5OcQaN4mMIsZma4wOyLuZeH6IH9GpqgI0BttFMl61tpCgC/RQ9o5fzaUQ8QaToqVhKej0JzYqHKtRU6EsgnAXFKVSPmh40uB5VFzJz0yIJg1PpVYDviojmBLYwOkFhfVZd71gVKXrugp2HiOYcrPUh8cTomG46KYpuhqlYlfMR0Tiw1Ls1RncsEAmjbPsRoXggomGwtD3Iatc484dEQtO6qWI/E6HwENFEwIqIer5IRAmqWOPMn3yvHxR9b3RORSRxENFUwNLkruVmygSvesdiUfaslU2hmT1mssJOdYhoasYKarnh8uT5NDJ7LkVCvz4Qy7EafgM3xCLqC+6ViAAAAABJRU5ErkJggg=="/>
        </defs>
    </svg>
`


function render(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    const node = div.firstChild;
    const reference = document.querySelector('#above-the-fold');
    reference.parentNode.prepend(node);
}

function renderVerified(nft) {
    render(`
        <div class="confirmify" id="confirmify-verified">
            <p>${logo} Confirmify has <span class="success">verfiied</span> the <a target="_blank" href="${nft.nft_url}">video source</a>.</p>
        </div>
    `)
}

function renderNotVerified() {
    render(`
        <div class="confirmify" id="confirmify-error">
            <p>${logo} Confirmify can <span class="error">not verify</span> the source of this video</a>.</p>
        </div>
    `)
}

function renderPending() {
    render(`
        <div class="confirmify" id="confirmify-pending">
            <p>${logo} Confirmify is busy verifying this video.</p>
        </div>
    `)
}

chrome.runtime.onMessage.addListener(msgObj => {
    if (msgObj.monitoring && window.location.href.indexOf('watch') > -1) {
        const pending = document.getElementById('confirmify-pending');
        const verified = document.getElementById('confirmify-pending');
        const error = document.getElementById('confirmify-error');

        if (pending) pending.remove()
        if (verified) verified.remove()
        if (error) error.remove

        renderPending();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: window.location.href})
        };
        fetch('http://localhost:8000/api/v1/contents/verify/', requestOptions)
            .then((response) => {
                document.getElementById('confirmify-pending').remove()
                if(response.status === 200) {
                    return response.json().then(renderVerified)
                }
                return renderNotVerified()
            })
            .then(console.log);
    }
});