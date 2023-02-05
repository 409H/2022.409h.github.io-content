'use strict'

const fs = require('fs')
const path = require('path')
const assert = require('assert');
const matter = require('gray-matter');

const BLOG_DIRECTORY = __dirname + "/../src/blog"
const PROJECTS_DIRECTORY = __dirname + "/../src/projects"

describe('General Checks', function () {
    it('no duplicate slugs', function () {

        let allSlugs = [];
        let duplicateSlugs = [];

        [BLOG_DIRECTORY, PROJECTS_DIRECTORY].map((dirName) => {
            const fileNames = fs.readdirSync(dirName).filter((allFilesPaths) => allFilesPaths.match(/\.md$/));
            fileNames.map((fileName) => {
                const fullPath = path.join(dirName, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const matterResult = matter(fileContents);
                const { slug } = matterResult.data;

                if(allSlugs.includes(slug)) {
                    duplicateSlugs.push(slug)
                }

                allSlugs.push(slug)
            });
        })

        assert.deepEqual(duplicateSlugs, []);
    });
});