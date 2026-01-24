import { HeaderKey } from '@renderer/layouts/app-layout/types'

export interface MenuProps {
  header: HeaderKey
  setHeader: (header: HeaderKey) => void
}
