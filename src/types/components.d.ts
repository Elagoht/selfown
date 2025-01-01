type ParentComponent = {
  children: React.ReactNode
}

type PageComponent<Context> = {
  params: Promise<Context>
  searchParams: Promise<Record<string, string | undefined>>
}