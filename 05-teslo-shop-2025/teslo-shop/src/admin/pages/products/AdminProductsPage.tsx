import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { PencilIcon, PlusIcon } from "lucide-react"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { useProducts } from "@/shop/hooks/useProducts"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading"
import { currencyFormatter } from "@/lib/currency-formatter"

export const AdminProductsPage = () => {
    const { data, isLoading } = useProducts()

    if (isLoading) return <CustomFullScreenLoading />

    return (
        <>
            <div className="flex justify-between items-center">
                <AdminTitle title="Productos" subtitle="Aquí puedes ver y administrar tus productos" />

                <div className="flex justify-end mb-10 gap-4">
                    <Link to="/admin/products/new">
                        <Button>
                            <PlusIcon />
                            Nuevo producto
                        </Button>
                    </Link>
                </div>
            </div>

            <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
                <TableHeader className="bg-linear-to-br from-blue-400 to-purple-500">
                    <TableRow>
                        <TableHead>Imagen</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Categoría</TableHead>
                        <TableHead>Inventario</TableHead>
                        <TableHead>Tallas</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <img src={product.images[0]} alt={product.title} className="w-20 h-20 object-cover rounded-md" />
                                </TableCell>
                                <TableCell>
                                    <Link className="hover:text-blue-500 hover:underline" to={`/admin/products/${product.id}`}>{product.title}</Link>
                                </TableCell>
                                <TableCell>{currencyFormatter(product.price)}</TableCell>
                                <TableCell>{product.gender}</TableCell>
                                <TableCell>{product.stock} stock</TableCell>
                                <TableCell>{product.sizes.join(', ')}</TableCell>
                                <TableCell className="text-center">
                                    <Link to={`/admin/products/${product.id}`}>
                                        <PencilIcon className="text-blue-400" />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

            <CustomPagination totalPages={data?.pages || 0} />
        </>
    )
}