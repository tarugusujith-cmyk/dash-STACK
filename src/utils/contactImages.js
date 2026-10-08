import darrellOrtega from '../assets/images/contact-darrell-ortega.png'
import duaneDean from '../assets/images/contact-duane-dean.png'
import jasonPrice from '../assets/images/contact-jason-price.png'
import jonathanBarker from '../assets/images/contact-jonathan-barker.png'
import patrickGreer from '../assets/images/contact-patrick-greer.png'
import rosieGlover from '../assets/images/contact-rosie-glover.png'

/** Real contact photos, keyed by the exact name in mockData.contacts. */
const CONTACT_IMAGES = {
  'Jason Price': jasonPrice,
  'Duane Dean': duaneDean,
  'Jonathan Barker': jonathanBarker,
  'Rosie Glover': rosieGlover,
  'Patrick Greer': patrickGreer,
  'Darrell Ortega': darrellOrtega,
}

export function contactImageFor(name) {
  return CONTACT_IMAGES[name]
}
