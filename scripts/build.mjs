import path from 'path'
import fs from 'fs'

async function build() {
  const { config } = await import('./config.mjs')
  for (const data of config) {
    const json = {};
    for (const snippet of data.snippets) {
      const buffer = await fs.promises.readFile(snippet.template)
      const content = buffer.toString();
      let body = content.split('\n')
      if (body.length > 0 && !body[body.length - 1]) {
        body = body.slice(0, body.length - 1)
      }
      json[snippet.name] = {
        prefix: snippet.prefix,
        body
      }
    }
    await fs.promises.writeFile(data.path, JSON.stringify(json, null, 2))
  }
}

build()
