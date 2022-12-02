const btn = document.querySelector('[data-btn]')
const pokemon = document.querySelector('[data-pokemon]')
const photo = document.querySelector('[data-photo]')
const abilityOne = document.querySelector('[data-ability-1')
const abilityTwo = document.querySelector('[data-ability-2')
const moveDetailsOne = document.querySelector('[data-move-details-1]')
const moveDetailsTwo = document.querySelector('[data-move-details-2]')

btn.addEventListener('click', () => {
    fetchFun()
})

function fetchFun() {
    // const random = Math.ceil(Math.random() * 905)
    const random = Math.ceil(Math.random() * 151)

    const url = `https://pokeapi.co/api/v2/pokemon/${random}/`

    fetch(url)
        .then(res => res.json())
        .then(data => {

            const type = data.types[0].type.name

            // images from http://thingonitsown.blogspot.com/2019/01/18-elemental-textures.html
            const grass = "url('https://4.bp.blogspot.com/-mfjlEC-Q9UM/XDtxjx36gwI/AAAAAAAAFBc/Wb8oYowsRO4SoukkYwYR-F6E5z95lkBbACLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B5.png')"
            const electric = "url('https://1.bp.blogspot.com/-oUDoo9lpGpw/XDtxhVAXlsI/AAAAAAAAFA8/EZCdW-y35LIVkvP1d8nlhrRtkEoMfduEACLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B12.png')"
            const fire = "url('https://3.bp.blogspot.com/-A-ME8bEyyhE/XDtxkS4Dw5I/AAAAAAAAFBk/Cq5giieSNrUbc-AUyRgwjjEcWzb_iPLvwCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B7.png')"
            const water = "url('https://2.bp.blogspot.com/-WK5NL0qKQCo/XDtxgYeGf-I/AAAAAAAAFAw/ugm27rYVAowfsh-PeIrTSp5fie4nYgyhQCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B0.png')"
            const poison = "url('https://4.bp.blogspot.com/-YvJLL6ExOPI/XDtxgbwNZbI/AAAAAAAAFAo/P7_d3rdo0VYX7zyRGPZ3Oz4gca3MHY3TQCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B1.png')"
            const normal = "url('https://2.bp.blogspot.com/-F5OtHFXYMkw/XDtxigDnBmI/AAAAAAAAFBQ/YNyD6CUKBboQFgdBebACHm7wNsgebSrbwCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B2.png')"
            const psychic = "url('https://1.bp.blogspot.com/-ACRgLu0kvro/XDtxipKyukI/AAAAAAAAFBU/C9UVB89P_pwI-5izYZfL2hnfHNnO4NkAwCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B3.png')"
            const dragon = "url('https://1.bp.blogspot.com/-uNgr7pBEiQE/XDtxjMb2v3I/AAAAAAAAFBY/cfbP5B-uqjoHVn1SUJmfs1awjyMvh5kYQCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B4.png')"
            const ground = "url('https://3.bp.blogspot.com/-tLF3Ofe3ufk/XDtxkB2j3uI/AAAAAAAAFBg/9RtfF-nZxqIIdPTEVk_5aAC1lwxfcldDACLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B6.png')"
            const bug = "url('https://2.bp.blogspot.com/-T1fJihZP-2s/XDtxkTnq3AI/AAAAAAAAFBo/UpTirJocsAEyqcvMQo1tIOaMurmeZVPpwCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B8.png')"
            const rock = "url('https://4.bp.blogspot.com/-8BAeGFpuBb0/XDtxkgBRPWI/AAAAAAAAFBs/XzENZ-JqdcgU9jvTFVWa8CSyOnrSMHYwQCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B9.png')"
            const flying = "url('https://3.bp.blogspot.com/-HoVFu9yXNPg/XDtxgXzUvhI/AAAAAAAAFAs/aGIvFA92Q9YvCc_h-F21wETIJwzl15_IgCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B10.png')"
            const fighting = "url('https://1.bp.blogspot.com/-1OBJI6Dl9qw/XDtxg4yrNuI/AAAAAAAAFA0/L1q2rlFyWjknRlDTc3VZaLA6sj7-awT9QCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B11.png')"
            const ice = "url('https://2.bp.blogspot.com/-e-iZW_WBBVg/XDtxhCjdGMI/AAAAAAAAFA4/7o27hOZyaCUFfe-ohuC9lIbpJg4YZAZugCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B13.png')"
            const ghost = "url('https://3.bp.blogspot.com/-4wWTIEwXz8o/XDtxhlAGsnI/AAAAAAAAFBA/T4a9kESEGDo_XlD_pkdc9w3-2IkhtsYrACLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B14.png')"
            const fairy = "url('https://4.bp.blogspot.com/-QVM43Z1B5GA/XDtxh2TQNSI/AAAAAAAAFBE/4P7NCSXVNKwz4wJAMXpKiO-liLH4q5m6QCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B15.png')"
            const steel = "url('https://1.bp.blogspot.com/-st-ZCoV0_gA/XDtxiEYqJ9I/AAAAAAAAFBI/NyZ1SGx9x4oxRXf_HyL_koxUyOzM3oN8wCLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B16.png')"
            const dark = "url('https://3.bp.blogspot.com/-CjFbCWR9ftg/XDtxiry0PHI/AAAAAAAAFBM/FJ2X_dIsz4Mid2kX17zTh6OvHB9_IE2nACLcBGAs/s1600/pokecard%2Bit%2B0%2Btype%2B17.png')"
            const none = "url('https://1.bp.blogspot.com/-h4teoDRZgpA/XD-SSecwV9I/AAAAAAAAFHY/NiIzKVxMc9oEYLcmMd1I-GpA2Y-ZQH80wCLcBGAs/s1600/domain%2Bwarping.png')"

            // images from https://pokemongo.fandom.com/wiki/Pok%C3%A9mon
            const bugInner = "url('https://static.wikia.nocookie.net/pokemongo/images/0/05/Type_Background_Bug.png/revision/latest/scale-to-width-down/150?cb=20171026003543')"
            const darkInnger = "url('https://static.wikia.nocookie.net/pokemongo/images/f/f5/Type_Background_Dark.png/revision/latest/scale-to-width-down/150?cb=20171026003554')"
            const dragonInner = "url('https://static.wikia.nocookie.net/pokemongo/images/2/28/Type_Background_Dragon.png/revision/latest/scale-to-width-down/150?cb=20171026003601')"
            const electricInner = "url('https://static.wikia.nocookie.net/pokemongo/images/6/6c/Type_Background_Electric.png/revision/latest/scale-to-width-down/150?cb=20171026003611')"
            const fairyInner = "url('https://static.wikia.nocookie.net/pokemongo/images/1/19/Type_Background_Fairy.png/revision/latest/scale-to-width-down/150?cb=20171026003635')"
            const fightingInner = "url('https://static.wikia.nocookie.net/pokemongo/images/1/17/Type_Background_Fighting.png/revision/latest/scale-to-width-down/150?cb=20171026003644')"
            const fireInner = "url('https://static.wikia.nocookie.net/pokemongo/images/6/64/Type_Background_Fire.png/revision/latest/scale-to-width-down/150?cb=20171026003653')"
            const flyingInner = "url('https://static.wikia.nocookie.net/pokemongo/images/6/65/Type_Background_Flying.png/revision/latest/scale-to-width-down/150?cb=20171026004151')"
            const ghostInner = "url('https://static.wikia.nocookie.net/pokemongo/images/4/44/Type_Background_Ghost.png/revision/latest/scale-to-width-down/150?cb=20171026003713')"
            const grassInner = "url('https://static.wikia.nocookie.net/pokemongo/images/9/92/Type_Background_Grass.png/revision/latest/scale-to-width-down/150?cb=20171026003722')"
            const groundInner = "url('https://static.wikia.nocookie.net/pokemongo/images/a/a3/Type_Background_Ground.png/revision/latest/scale-to-width-down/150?cb=20171026003731')"
            const iceInner = "url('https://static.wikia.nocookie.net/pokemongo/images/8/85/Type_Background_Ice.png/revision/latest/scale-to-width-down/150?cb=20171026003739')"
            const normalInner = "url('https://static.wikia.nocookie.net/pokemongo/images/f/f6/Type_Background_Normal.png/revision/latest/scale-to-width-down/150?cb=20171026003751')"
            const poisonInner = "url('https://static.wikia.nocookie.net/pokemongo/images/d/db/Type_Background_Poison.png/revision/latest/scale-to-width-down/150?cb=20171026003759')"
            const psychicInner = "url('https://static.wikia.nocookie.net/pokemongo/images/f/f8/Type_Background_Psychic.png/revision/latest/scale-to-width-down/150?cb=20171026003814')"
            const rockInner = "url('https://static.wikia.nocookie.net/pokemongo/images/5/5d/Type_Background_Rock.png/revision/latest/scale-to-width-down/150?cb=20171026003823')"
            const steelInner = "url('https://static.wikia.nocookie.net/pokemongo/images/3/30/Type_Background_Steel.png/revision/latest/scale-to-width-down/150?cb=20171026003833')"
            const waterInner = "url('https://static.wikia.nocookie.net/pokemongo/images/d/d2/Type_Background_Water.png/revision/latest/scale-to-width-down/150?cb=20171026003849')"
            const noneInner = "url('https://1.bp.blogspot.com/-h4teoDRZgpA/XD-SSecwV9I/AAAAAAAAFHY/NiIzKVxMc9oEYLcmMd1I-GpA2Y-ZQH80wCLcBGAs/s1600/domain%2Bwarping.png')"

            switch (type) {
                case "grass":
                    document.querySelector(".card").style.backgroundImage = grass;
                    document.querySelector(".btn").style.backgroundImage = grass;
                    document.querySelector(".photo").style.backgroundImage = grassInner
                    break;

                case "electric":
                    document.querySelector(".card").style.backgroundImage = electric;
                    document.querySelector(".btn").style.backgroundImage = electric;
                    document.querySelector(".photo").style.backgroundImage = electricInner
                    break;

                case "fire":
                    document.querySelector(".card").style.backgroundImage = fire;
                    document.querySelector(".btn").style.backgroundImage = fire;
                    document.querySelector(".photo").style.backgroundImage = fireInner
                    break;

                case "water":
                    document.querySelector(".card").style.backgroundImage = water;
                    document.querySelector(".btn").style.backgroundImage = water;
                    document.querySelector(".photo").style.backgroundImage = waterInner
                    break;

                case "poison":
                    document.querySelector(".card").style.backgroundImage = poison;
                    document.querySelector(".btn").style.backgroundImage = poison;
                    document.querySelector(".photo").style.backgroundImage = poisonInner
                    break;

                case "normal":
                    document.querySelector(".card").style.backgroundImage = normal;
                    document.querySelector(".btn").style.backgroundImage = normal;
                    document.querySelector(".photo").style.backgroundImage = normalInner
                    break;

                case "psychic":
                    document.querySelector(".card").style.backgroundImage = psychic;
                    document.querySelector(".btn").style.backgroundImage = psychic;
                    document.querySelector(".photo").style.backgroundImage = psychicInner
                    break;

                case "dragon":
                    document.querySelector(".card").style.backgroundImage = dragon;
                    document.querySelector(".btn").style.backgroundImage = dragon;
                    document.querySelector(".photo").style.backgroundImage = dragonInner
                    break;

                case "ground":
                    document.querySelector(".card").style.backgroundImage = ground;
                    document.querySelector(".btn").style.backgroundImage = ground;
                    document.querySelector(".photo").style.backgroundImage = groundInner
                    break;

                case "bug":
                    document.querySelector(".card").style.backgroundImage = bug;
                    document.querySelector(".btn").style.backgroundImage = bug;
                    document.querySelector(".photo").style.backgroundImage = bugInner
                    break;

                case "rock":
                    document.querySelector(".card").style.backgroundImage = rock;
                    document.querySelector(".btn").style.backgroundImage = rock;
                    document.querySelector(".photo").style.backgroundImage = rockInner
                    break;

                case "flying":
                    document.querySelector(".card").style.backgroundImage = flying;
                    document.querySelector(".btn").style.backgroundImage = flying;
                    document.querySelector(".photo").style.backgroundImage = flyingInner
                    break;

                case "fighting":
                    document.querySelector(".card").style.backgroundImage = fighting;
                    document.querySelector(".btn").style.backgroundImage = fighting;
                    document.querySelector(".photo").style.backgroundImage = fightingInner
                    break;

                case "ice":
                    document.querySelector(".card").style.backgroundImage = ice;
                    document.querySelector(".btn").style.backgroundImage = ice;
                    document.querySelector(".photo").style.backgroundImage = iceInner
                    break;

                case "ghost":
                    document.querySelector(".card").style.backgroundImage = ghost;
                    document.querySelector(".btn").style.backgroundImage = ghost;
                    document.querySelector(".photo").style.backgroundImage = ghostInner
                    break;

                case "fairy":
                    document.querySelector(".card").style.backgroundImage = fairy;
                    document.querySelector(".btn").style.backgroundImage = fairy;
                    document.querySelector(".photo").style.backgroundImage = fairyInner
                    break;

                case "steel":
                    document.querySelector(".card").style.backgroundImage = steel;
                    document.querySelector(".btn").style.backgroundImage = steel;
                    document.querySelector(".photo").style.backgroundImage = steelInner
                    break;

                case "dark":
                    document.querySelector(".card").style.backgroundImage = dark;
                    document.querySelector(".btn").style.backgroundImage = dark;
                    document.querySelector(".photo").style.backgroundImage = darkInnger
                    break;

                default:
                    document.querySelector(".card").style.backgroundImage = none;
                    document.querySelector(".btn").style.backgroundImage = none;
                    document.querySelector(".photo").style.backgroundImage = noneInner
                    break;
            }
            // do something 
            pokemon.textContent = capitalizeFirstLetter(data.forms[0].name)
            photo.src = data.sprites.other['official-artwork'].front_default

            abilityOne.textContent = capitalizeFirstLetter(data.abilities[0].ability.name)
            abilitiesOne(data.abilities[0].ability.name)

            abilityTwo.textContent = capitalizeFirstLetter(data.abilities[1].ability.name)
            abilitiesTwo(data.abilities[1].ability.name)

        })
        .catch(err => {
            console.log(`error: ${err}`)
        })
}
function abilitiesOne(ability) {
    const url = `https://pokeapi.co/api/v2/ability/${ability}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const str = data.flavor_text_entries[0].flavor_text
            moveDetailsOne.textContent = capitalizeFirstLetter(str.toLowerCase())
        })
        .catch(err => {
            console.log(`error: ${err}`)
        })
}
function abilitiesTwo(ability) {
    const url = `https://pokeapi.co/api/v2/ability/${ability}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const str = data.flavor_text_entries[0].flavor_text
            moveDetailsTwo.textContent = capitalizeFirstLetter(str.toLowerCase())
        })
        .catch(err => {
            console.log(`error: ${err}`)
        })
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

fetchFun()