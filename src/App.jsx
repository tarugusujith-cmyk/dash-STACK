import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import AddContact from './pages/AddContact.jsx'
import AddEvent from './pages/AddEvent.jsx'
import AddTeamMember from './pages/AddTeamMember.jsx'
import Calendar from './pages/Calendar.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Favorites from './pages/Favorites.jsx'
import Inbox from './pages/Inbox.jsx'
import Invoice from './pages/Invoice.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import OrderLists from './pages/OrderLists.jsx'
import Pricing from './pages/Pricing.jsx'
import ProductStock from './pages/ProductStock.jsx'
import Products from './pages/Products.jsx'
import Settings from './pages/Settings.jsx'
import SignUp from './pages/SignUp.jsx'
import TablePage from './pages/TablePage.jsx'
import Team from './pages/Team.jsx'
import Todo from './pages/Todo.jsx'
import UIElements from './pages/UIElements.jsx'

export default function App() {
  return (
    <FavoritesProvider>
      <Routes>
        {/* Auth and error screens sit outside the dashboard shell. */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="orders" element={<OrderLists />} />
          <Route path="product-stock" element={<ProductStock />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="calendar/new-event" element={<AddEvent />} />
          <Route path="todo" element={<Todo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/new" element={<AddContact />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="ui-elements" element={<UIElements />} />
          <Route path="team" element={<Team />} />
          <Route path="team/new" element={<AddTeamMember />} />
          <Route path="table" element={<TablePage />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </FavoritesProvider>
  )
}
