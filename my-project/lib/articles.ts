import fs from "fs" //provides functions to interact with filesystem (reading, etc)
import matter from "gray-matter" //used for extracting metadata from content files (i.e., the md files)
import path from "path" //handles file path and directories
import moment from "moment" //parsing, formatting data
import { remark } from "remark" //parse and process markdown content
import html from "remark-html" //converting markdown content to html content

import type { ArticleItem } from "../types"

const articlesDirectory = path.join(process.cwd(), "articles") //store the absolute path of articles directory

