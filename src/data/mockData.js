/**
 * Mock data for the whole dashboard.
 * The Figma file is a UI prototype only, so every list below is static
 * sample content. Swap these arrays for API calls when a backend exists.
 */

import teamJasonPrice from '../assets/images/team/jason-price.png'
import teamJukkoeSisao from '../assets/images/team/jukkoe-sisao.png'
import teamHarrietKing from '../assets/images/team/harriet-king.png'
import teamLenoraBenson from '../assets/images/team/lenora-benson.png'
import teamOliviaReese from '../assets/images/team/olivia-reese.png'
import teamBerthaValdez from '../assets/images/team/bertha-valdez.png'
import teamHarriettPayne from '../assets/images/team/harriett-payne.png'
import teamGeorgeBryant from '../assets/images/team/george-bryant.png'
import teamLilyFrench from '../assets/images/team/lily-french.png'
import teamHowardAdkins from '../assets/images/team/howard-adkins.png'
import teamEarlBowman from '../assets/images/team/earl-bowman.png'
import teamPatrickPadilla from '../assets/images/team/patrick-padilla.png'

import eventWeekendFestival from '../assets/images/events/weekend-festival.png'
import eventGlastonburyFestival from '../assets/images/events/glastonbury-festival.png'
import eventUltraEurope from '../assets/images/events/ultra-europe.png'

export const summaryStats = [
  { id: 'users', label: 'Total User', value: '40,689', icon: 'users', tint: '#8280FF', change: '8.5%', direction: 'up', note: 'Up from yesterday' },
  { id: 'orders', label: 'Total Order', value: '10293', icon: 'box', tint: '#FEC53D', change: '1.3%', direction: 'up', note: 'Up from past week' },
  { id: 'sales', label: 'Total Sales', value: '$89,000', icon: 'chart', tint: '#4AD991', change: '4.3%', direction: 'down', note: 'Down from yesterday' },
  { id: 'pending', label: 'Total Pending', value: '2040', icon: 'clock', tint: '#FF9066', change: '1.8%', direction: 'up', note: 'Up from yesterday' },
]

// Sales Details line chart (x = customers reached, y = % of target).
export const salesDetails = [
  { x: '5k', value: 20 }, { x: '10k', value: 30 }, { x: '15k', value: 45 },
  { x: '20k', value: 88 }, { x: '25k', value: 42 }, { x: '30k', value: 55 },
  { x: '35k', value: 22 }, { x: '40k', value: 24 }, { x: '45k', value: 72 },
  { x: '50k', value: 58 }, { x: '55k', value: 62 }, { x: '60k', value: 66 },
]

export const revenueData = [
  { x: '5k', sales: 30, profit: 42 }, { x: '10k', sales: 33, profit: 65 },
  { x: '15k', sales: 30, profit: 38 }, { x: '20k', sales: 32, profit: 30 },
  { x: '25k', sales: 52, profit: 34 }, { x: '30k', sales: 44, profit: 46 },
  { x: '35k', sales: 88, profit: 32 }, { x: '40k', sales: 40, profit: 55 },
  { x: '45k', sales: 72, profit: 30 }, { x: '50k', sales: 38, profit: 40 },
  { x: '55k', sales: 46, profit: 74 }, { x: '60k', sales: 58, profit: 86 },
]

export const salesAnalytics = [
  { year: '2015', current: 25, previous: 2 }, { year: '2016', current: 64, previous: 52 },
  { year: '2017', current: 52, previous: 30 }, { year: '2018', current: 46, previous: 30 },
  { year: '2019', current: 98, previous: 88 },
]

export const customerSplit = [
  { name: 'New Customers', value: 34249, color: '#0038FF' },
  { name: 'Repeated', value: 1420, color: '#C7D8FF' },
]

export const deals = [
  { id: 1, product: 'Apple Watch', location: '6096 Marjolaine Landing', datetime: '12.09.2019 - 12.53 PM', piece: 423, amount: '$34,295', status: 'Delivered' },
  { id: 2, product: 'Beats Headphone', location: '1234 Roberts Fork', datetime: '14.09.2019 - 09.12 AM', piece: 217, amount: '$18,540', status: 'Delivered' },
  { id: 3, product: 'Samsung A50', location: '778 Kessler Parkway', datetime: '16.09.2019 - 03.41 PM', piece: 118, amount: '$12,960', status: 'Pending' },
  { id: 4, product: 'Minimal Chair', location: '9032 Nikolaus Mount', datetime: '18.09.2019 - 11.05 AM', piece: 342, amount: '$22,115', status: 'Delivered' },
]

export const featuredProduct = {
  name: 'Beats Headphone 2019',
  price: '$89.00',
}

export const products = [
  { id: 1, name: 'Apple Watch Series 4', price: '$120.00', rating: 4, reviews: 131 },
  { id: 2, name: 'Air-Max-270', price: '$60.00', rating: 4, reviews: 64 },
  { id: 3, name: 'Minimal Chair Tool', price: '$24.59', rating: 5, reviews: 63 },
  { id: 4, name: 'Amazfit Vip', price: '$79.95', rating: 4, reviews: 42 },
  { id: 5, name: 'Gumbo Mouse', price: '$22.49', rating: 4, reviews: 87 },
  { id: 6, name: 'Camera Tripod', price: '$54.00', rating: 5, reviews: 29 },
  { id: 7, name: 'Microsoft Headsquare', price: '$190.00', rating: 4, reviews: 108 },
  { id: 8, name: "Women's Dress", price: '$640.00', rating: 5, reviews: 76 },
  { id: 9, name: 'Samsung A50', price: '$400.00', rating: 4, reviews: 51 },
]

export const productStock = [
  { id: 1, name: 'Apple Watch Series 4', category: 'Digital Product', price: '$690.00', piece: 63, colors: ['#1E1E1E', '#7C7C7C', '#F35D5D'] },
  { id: 2, name: 'Microsoft Headsquare', category: 'Digital Product', price: '$190.00', piece: 13, colors: ['#1E1E1E', '#F35D5D', '#2E5BFF', '#FFC43D'] },
  { id: 3, name: "Women's Dress", category: 'Fashion', price: '$640.00', piece: 635, colors: ['#5E2129', '#38B6FF', '#1E1E1E', '#2E5BFF'] },
  { id: 4, name: 'Samsung A50', category: 'Mobile', price: '$400.00', piece: 67, colors: ['#1B2559', '#1E1E1E', '#5E2129'] },
  { id: 5, name: 'Camera', category: 'Electronic', price: '$420.00', piece: 52, colors: ['#1B2559', '#1E1E1E', '#5E2129'] },
  { id: 6, name: 'Microsoft Headsquare', category: 'Digital Product', price: '$190.00', piece: 13, colors: ['#1E1E1E', '#F35D5D', '#2E5BFF', '#FFC43D'] },
  { id: 7, name: "Women's Dress", category: 'Fashion', price: '$640.00', piece: 635, colors: ['#5E2129', '#38B6FF', '#1E1E1E', '#2E5BFF'] },
]

export const orders = [
  { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
  { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2019', type: 'Book', status: 'Processing' },
  { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2019', type: 'Medicine', status: 'Rejected' },
  { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2019', type: 'Mobile', status: 'Completed' },
  { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2019', type: 'Watch', status: 'Processing' },
  { id: '00006', name: 'Alfred Murray', address: '543 Weimann Mountain', date: '15 Aug 2019', type: 'Medicine', status: 'Completed' },
  { id: '00007', name: 'Maggie Sullivan', address: 'New Scottieberg', date: '21 Dec 2019', type: 'Watch', status: 'Processing' },
  { id: '00008', name: 'Rosie Todd', address: 'New Jon', date: '30 Apr 2019', type: 'Medicine', status: 'On Hold' },
  { id: '00009', name: 'Dollie Hines', address: '124 Lyla Forge Suite 975', date: '09 Jan 2019', type: 'Book', status: 'In Transit' },
]

export const orderTypes = [
  'Health & Medicine', 'Book & Stationary', 'Services & Industry',
  'Fashion & Beauty', 'Home & Living', 'Electronics',
  'Mobile & Phone', 'Accessories',
]

export const orderStatuses = ['Completed', 'Processing', 'Rejected', 'On Hold', 'In Transit']

export const mailFolders = [
  { id: 'inbox', label: 'Inbox', count: 1253, icon: 'inbox' },
  { id: 'starred', label: 'Starred', count: 245, icon: 'star' },
  { id: 'sent', label: 'Sent', count: '24,532', icon: 'send' },
  { id: 'draft', label: 'Draft', count: '09', icon: 'pencil' },
  { id: 'spam', label: 'Spam', count: 14, icon: 'alert' },
  { id: 'important', label: 'Important', count: 18, icon: 'bookmark' },
  { id: 'bin', label: 'Bin', count: 9, icon: 'trash' },
]

export const mailLabels = [
  { id: 'primary', label: 'Primary', color: '#00B69B' },
  { id: 'social', label: 'Social', color: '#2E5BFF' },
  { id: 'work', label: 'Work', color: '#FFA756' },
  { id: 'friends', label: 'Friends', color: '#E93CAC' },
]

export const mails = [
  { id: 1, sender: 'Jullu Jalal', label: 'Primary', subject: 'Our Bachelor of Commerce program is ACBSP-accredited.', time: '8:38 AM', starred: false },
  { id: 2, sender: 'Minerva Barnett', label: 'Work', subject: 'Get Best Advertiser In Your Side Pocket', time: '8:13 AM', starred: false },
  { id: 3, sender: 'Peter Lewis', label: 'Friends', subject: 'Vacation Home Rental Success', time: '7:52 PM', starred: false },
  { id: 4, sender: 'Anthony Briggs', label: null, subject: 'Free Classifieds Using Them To Promote Your Stuff Online', time: '7:52 PM', starred: true },
  { id: 5, sender: 'Clifford Morgan', label: 'Social', subject: 'Enhance Your Brand Potential With Giant Advertising Blimps', time: '4:13 PM', starred: false },
  { id: 6, sender: 'Cecilia Webster', label: 'Friends', subject: 'Always Look On The Bright Side Of Life', time: '3:52 PM', starred: false },
  { id: 7, sender: 'Harvey Manning', label: null, subject: 'Curling Irons Are As Individual As The Women Who Use Them', time: '2:30 PM', starred: true },
  { id: 8, sender: 'Willie Blake', label: 'Primary', subject: 'Our Bachelor of Commerce program is ACBSP-accredited.', time: '8:38 AM', starred: false },
  { id: 9, sender: 'Minerva Barnett', label: 'Work', subject: 'Get Best Advertiser In Your Side Pocket', time: '8:13 AM', starred: false },
  { id: 10, sender: 'Fanny Weaver', label: null, subject: 'Free Classifieds Using Them To Promote Your Stuff Online', time: '7:52 PM', starred: true },
  { id: 11, sender: 'Olga Hogan', label: 'Social', subject: 'Enhance Your Brand Potential With Giant Advertising Blimps', time: '4:13 PM', starred: false },
  { id: 12, sender: 'Lora Houston', label: 'Friends', subject: 'Vacation Home Rental Success', time: '7:52 PM', starred: false },
]

export const mailThread = [
  { id: 1, from: 'them', time: '6.30 pm', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
  { id: 2, from: 'me', time: '6.34 pm', text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.' },
  { id: 3, from: 'them', time: '6.38 pm', text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default." },
]

export const pricingPlans = [
  {
    id: 'basic', name: 'Basic', price: '$14.99', highlight: false,
    features: [
      { label: 'Free Setup', included: true },
      { label: 'Bandwidth Limit 10 GB', included: true },
      { label: '20 User Connection', included: true },
      { label: 'Analytics Report', included: false },
      { label: 'Public API Access', included: false },
      { label: 'Plugins Intregation', included: false },
      { label: 'Custom Content Management', included: false },
    ],
  },
  {
    id: 'standard', name: 'Standard', price: '$49.99', highlight: false,
    features: [
      { label: 'Free Setup', included: true },
      { label: 'Bandwidth Limit 10 GB', included: true },
      { label: '20 User Connection', included: true },
      { label: 'Analytics Report', included: true },
      { label: 'Public API Access', included: true },
      { label: 'Plugins Intregation', included: false },
      { label: 'Custom Content Management', included: false },
    ],
  },
  {
    id: 'premium', name: 'Premium', price: '$89.99', highlight: true,
    features: [
      { label: 'Free Setup', included: true },
      { label: 'Bandwidth Limit 10 GB', included: true },
      { label: '20 User Connection', included: true },
      { label: 'Analytics Report', included: true },
      { label: 'Public API Access', included: true },
      { label: 'Plugins Intregation', included: true },
      { label: 'Custom Content Management', included: true },
    ],
  },
]

export const calendarEvents = [
  { id: 1, title: 'Design Conference', host: 'Zillul Design Agency', when: 'Today 07:19 AM', address: '56 Davion Mission Suite 157', place: 'Meaghanberg', guests: 15, day: 3, span: 1, color: '#6226EF' },
  { id: 2, title: 'Weekend Festival', host: 'Sound Republic', when: '16 October 2019 at 5.00 PM', address: '853 Moore Flats Suite 158', place: 'Sweden', guests: 20, day: 16, span: 1, color: '#E93CAC', image: eventWeekendFestival },
  { id: 3, title: 'Glastonbury Festival', host: 'Glastonbury Ltd', when: '20-22 October 2019 at 8.00 PM', address: '646 Walter Road Apt. 571', place: 'Turks and Caicos Islands', guests: 14, day: 20, span: 3, color: '#FFA756', image: eventGlastonburyFestival },
  { id: 4, title: 'Ultra Europe 2019', host: 'Ultra Worldwide', when: '25 October 2019 at 10.00 PM', address: '506 Satterfield Tunnel Apt. 963', place: 'San Marino', guests: 42, day: 25, span: 1, color: '#2E5BFF', image: eventUltraEurope },
]

export const todoItems = [
  { id: 1, title: 'Meeting with CEO', done: false, starred: false },
  { id: 2, title: 'Pick up kids from school', done: false, starred: true },
  { id: 3, title: 'Shopping with Brother', done: false, starred: false },
  { id: 4, title: 'Review with HR', done: true, starred: false },
  { id: 5, title: "Going to Dia's School", done: false, starred: false },
  { id: 6, title: 'Check design files', done: false, starred: true },
  { id: 7, title: 'Update File', done: false, starred: false },
]

export const contacts = [
  { id: 1, name: 'Jason Price', email: 'kuhlman.jermey@yahoo.com' },
  { id: 2, name: 'Duane Dean', email: 'rusty.botsford@wilfrid.io' },
  { id: 3, name: 'Jonathan Barker', email: 'cora_haley@quinn.biz' },
  { id: 4, name: 'Rosie Glover', email: 'lockman.marques@hotmail.com' },
  { id: 5, name: 'Patrick Greer', email: 'pearlie.eichmann@trevion.net' },
  { id: 6, name: 'Darrell Ortega', email: 'chaya.shields@ferry.info' },
  { id: 7, name: 'Lily French', email: 'lucienne.herman@hotmail.com' },
  { id: 8, name: 'Howard Adkins', email: 'wiegand.leonor@herman.us' },
  { id: 9, name: 'Earl Bowman', email: 'waino_altenwerth@nicolette.tv' },
]

export const teamMembers = [
  { id: 1, name: 'Jason Price', role: 'Admin', email: 'janick_parisian@yahoo.com', avatar: teamJasonPrice },
  { id: 2, name: 'Jukkoe Sisao', role: 'CEO', email: 'sibyl_kozey@gmail.com', avatar: teamJukkoeSisao },
  { id: 3, name: 'Harriet King', role: 'CTO', email: 'nadia_block@hotmail.com', avatar: teamHarrietKing },
  { id: 4, name: 'Lenora Benson', role: 'Lead', email: 'feil.wallace@kunde.us', avatar: teamLenoraBenson },
  { id: 5, name: 'Olivia Reese', role: 'Strategist', email: 'kemmer.hattie@cremin.us', avatar: teamOliviaReese },
  { id: 6, name: 'Bertha Valdez', role: 'CEO', email: 'loraine.koelpin@tromp.io', avatar: teamBerthaValdez },
  { id: 7, name: 'Harriett Payne', role: 'Digital Marketer', email: 'nannie_west@estrella.tv', avatar: teamHarriettPayne },
  { id: 8, name: 'George Bryant', role: 'Social Media', email: 'delmer.kling@gmail.com', avatar: teamGeorgeBryant },
  { id: 9, name: 'Lily French', role: 'Strategist', email: 'lucienne.herman@hotmail.com', avatar: teamLilyFrench },
  { id: 10, name: 'Howard Adkins', role: 'CEO', email: 'wiegand.leonor@herman.us', avatar: teamHowardAdkins },
  { id: 11, name: 'Earl Bowman', role: 'Digital Marketer', email: 'waino_altenwerth@nicolette.tv', avatar: teamEarlBowman },
  { id: 12, name: 'Patrick Padilla', role: 'Social Media', email: 'octavia.nienow@gleichner.net', avatar: teamPatrickPadilla },
]

export const invoice = {
  from: { name: 'Virginia Walker', address: '9694 Krajcik Locks Suite 635' },
  to: { name: 'Austin Miller', address: 'Brookview' },
  date: '12 Nov 2019',
  dueDate: '25 Dec 2019',
  lines: [
    { id: 1, description: 'Children Toy', quantity: 2, base: 20, total: 80 },
    { id: 2, description: 'Makeup', quantity: 2, base: 50, total: 100 },
    { id: 3, description: 'Asus Laptop', quantity: 5, base: 100, total: 500 },
    { id: 4, description: 'Iphone X', quantity: 4, base: 1000, total: 4000 },
  ],
}

export const notifications = [
  { id: 1, title: 'Settings', note: 'Update Dashboard', color: '#2E5BFF' },
  { id: 2, title: 'Event Update', note: 'An event date update again', color: '#E93CAC' },
  { id: 3, title: 'Profile', note: 'Update your profile', color: '#8280FF' },
  { id: 4, title: 'Application Error', note: 'Check Your running application', color: '#EF3826' },
]

export const languages = [
  { id: 'en', label: 'English', flag: '🇬🇧', countryCode: 'gb' },
  { id: 'fr', label: 'French', flag: '🇫🇷', countryCode: 'fr' },
  { id: 'es', label: 'Spanish', flag: '🇪🇸', countryCode: 'es' },
]

export const barChartGroups = [
  { id: 'single', colors: ['#2E5BFF'], values: [72, 40, 28, 62, 50, 36, 45] },
  { id: 'stacked-teal', colors: ['#00B69B', '#B7F0E6'], values: [34, 44, 30, 40, 34, 46, 48] },
  { id: 'duo', colors: ['#FF5B29', '#2E5BFF'], values: [54, 62, 74, 48, 66, 58, 90, 42, 52, 66] },
  { id: 'stacked-pink', colors: ['#E93CAC', '#FBD3EC'], values: [38, 44, 34, 40, 36, 42, 46] },
]

export const pieCharts = [
  { id: 1, value: 25, color: '#0038FF' },
  { id: 2, value: 20, color: '#A02BFF' },
  { id: 3, value: 45, color: '#FF4B21' },
  { id: 4, value: 62, color: '#2E5BFF' },
]

export const donutCharts = [
  { id: 1, slices: [{ value: 35, color: '#00B69B' }, { value: 65, color: '#EEF1F6' }] },
  { id: 2, slices: [{ value: 45, color: '#2E5BFF' }, { value: 15, color: '#FF4B21' }, { value: 40, color: '#EEF1F6' }] },
  { id: 3, slices: [{ value: 30, color: '#FFC43D' }, { value: 35, color: '#00B69B' }, { value: 35, color: '#EEF1F6' }] },
  { id: 4, slices: [{ value: 25, color: '#FFC43D' }, { value: 25, color: '#00B69B' }, { value: 20, color: '#FF4B21' }, { value: 30, color: '#2E5BFF' }] },
]
