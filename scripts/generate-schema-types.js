import fs from "fs";
import path from "path";
import { compileFromFile } from "json-schema-to-typescript";
import chokidar from "chokidar";

async function convertSchemaToType(file) {
  try {
    const ts = await compileFromFile(file);
    fs.writeFileSync(
      path.join(path.dirname(file), path.basename(file, ".json") + ".d.ts"),
      ts
    );
    console.log(`Конвертировано: ${file}`);
  } catch (error) {
    console.error(`Ошибка при конвертации файла ${file}:`, error);
  }
}

function watchSchemas(relativePath) {
  const directory = path.join(process.cwd(), relativePath);

  const watcher = chokidar.watch(path.join(directory, "*.json"), {
    ignored: /^\./,
    persistent: true,
    ignoreInitial: false,
  });

  watcher
    .on("add", async (file) => {
      console.log(`Найден новый файл: ${file}`);
      await convertSchemaToType(file);
    })
    .on("change", async (file) => {
      console.log(`Обнаружены изменения в файле: ${file}`);
      await convertSchemaToType(file);
    });
}

// Использование аргумента командной строки для указания относительного пути
const relativePath = process.argv[2];
watchSchemas(relativePath);