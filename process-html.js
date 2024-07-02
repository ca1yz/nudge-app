import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// 定义路径
const distPath = path.join(process.cwd(), 'dist');
const inputHtmlPath = path.join(distPath, 'index.html');
const outputHtmlPath = path.join(distPath, 'processed-index.html');

// 读取生成的 index.html 文件
fs.readFile(inputHtmlPath, 'utf8', (err, data) => {
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

  // 将新的内容写入一个新的 HTML 文件
  fs.writeFile(outputHtmlPath, divWrapper, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the file:', err);
    } else {
      console.log(`Successfully processed HTML. Output saved to ${outputHtmlPath}`);
    }
  });
});
