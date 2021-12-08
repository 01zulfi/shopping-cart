import ceres from "./images/1-ceres.jpg";
import vesta from "./images/4-vesta.jpg";
import itokawa from "./images/25143-itokawa.jpg";
import ida from "./images/243-ida.jpg";
import eros from "./images/433-eros.jpg";
import mathilde from "./images/253-mathilde.jpg";
import bennu from "./images/101955-bennu.jpg";

const uniqueId = () =>
  Math.floor(Math.random() * Date.now() + Math.random() * 999999);

const asteroids = [
  {
    name: "1 Ceres",
    urlName: "1-ceres",
    price: "253",
    id: uniqueId(),
    imgSrc: ceres,
    source: "https://en.wikipedia.org/wiki/Ceres_(dwarf_planet)",
    desc: `1 Ceres is the largest object in the asteroid belt between the orbits
    of Mars and Jupiter. Ceres was the first asteroid discovered on 1 January,
    1801 by Giuseppe Piazzi at Palermo Astronomical Observatory in Sicily. 
    Originally considered a planet, it was reclassified as an asteroid in 
    the 1850s after the discovery of dozens of other objects in similar orbits. 
    In 2006, it was reclassified again as a dwarf planet – the only one always 
    inside Neptune's orbit – because, at 940 km (580 mi) in diameter, it is the 
    only asteroid large enough for its gravity to make it plastic and to maintain
    it as a spheroid `,
  },
  {
    name: "4 Vesta",
    price: "299",
    urlName: "4-vesta",
    id: uniqueId(),
    imgSrc: vesta,
    source: "https://en.wikipedia.org/wiki/4_Vesta",
    desc: `4 Vesta is one of the largest objects in the asteroid belt, with a mean
    diameter of 525 kilometres (326 mi). It was discovered by the German astronomer
    Heinrich Wilhelm Matthias Olbers on 29 March 1807 and is named after Vesta, 
    the virgin goddess of home and hearth from Roman mythology. Vesta is thought 
    to be the second-largest asteroid, both by mass and by volume, after the dwarf
    planet Ceres, though in volume it overlaps with the uncertainty in the
    measurements of 2 Pallas. Numerous fragments of Vesta were ejected by
    collisions one and two billion years ago that left two enormous craters
    occupying much of Vesta's southern hemisphere.`,
  },
  {
    name: "25143 Itokawa",
    urlName: "25143-itokawa",
    price: "99",
    id: uniqueId(),
    imgSrc: itokawa,
    source: "https://en.wikipedia.org/wiki/25143_Itokawa",
    desc: `25143 Itokawa (provisional designation 1998 SF36) is a sub-kilometer
    near-Earth object of the Apollo group and a potentially hazardous asteroid. 
    It was discovered by the LINEAR program in 1998 and later named after 
    Japanese rocket engineer Hideo Itokawa. The peanut-shaped S-type asteroid
    has a rotation period of 12.1 hours and measures approximately 330 meters 
    (1,100 feet) in diameter. Due to its low density and high porosity, 
    Itokawa is considered to be a rubble pile, consisting of numerous boulders
    of different sizes rather than of a single solid body. It was the first 
    asteroid to be the target of a sample return mission, the Japanese space
    probe Hayabusa, which collected more than 1500 regolith dust particles
    from the asteroid's surface in 2005`,
  },
  {
    name: "243 Ida",
    urlName: "243-ida",
    price: "147",
    id: uniqueId(),
    imgSrc: ida,
    source: "https://en.wikipedia.org/wiki/243_Ida",
    desc: `Ida, minor planet designation 243 Ida, is an asteroid in the Koronis
    family of the asteroid belt. It was discovered on 29 September 1884 by
    Austrian astronomer Johann Palisa at Vienna Observatory and named after a 
    nymph from Greek mythology. Later telescopic observations categorized Ida
    as an S-type asteroid, the most numerous type in the inner asteroid belt. 
    On 28 August 1993, Ida was visited by the uncrewed Galileo spacecraft while
    en route to Jupiter. It was the second asteroid visited by a spacecraft
    and the first found to have a natural satellite. Ida's orbit lies between 
    the planets Mars and Jupiter, like all main-belt asteroids. Its orbital
    period is 4.84 years, and its rotation period is 4.63 hours.`,
  },
  {
    name: "433 Eros",
    urlName: "433-eros",
    price: "444",
    id: uniqueId(),
    imgSrc: eros,
    source: "https://en.wikipedia.org/wiki/433_Eros",
    desc: `433 Eros, provisional designation 1898 DQ, is a stony and elongated
    asteroid of the Amor group and the first discovered and second-largest
    near-Earth object with a mean diameter of approximately 16.8 kilometers.
    Visited by the NEAR Shoemaker space probe in 1998, it became the first
    asteroid ever studied from orbit. The eccentric asteroid was discovered
    by German astronomer Carl Gustav Witt at the Berlin Observatory on
    13 August 1898, and later named after Eros, a god from Greek mythology;
    the son of Aphrodite who is identified with the planet Venus.`,
  },
  {
    name: "253 Mathilde",
    urlName: "253-mathilde",
    price: "121",
    id: uniqueId(),
    imgSrc: mathilde,
    source: "https://en.wikipedia.org/wiki/253_Mathilde",
    desc: `Mathilde (minor planet designation: 253 Mathilde) is an asteroid in
    the intermediate asteroid belt, approximately 50 kilometers in diameter,
    that was discovered by Austrian astronomer Johann Palisa at Vienna 
    Observatory on 12 November 1885. It has a relatively elliptical orbit that
    requires more than four years to circle the Sun. This tumbling asteroid
    has an unusually slow rate of rotation, requiring 17.4 days to complete
    a 360° revolution about its axis. It is a primitive C-type asteroid, 
    which means the surface has a high proportion of carbon; giving it a 
    dark surface that reflects only 4% of the light that falls on it`,
  },
  {
    name: "101955 Bennu",
    urlName: "101955-bennu",
    price: "191",
    id: uniqueId(),
    imgSrc: bennu,
    source: "https://en.wikipedia.org/wiki/101955_Bennu",
    desc: `101955 Bennu (provisional designation 1999 RQ36) is a carbonaceous
    asteroid in the Apollo group discovered by the LINEAR Project on 
    11 September 1999. It is a potentially hazardous object that is listed on
    the Sentry Risk Table and tied for the highest cumulative rating on the
    Palermo Technical Impact Hazard Scale. It has a cumulative 1-in-1,800 chance
    of impacting Earth between 2178 and 2290 with the greatest risk being
    on 24 September 2182. It is named after the Bennu, the ancient
    Egyptian mythological bird associated with the Sun, creation, and
    rebirth. 101955 Bennu has a mean diameter of 490 m (1,610 ft; 0.30 mi)
    and has been observed extensively with the Arecibo Observatory 
    planetary radar and the Goldstone Deep Space Network.`,
  },
];

export default asteroids;
