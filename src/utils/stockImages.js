import appleWatch from '../assets/images/stock-apple-watch.png'
import camera from '../assets/images/stock-camera.png'
import microsoftHeadsquare from '../assets/images/stock-microsoft-headsquare.png'
import samsungA50 from '../assets/images/stock-samsung-a50.png'
import womensDress from '../assets/images/stock-womens-dress.png'

/**
 * Real product-stock photos, keyed by the exact product name used in
 * mockData.productStock. Looked up by name so both repeated rows
 * (Microsoft Headsquare, Women's Dress each appear twice) get the
 * same photo automatically.
 */
const STOCK_IMAGES = {
  'Apple Watch Series 4': appleWatch,
  'Microsoft Headsquare': microsoftHeadsquare,
  "Women's Dress": womensDress,
  'Samsung A50': samsungA50,
  Camera: camera,
}

export function stockImageFor(name) {
  return STOCK_IMAGES[name]
}
