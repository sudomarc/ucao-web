#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const contentRoot = path.join(root, 'src', 'content');
const errors = [];
const jsonFiles = [];

function collectJson(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      collectJson(absolutePath);
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      jsonFiles.push(absolutePath);
    }
  }
}

collectJson(contentRoot);

const parsed = new Map();
for (const file of jsonFiles) {
  try {
    parsed.set(path.relative(root, file), JSON.parse(fs.readFileSync(file, 'utf8')));
  } catch (error) {
    errors.push(`${path.relative(root, file)}: JSON invalide — ${error.message}`);
  }
}

const newsPath = 'src/content/actualites.json';
const news = parsed.get(newsPath);
if (news) {
  if (!Array.isArray(news.items)) {
    errors.push(`${newsPath}: "items" doit être un tableau.`);
  } else {
    for (const [index, item] of news.items.entries()) {
      const prefix = `${newsPath}: items[${index}]`;
      if (!item || typeof item !== 'object') {
        errors.push(`${prefix} doit être un objet.`);
        continue;
      }
      if (typeof item.title !== 'string' || !item.title.trim()) {
        errors.push(`${prefix}.title doit être une chaîne non vide.`);
      }
      if (typeof item.date !== 'string' || !/^\\d{4}-\\d{2}-\\d{2}$/.test(item.date)) {
        errors.push(`${prefix}.date doit être au format ISO YYYY-MM-DD.`);
      } else {
        const timestamp = Date.parse(`${item.date}T00:00:00.000Z`);
        if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== item.date) {
          errors.push(`${prefix}.date n'est pas une date calendaire valide.`);
        }
      }
      if (typeof item.sourceUrl !== 'string' || !/^https?:\\/\\//.test(item.sourceUrl)) {
        errors.push(`${prefix}.sourceUrl doit être une URL HTTP(S).`);
      }
    }
  }
}

if (errors.length) {
  console.error(`Échec : ${errors.length} erreur(s) dans les contenus JSON.`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validation réussie : ${jsonFiles.length} fichiers JSON et ${news.items.length} actualité(s) contrôlés.`);
