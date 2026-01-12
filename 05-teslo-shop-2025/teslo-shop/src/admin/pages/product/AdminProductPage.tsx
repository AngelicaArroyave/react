import { Navigate, useNavigate } from 'react-router';
import { useParams } from 'react-router';

import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import { useProduct } from '@/admin/hooks/useProduct';
import type { Product } from '@/interfaces/product.interface';
import { toast } from 'sonner';

export const AdminProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const { data: product, isLoading, isError, mutation } = useProduct(id || '')

    const title = id === 'new' ? 'Nuevo producto' : 'Editar producto'
    const subTitle =
        id === 'new'
            ? 'Aquí puedes crear un nuevo producto.'
            : 'Aquí puedes editar el producto.'

    const handleSubmitForm = async (productLike: Partial<Product>) => {
        await mutation.mutateAsync(productLike, {
            onSuccess: (data) => {
                toast.success('Producto actualizado correctamente', {
                    position: 'top-right'
                })
                navigate(`/admin/products/${data.id}`)
            },
            onError: (error) => {
                console.log("🚀 ~ handleSubmitForm ~ error:", error)
                toast.error('Error al intentar actualizar el producto')
            }
        })
    }

    if (isError) return <Navigate to='/admin/products' />

    if (isLoading) return <CustomFullScreenLoading />

    if (!product) return <Navigate to='/admin/products' />

    return <ProductForm title={title} subTitle={subTitle} product={product} isPending={mutation.isPending} onSubmit={handleSubmitForm} />
};