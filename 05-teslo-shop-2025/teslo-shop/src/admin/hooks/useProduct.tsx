import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { createUpdateProductAction } from "../actions/create-update-product.action"
import { getProductByIdAction } from "../actions/get-product-by-id.action"
import type { Product } from "@/interfaces/product.interface"

export const useProduct = (id: string) => {
    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5
    })

    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: async (product: Product) => {
            await queryClient.invalidateQueries({
                queryKey: ['products']
            })
            await queryClient.invalidateQueries({
                queryKey: ['product', { id: product.id }]
            })
            queryClient.setQueryData(['products', { id: product.id }], product)
        }
    })

    // const handleSubmitForm = async (productLike: Partial<Product>) => {
    //     console.log("🚀 ~ handleSubmitForm ~ productLike:", productLike)
    // }

    return {
        ...query,
        // handleSubmitForm,
        mutation
    }
}