import { create } from "zustand"

export const breadcrumbStore = create<BreadcrumbStore>((set) => ({
  breadcrumbs: [],

  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs })
}))