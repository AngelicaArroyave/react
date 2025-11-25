import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { PlusIcon } from "lucide-react"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"

export const AdminProductsPage = () => {
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
                        <TableHead className="text-center">ID</TableHead>
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
                    <TableRow>
                        <TableCell className="font-medium text-center">1</TableCell>
                        <TableCell>
                            <img src="https://placehold.co/250x250" alt="Producto" className="w-20 h-20 object-cover rounded-md" />
                        </TableCell>
                        <TableCell>Producto 1</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>Categoría 1</TableCell>
                        <TableCell>100 stock</TableCell>
                        <TableCell>XS, S, L</TableCell>
                        <TableCell className="text-right">
                            <Link to={`/admin/products/t-shirt-teslo`}>Editar</Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <CustomPagination totalPages={10} />
        </>
    )
}