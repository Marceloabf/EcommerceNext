import { Home, Store, Settings, Package, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export function Nav() {
  const inactiveLink = 'flex gap-1 p-1'
  const activeLink = inactiveLink + ' bg-white text-blue-900 rounded-l-lg'
  return (
    <aside className="text-white p-4 pr-0">
      <Link href={'/'} className="flex gap-1 mb-4 mr-8">
        <Store />
        Magnus Store
      </Link>
      <nav className="flex flex-col gap-2">
        <Link href={'/'} className={activeLink}>
          <Home />
          Dashboard
        </Link>
        <Link href={'/orders'} className={inactiveLink}>
          <ShoppingCart />
          Pedidos
        </Link>
        <Link href={'/products'} className={inactiveLink}>
          <Package />
          Produtos
        </Link>
        <Link href={'/settings'} className={inactiveLink}>
          <Settings />
          Configurações
        </Link>
      </nav>
    </aside>
  )
}
