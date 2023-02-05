'use strict'

const fs = require('fs')
const path = require('path')
const assert = require('assert');
const matter = require('gray-matter');

const BLOG_DIRECTORY = __dirname + "/../src/blog"

const BLOG_FRONTMATTER_KEYS = [
    "slug",
    "title",
    "date",
    "type",
    "meta_img",
    "meta_desc",
    "comments",
    "hidden",
    "tags"
]

describe('Blog Files', function () {
    it('blog directory exists', function () {
        const projectDir = fs.existsSync(BLOG_DIRECTORY)
        assert.ok(projectDir)
    });

    it('blog files should have the same frontmatter', function() {
        const fileNames = fs.readdirSync(BLOG_DIRECTORY).filter((allFilesPaths) => allFilesPaths.match(/\.md$/));
        fileNames.map((fileName) => {
            const fullPath = path.join(BLOG_DIRECTORY, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);
            
            const matterKeys = Object.keys(matterResult.data);
            
            assert.deepEqual(matterKeys, BLOG_FRONTMATTER_KEYS)
        });
    })
});