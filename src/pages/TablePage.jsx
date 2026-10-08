import OrdersTable from '../components/OrdersTable.jsx'
import PageTitle from '../components/PageTitle.jsx'
import StockTable from '../components/StockTable.jsx'
import { orders, productStock } from '../data/mockData.js'

export default function TablePage() {
  return (
    <>
      <PageTitle>Table</PageTitle>

      <section className="panel p-0">
        <OrdersTable rows={orders.slice(0, 6)} dateOverride="14 Feb 2019" />
      </section>

      <section className="panel mt-6 p-0">
        <StockTable rows={productStock} />
      </section>
    </>
  )
}
