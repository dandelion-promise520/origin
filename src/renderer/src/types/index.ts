export interface Product {
  id: number
  barcode: string
  category: string
  created_at: string
  location: string
  product_name: string
  shelf_life_days: number
  unit: string
  updated_at: string
}

export interface ApiResponse<T> {
  success?: boolean
  data: T
  error?: string
}
