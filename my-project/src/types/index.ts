//defines the article type

export type ArticleItem = {
    id: string
    title: string
    date: string
    category: string
    /** Manual position within the category on /blog. Unset means "put me last". */
    sortOrder?: number | null
}