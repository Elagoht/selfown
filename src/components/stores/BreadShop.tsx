"use client"

import { breadcrumbStore } from '@/stores/breadcrumbs'
import { FC, useEffect } from 'react'

type BreadShopProps = {
  breadcrumbs: Breadcrumb[]
}

const BreadShop: FC<BreadShopProps> = ({ breadcrumbs }) => {
  const { setBreadcrumbs } = breadcrumbStore()

  useEffect(() => {
    setBreadcrumbs(breadcrumbs)
  }, [breadcrumbs])

  return null
}

export default BreadShop