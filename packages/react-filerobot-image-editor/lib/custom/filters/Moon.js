import BaseFilters from"./BaseFilters";var BRIGHTNESS_CONST=.1;function Moon(a){BaseFilters.apply(a,BaseFilters.grayscale(),BaseFilters.brightness(BRIGHTNESS_CONST));var b=a.data,c=b.length}Moon.filterName="Moon";export default Moon;