interface BreadcrumbStore {
  breadcrumbs: Breadcrumb[]

  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void
}

type Breadcrumb = {
  title: string
  href: string
}