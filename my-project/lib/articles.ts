//this file contains functions to get all the articles and categorised articles

import fs from "fs" //provides functions to interact with filesystem (reading, etc)
import matter from "gray-matter" //used for extracting metadata from content files (i.e., the md files)
import path from "path" //handles file path and directories
import moment from "moment" //parsing, formatting data
import { remark } from "remark" //parse and process markdown content
import html from "remark-html" //converting markdown content to html content

import type { ArticleItem } from "../src/types" //import the ArticleItem type from types/index.ts
import { title } from "process"

const articlesDirectory = path.join(process.cwd(), "articles") //store the absolute path of articles directory


//function to get all the articles, sorted by date
const getSortedArticles = (): ArticleItem[] => {
    //get all the file names in the articles directory
    const fileNames = fs.readdirSync(articlesDirectory) 

    //map through all the file names and get the metadata of each article
    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "") //remove the .md extension

        const fullPath = path.join(articlesDirectory, fileName) //get the full path of the article
        const fileContents = fs.readFileSync(fullPath, "utf8") //read the content of the article
    
        const matterResult = matter(fileContents) //extract metadata from the content

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            category: matterResult.data.category,
        }
    })

    //sort the articles by date
    return allArticlesData.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateA = moment(a.date, format)
        const dateB = moment(b.date, format)
        if (dateA.isBefore(dateB)) {
            return -1
        } else if (dateA.isAfter(dateB)) {
            return 1
        } else { 
            return 0
        }
    })
}

//function to get all the articles by category
export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles()
    const categorisedArticles: Record<string, ArticleItem[]> = {}

    sortedArticles.forEach((article) => {
        if (!categorisedArticles[article.category]) {
            categorisedArticles[article.category] = []
        }
        categorisedArticles[article.category].push(article)
    })

    return categorisedArticles

}

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)
    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do, YYYY")
    }
}