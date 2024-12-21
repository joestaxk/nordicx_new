import Link from 'next/link'
import React from 'react'


const footerData = {
    aboutUs: [
        {
            text: "about",
            link: "#"
        },
        {
            text: "User Agreement",
            link: "#"
        },
        {
            text: "Privacy Policy",
            link: "#"
        },
        {
            text: "Risk Disclosure",
            link: "#"
        },
        {
            text: "M-Ventures",
            link: "#"
        },
        {
            text: "MEXC Blog",
            link: "#"
        },
    ],
    services: [
        {
            text: "Buy Crypto",
            link: "#"
        },
        {
            text: "Download MEXC",
            link: "#"
        },
        {
            text: "Fees",
            link: "#"
        },
        {
            text: "Referral Program",
            link: "#"
        },
        {
            text: "Affiliate Program",
            link: "#"
        },
        {
            text: "API",
            link: "#"
        },
    ],
    userSupport: [
        {
            text: "Customer Service",
            link: "#"
        },
        {
            text: "Help Center",
            link: "#"
        },
        {
            text: "Announcements",
            link: "#"
        },
        {
            text: "Learn",
            link: "#"
        },
        {
            text: "VIP Benefits",
            link: "#"
        },
        {
            text: "Submit an Enquiry",
            link: "#"
        },
        {
            text: "Improvement Suggestions",
            link: "#"
        },
    ],
    buyCrypto: [
        {
            text: "Buy Bitcoin",
            link: "#"
        },
        {
            text: "Buy Ethereum",
            link: "#"
        },
        {
            text: "Buy MX Token",
            link: "#"
        },
        {
            text: "Buy XRP",
            link: "#"
        },
        {
            text: "Buy Solana",
            link: "#"
        },
    ],

    contactUs: [
        {
            text: "Let’s Collaborate (Businesses)",
            link: "#"
        },
        {
            text: "Let’s Collaborate (Institutions)",
            link: "#"
        },
        {
            text: "Let's Collaborate (Media)",
            link: "#"
        },
        {
            text: "Listing Application",
            link: "#"
        },
        {
            text: "OTC Merchant Application",
            link: "#"
        },
    ],

    community: [
        // 
        {
            text: `
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect y="0.97998" width="20" height="20" rx="10" fill="#6E7583"/>
        <rect y="0.97998" width="20" height="20" rx="10" fill="url(#pattern0_14_1224)"/>
        <defs>
        <pattern id="pattern0_14_1224" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_14_1224" transform="scale(0.0125)"/>
        </pattern>
        <image id="image0_14_1224" width="80" height="80" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAzFBMVEX///8ApeUArfIAo+IAqu0AqOoAqewApucAq+/7/v/u+f3n9/0AtvMArukAq+T0/P4BtusAsvHD7Pmi4fcAsujd8/y05Pfx+v7j9fxbzPVQyPAAuO8Aru3f8vuP2fWX2/QAruX4/P7S8Pq76Pmu4/eH1/V91fUbwfQAuPRqzvM6xPDA6fiq5PiY3veT3PeB2PdJyPMAvPN30fHg9PzY8fspwPFExO0Aseye3/dVzPZt0PReyvAKvO8Ate/J7Pl10/YZve8ApuJlzvSN1vKmq12XAAADeklEQVRYw6zS227iMBAG4F+WbeHYUjaJaAgJrAoLCS2nCFWUVVmqvv9DLdCimtrkyCff2BqNZsaDEnK+itJceR7xVJ7uVnOJ5sJ/B0UM6q8fogF3HClyg9qNXdQjJxkplK16qE4sMlJKLUXVdK96uvYpZUoqSyVKBYrUoAIUCyNS085BAScnteUFbW8UaSDr4gY/I42oMaw2GWlIWWt0FGlMSRjCnLQQm38dkVZ2AtcC0k5ngSvS67TkSWhE2mkt15t+7dzBUitQFcRR8263F7hY0rsY4kvPo3fhDfBpQhtIqGmKM3dfu5R1MOqNPfM9xMmY1rNfODiZUcMDTqJanUa+uD2pNY7CGl+SBi5wMbXMwgHgU8r5+ZxdLuadPv1xoZlZ4p8BHHgl8bSLay/cNAPg8QpeHh7xU8xNCSB5Kbr2YZFwiwECVuLXKoSNy2wWmJaMbg6NjGJcjBi3mKLPb0v6vj66x2DLD7gIuM0a7/wGFg830I3ejgUIbWts3hAzu3joQieChLFIaFvDbPbYMgvef8a17vvx+UPL526ZDQVlhuTDwTWxPIX9Fvg2YHYw12Qo8UPviR1NoPMrJkz+l1KHvW3CQBiAX2uxTiYysVqgUTYCScmmkHatKEurpKpW9f//pykhWYtzAQce8cmCl7uz5WwGy+jhx66XF9RcS57dcgSbV00/Q91G8qBlzR0s9wN+PZesAYyUJIkkyeqpLtCj8M9+8bmERZnD+1T//hmvZJGvi7cZ9lQW0I6ew+YNiPUdEzolg8fpqpz//iVpx8xxYi6JlaOQPJJHeoxTGUnWBtfUJgLjgXj3GAtqNvDAmBBLxICmFhkYhlgawIZa6EzBNtLE2gK4Em0oH8NSkmDdArjRolVwhbpIsLS3n69w8Fjfmq1grdm/8XStSCNYUTXgQLig5Qj/UUPHwE/hxtwpVELBKlB50sLR8pA45QsMcZAIV+atYYQLHKlAOJusRsMtX+AMsEp0QoEWrCk+qb+iN6PwxdAXPflPqHkRPSWwTL71slaweEGfvMDDiWHaPS8dghH6XfP8EqyV3zEvwhlh2qnfEmcNgw77MUYDb3LxefHQSCX+ReNLFNqMjXueieFATVPH8hYKbtSH7xD3MYO7uEhb4ooYlxlFa/9s2jq6QQfeaslkvm9vPXQXJ0Vu0vd9UhrkRRIqNPoHtOtxIKDb0o8AAAAASUVORK5CYII="/>
        </defs>
        </svg>
        `, link: "#"
        },
        {text:`<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect y="0.97998" width="20" height="20" rx="10" fill="#6E7583"/>
            <rect y="0.97998" width="20" height="20" rx="10" fill="url(#pattern0_14_1225)"/>
            <defs>
            <pattern id="pattern0_14_1225" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_14_1225" transform="scale(0.0125)"/>
            </pattern>
            <image id="image0_14_1225" width="80" height="80" xlink:href="data:image/png;base64,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"/>
            </defs>
            </svg>
        `, link: "#"},
        {text: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect y="0.97998" width="20" height="20" rx="10" fill="#6E7583"/>
        <rect y="0.97998" width="20" height="20" rx="10" fill="url(#pattern0_14_1226)"/>
        <defs>
        <pattern id="pattern0_14_1226" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_14_1226" transform="scale(0.0125)"/>
        </pattern>
        <image id="image0_14_1226" width="80" height="80" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAkFBMVEX///8Ap/0AlfkAdvAArv4AaOoAsf8Aj/gAce4AbewAZekAq/4AefIAfvMAmvoAo/wAivcAhvYAnfsAoPwAgvUAausAsv8SifDW8f6Vyvmay/hbs/f4/P8EuvxZtvgHkvMKp/gIlvXn9f7M7f4jv/wKrPkKjvGZ3f2/5v1+0/06xf11zvxUxvsPnfai4P2y1vkvMPpLAAACP0lEQVRYw+WSDVPiMBCGl1paoVRpCx5q690BHn6c+v//ncmG2CyzdZMxM/jxNO5m6buPjgNcRAaynossFGYZssjEF6ZZpo76YUhN7efUNhKxLTXCyHwtYcG8L/hxeAWKyHwF4WikjqXAx/2ocF6pQz9yE3sRjGJyfGHabR8etl2XFTGE3W4Nlna9uX9XeC7rVkBZ0TWrgXMvRs9wyIpPgp9vA8HCpsHS4E1VHO25A07YmEUTtR0aDx6BE7JRXljTsWhDhHVT61NjNSa8m4JtB6wQAyZkNvEOtUjTDggZvIRbCBKeieyAsL7fZpqUT3sI6Xfwv5CGxPTEVoQMLeNLSJQKJYhwJcZlYQ0Oj7GFXWzhrYcwH35y/B8SYZ4ID+QSB0IJkH4lFf6J+heiUEIWJqHCea6PKvqiUBM5VGizWO2ubbrAXIIKxfiQ8AYkboeElXmqaq4KorqH8Ewv4CqiXKiAqrdUvbuShTndshNULLJwzW19RHg3JFy4VG+3axC4JDv9HRYssvCGXfuA8GlIWDos+qsonJc8QCZ/YVtGFm5ChU+XlitweLnac42pmY33A8ws5YynAoe/bKTst1FIkIQSsnARKDyRoEIxfmzh7wjC8tjCUwkqFOPfTvjPRzjRfaKqumHFSVXTqRCDOoNVv9fsd3SBicSMCIXwUYQn4PArVLgk10Hh8h3hUoIKxXh84dhhOWagQhLjVoBRCELKJxCeBgqn2Kb7NjYNR/PBlAr1i37DTjaMQoFDocQPFL4CwM/KxANowTwAAAAASUVORK5CYII="/>
        </defs>
        </svg>
        `, link: "#"},
        {text: `
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect y="0.97998" width="20" height="20" rx="10" fill="#6E7583"/>
        <rect y="0.97998" width="20" height="20" rx="10" fill="url(#pattern0_14_1227)"/>
        <defs>
        <pattern id="pattern0_14_1227" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_14_1227" transform="scale(0.0125)"/>
        </pattern>
        <image id="image0_14_1227" width="80" height="80" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAC01BMVEUAAAD58vv//ZH/4XLMYcPzd1X/9Iz4XZ7/6oTzVK3/nDjtLIn/tGH/x2DvLaHx5P/qLnHtMbjDgf+zRu66ZP/gXbjazP/DQ9bmONDaSc6nQ+ekbPX/9XH/+3//ff+vcf///47cMkzlvv//vivYhv/tTPL4aUT//4raM0r/qf/cN07zWvz//4/gPz7/2zvVNkH/9GL/1DD0ZUP/////YIP/aHT9WKX/ZH3/YJj/kUj7+Pj9X2z/eGD/gv//hkfqTXP/jv/3V7T+W6//7///ev//e0X/jFnrTa3/ZIrhQ2j/7Gf6VZjaPF//5Vv/g1n/nUX/y0P/3f//p///cmv/k1b/1Uj/bkLhW/zlTNX8Woz+OXL/3VL/wj3fUu7gQ63+NX78W3r0V2HiTeH/bWX+c/7/nfv/8+X/ukX/tjv/rDr/wv/rav7/Xrr/YUPsT8v0VL//Mp38O2b/z1T+ck7sT7PZOHf/xEvjprP+MY7/O4n/8nT/SGP/aKr/m1D/ozr/Ppn+a1rvbVLhaf//OcL/ZrjkR7H/QajhQKHbOI7/+n3/V07/rUj95+r/NKv2T4nlR4j4T3j/g2L/fFP+tP7/Z/7/Rbf/VV3pTlrlZ1T/ZU7jXUz9WPr/Ps7/NrfPk6r/12TwPkz6UETTZv/2bf3lutn9R1TvYFH+z/zzS5nROFTjev/nj/7TUfj98PP9T+zTSOL8Rd/rr6rmr47+YFjfTUj/kjn0d//q4+X/UtfXqMn//r3//s3/TMT70cP//azSNGj63PvHSO7/aOTdP07+hTnIWv/vuLrbnbH8geT7ydz/5cL5xKT/85/DNUjtqf/0g//Xxs76v8TTRarYjJfTSGTTg//g1dz/aMTvuZfDWXLSOUHYo//zlv/xu/v4O9X1gLizhKHsyf/+ttj1rM3Es7z9mqnAYp7mbYvtioj8lWvsSb78gpHXeXfkXuf/15LOQ4b9sZAy1YFwAAAAM3RSTlMA+/v+D/37/v3+/vj9/fj19Pj+/f789/f387tWUw/OysTEwO6YtraYllZWUdnSvkHTpWLUAIlsAAAJh0lEQVRYw5TUz0vTcRzHcQfC8FL0w35CgdghOm7MsZBNC5x8d9kuawfFwl000oPDQ4PANHfQbbA8qTtUsDk1O7kEQQ0yd8iWTkPMtrQUgvBf6PX+vD/f73euFfpUkO3rHnu/9/lqRXGVV2trai6ITssMpw3/7XRNzc3KivJdvX727Pb29ndqcXHR7XbfOU7uRAxmee7sxsY2Wl3dQd87EiJ3wv3PcDGR6Ojw+K/dLOEqa8+TR02KVrkY1RHrKBsuUB6P3+9w1FYe8a6fP/+CSqVSG6nUJPdV5Ecev6dsfsqB6uvrr5Goe+/fg0N9fSluFl+fZI5PjvKxhe4iFjUPIDRZJ0p1znbOqt2l6svGWjvSxCvCm3rhhcgefcleimZfts+2iwTNvvYOwnv+vL1Wnu85eFNTXq7P2+mlb68mapWKDDpIhEfd4gHPLU1RXmkS9nVn0fTf7iQ8DuLkxyhBLE0DLhHolV6Lt2US2HFyx4CJc8aI4EZHR2/xgABb1I7L8Zwxv5/uHgeBo+gGjhjeks793jGdKLfHEwNY3w6PqhQbz6jcg99yvJMMqYOvsTNtPDPT8oA7ucdrO1bevXstulFxBd7MA5nmGdLpzVclzRWVTRtsmuj3rxSDmnfv3o7KZeP7a2ut3ADXeqTBteq5TYOJS8Aj8A26XHERHnP3Vvi6LVsAJ6Uerqk46CAH1wqbUvQDfPv2DXWJQWhILvyjwBxjrJU0KArtZ/kVixr4jUDJPVrRvFbGGnoaiqtSf8JjMLQvZ/TDI/GbAJl79ChhojYLrT1d1MOj9VNfRP0Pq/KZzB7AUMHAI36BNzY2JkDBoV9ywGrSGho0qVGrX2vXhIaaQqFDubQAEYPs5XnAuLqnSln02GxszLOSwYhxvntW5ufHJHhZegN7JipbzR9Vo64pyWRSMRqZpJKvGLQB3E+bqN15KZ4BSF7Xr9YMb1wFUFJCU5JKfndIrLib5+cCWR085GNJEPgUAQSHD21gcFr8DkDWGiVnxBvpZYIWJRAoyAeRUCgwZ6KmAYJjkLyepkF+0w9VVRY1Be2ZStqNBAJbWTFxMBIJBeL89Pz8iAZ2oSYNZMsouLBxqNSDEwksbP1Ip/f6i8GRERWsFjdJU1IHwVmNCnn5aVOZpg8CgcBhJBgMJjFtETj+dHxcgDhUHKQEFYsVERc26p7NYLPpIpxwEBmLQDSOCMSpWpLJiAoqwvOFw2F133R8K7ewkDvotWlbR6wSXPgL7IH3N0iePA9DPOdyNSOXK7csyT2lFHzG4DBA8izJsAR7fVbk84WjB3K8LdLsFMh1Keat1hLw2Qi48eFTFVXgLAoGUkEfe/bPPB88wkrEjJVEpQhE8AiEZwUY1UGnzxy150yi9WZ7mxm1SXFimZ+3UopdB+EhgEY6VUykgmaf02k2R5vX+X+FPSo8eo7FHI/4k0BfMYgYFFeiGogX0zyuZR4w2gZQkjxiL//B+I6CT9iTIFbUQF6weWJIPDzAgGoQCdzie5HBZg2E2D3cDdBqdTqdAB+rYJ25DgO6+EjsUTzWaiNwgnf2+Rj8IEGI3Qigk1a8/VgH6+ra7rv4TNL3ASKzVAn8aPgH2M3gn0rs76WpMI7j+GliiBn0BxgUQUX02w6ynXHuNmLoJsztQoUaQtsuhFIwTRzzUueNu9gPb9KLBl54YdsINubNhtGm0KiL8j5SFOlP6PN9vs85ZxsG+Z4KevHye/Y8zzkivMFBTUsZoKaqqpZOG6AGUMQjWuBzBocMEDEIDkIqlWoHq/KSARoZIF/yMwm+7QTBtYI7BsgH+bdG35smFuuAF2UVy94KzkvwiqIKMJ9a6QB52+yEIBKpCo9A3qBNgFh2C4Q493pOgP7JyXh+pQX0a6F04YivWQMIjtO0oYODT7yxacI2cH4OAfTDawMnVZXAwoBoL8QkvTQttHUg992zzgmlCNDpdMbj2awBxicRgU3+wQlEMvGJ33NwKm8OL/8JOqmZbHaqFczn1guZAe5XiMkQqsITnQx2gC9IZDCJZoJTbWA8lysUdqTYVENcOrQnveZLAb48D0wyGDTBuNMJECMWVgcM8kjDmEd75oNvECACuGWAaP4FgTrlCgaDEpxxUkLMbA+c27aqqbzP00MGOEaeASZ1l6sTXCLxdPtc74SWnWoDuSuKXUcQTTDZImbOe9BjPkSmlq5ufZbgGEgGKb3mcknQlfR6vRCXSFzP7HRwjiY8YGKzAzxk0DGGJFgksVarveKN7NK9IohLmcz6+mmz1avgGOAoASM0BPArj/1mjMlrSm+vz+ezF2u1Ct+w3LrudpOY7JZk5miP/5zbO8rksKf8filqoeqhPIlfAFIExmIxn69YrDX48B7rdjcishukMBF/XQLHqXgR+PMS7/43EBmMRaPRWKy3WOzjN6OBN2B01E2BZBMqteQUSZInlM/pk4UFJq8pUZSIQvTJTTEKEEmz28q5tgbNNHFA04ffccWUtgARJIGRSCSRwIy9dfm+2+2Li4ujnECpNQ6mVOkWVTiUfz814QkR4K1IJBwOY8ZY3wDX8PkgwjRQsNSa2zCpeDyfO/wmd76aEiACODERRlGIdVNk0jIl6ZUJL57NfbskLyqVYlGCs7Oz4UgkGsWIXL0PpEDtVthPXt2bFM2gbHfFITe7P4U+mODILIlhiGcSxFozaWJ42XXO5XKRd4zNKfuVz+cBIgIfjgSmEZP1lltApdH4gT629wM1Go3KtsM6PXECVxi8qTwJjL9HICGGIV4weNlsHs8kEjc27ir9geEuRCLIi4sVPD+QAd5Tro97ei739HSJIbHiZxfiHH9mEIOb8Ibwr6WHnn3UI4YcGZmYuFq/wHjHyXbwpqIo/Z79Uml3H0OSyKTjv6arHLt0seTB7NTUyubmxkb1noIe20okXoY4Ph0ACfP9Wb386t+t1it/oIk9RM+jKQYxINW/XCqXWRweHw8EYLKKIrIoFaMT31tENUqnTHATYPWRIrpjK0MsQfQMD5PIqFQtWKJsYrt3gLRnuOs3dss84zuPB0PSmJ2shcaQPEUd4E0ssRTvs2gTIoIqXJItmk4oSlBC1BGD5D0gz5qxVC5BXIaIQLLLNOvTAexUxKQ1Ig/I81niHdsuAsgiq2bMTlMs8ogWuFm4y55V/w0bWl4GyXnoRVk+zjzIqyDNEaX3gNe3kwRoJWzJd73r4kBeRX19iQTulhLM3b6nnN/1/js37tvMLuPDqgcJk0AkQHv37dtP2y72LyAin0716F08AAAAAElFTkSuQmCC"/>
        </defs>
        </svg>
        `, link: "#"},
        {text:`
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect y="0.97998" width="20" height="20" rx="10" fill="#6E7583"/>
        <rect y="0.97998" width="20" height="20" rx="10" fill="url(#pattern0_14_1228)"/>
        <defs>
        <pattern id="pattern0_14_1228" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_14_1228" transform="scale(0.0125)"/>
        </pattern>
        <image id="image0_14_1228" width="80" height="80" xlink:href="data:image/jpeg;base64,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"/>
        </defs>
        </svg>`, link: "#"}
    ]
}
export default function Footer() {
    return (
        <div className="flex justify-center bg-xDark text-white py-[4rem]">
            <div className="w-[1200px] flex justify-between gap-5 px-3 flex-wrap">
                <div className="">
                    <h3 className='text-xMutedText font-semibold capitalize'>About</h3>
                    <ul className='space-y-2 mt-4'>
                        {
                            footerData.aboutUs.map(({ link, text }) => (
                                <li className='text-[13px]'><Link href={link}>{text}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="">
                    <h3 className='text-xMutedText font-semibold capitalize'>Services</h3>
                    <ul className='space-y-2 mt-4'>
                        {
                            footerData.services.map(({ link, text }) => (
                                <li className='text-[13px]'><Link href={link}>{text}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="">
                    <h3 className='text-xMutedText font-semibold capitalize'>user support</h3>
                    <ul className='space-y-2 mt-4'>
                        {
                            footerData.services.map(({ link, text }) => (
                                <li className='text-[13px]'><Link href={link}>{text}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="">
                    <h3 className='text-xMutedText font-semibold capitalize'>buy crypto</h3>
                    <ul className='space-y-2 mt-4'>
                        {
                            footerData.buyCrypto.map(({ link, text }) => (
                                <li className='text-[13px]'><Link href={link}>{text}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="">
                    <h3 className='text-xMutedText font-semibold capitalize'>contact us</h3>
                    <ul className='space-y-2 mt-4'>
                        {
                            footerData.contactUs.map(({ link, text }) => (
                                <li className='text-[13px]'><Link href={link}>{text}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="">
                    <h3 className='text-xMutedText font-semibold capitalize'>community</h3>
                    <ul className='space-y-2 mt-4 flex items-center gap-3'>
                        {
                            footerData.community.map(({ link, text }) => (
                                <li className='text-[13px]'><Link href={link} dangerouslySetInnerHTML={{__html: text}}></Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
