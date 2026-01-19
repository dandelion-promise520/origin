import { ApiResponse, Product } from '@renderer/types'
import { instance } from '../request'

export const getProduct = (params?: string): Promise<ApiResponse<Product[]>> => {
  return instance.get(params ? `/product?search=${params}` : `/product`)
}
