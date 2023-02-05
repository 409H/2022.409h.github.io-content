'use strict'

const fs = require('fs')
const path = require('path')
const assert = require('assert');
const matter = require('gray-matter');

const PROJECTS_DIRECTORY = __dirname + "/../src/projects"

const PROJECTS_FRONTMATTER_KEYS = [
    "slug",
    "title",
    "summary",
    "meta_img",
    "meta_desc",
    "type",
    "hidden",
    "project_url"
]

describe('Project Files', function () {
    it('projects directory exists', function () {
        const projectDir = fs.existsSync(PROJECTS_DIRECTORY)
        assert.ok(projectDir)
    });

    it('projects files should have the same frontmatter', function() {
        const fileNames = fs.readdirSync(PROJECTS_DIRECTORY).filter((allFilesPaths) => allFilesPaths.match(/\.md$/));
        fileNames.map((fileName) => {
            const fullPath = path.join(PROJECTS_DIRECTORY, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);
            
            const matterKeys = Object.keys(matterResult.data);
            
            assert.deepEqual(matterKeys, PROJECTS_FRONTMATTER_KEYS)
        });
    })
});