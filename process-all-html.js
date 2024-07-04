// process-html.js
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// 定义路径
const distPath = path.join(process.cwd(), 'dist');
const newOutputDir = path.join(process.cwd(), 'new-dist'); // 新的输出目录

// 创建新的输出目录（如果不存在）
if (!fs.existsSync(newOutputDir)) {
  fs.mkdirSync(newOutputDir, { recursive: true });
}

// 递归查找所有 .html 文件
const findHtmlFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
};

// 处理每个 .html 文件
const processHtmlFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // 使用 JSDOM 解析 HTML
    const dom = new JSDOM(data);
    const document = dom.window.document;

    // 提取 head 和 body 内容
    const headContent = document.head.innerHTML;
    const bodyContent = document.body.innerHTML;

    // 创建一个新的 div 包装 head 和 body 内容
    const divWrapper = `
      <div style="display:none;">
        ${headContent}
      </div>
      ${bodyContent}
    `;

    // 生成新的输出路径
    const relativePath = path.relative(distPath, filePath);
    const newFilePath = path.join(newOutputDir, relativePath);

    // 确保新输出路径的目录存在
    const newDir = path.dirname(newFilePath);
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir, { recursive: true });
    }

    // 将新的内容写入一个新的 HTML 文件
    fs.writeFile(newFilePath, divWrapper, 'utf8', (err) => {
      if (err) {
        console.error('Error writing the file:', err);
      } else {
        console.log(`Successfully processed HTML. Output saved to ${newFilePath}`);
      }
    });
  });
};

// 查找所有符合条件的 .html 文件并处理
const htmlFiles = findHtmlFiles(distPath);
htmlFiles.forEach((filePath) => processHtmlFile(filePath));
