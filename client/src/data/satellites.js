import cartosat2 from "../assets/satellites/cartosat2.jpg";
import risat1 from "../assets/satellites/risat1.jpg";
import insat3e from "../assets/satellites/insat3e.jpg";
import oceansat2 from "../assets/satellites/oceansat2.jpg";
import resourcesat2a from "../assets/satellites/resourcesat2a.jpg";

const satellites = [
  { name:"CARTOSAT-2 Series", image: cartosat2, purpose:"High-resolution imaging", launched:"2007–2018" },
  { name:"RISAT-1", image: risat1, purpose:"Radar imaging satellite", launched:"April 26, 2012" },
  { name:"INSAT-3E", image: insat3e, purpose:"Provides meteorological data", launched:"September 28, 2003" },
  { name:"Oceansat-2", image: oceansat2, purpose:"Monitors ocean color", launched:"September 23, 2009" },
  { name:"Resourcesat-2A", image: resourcesat2a, purpose:"Provides data for crop acreage", launched:"December 7, 2016" }
];

export default satellites;
