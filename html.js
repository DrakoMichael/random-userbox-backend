"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class html {
    static render(palavra) {
        return `
      <html lang="pt-br">
      <head>
        <title>${palavra}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    </head>
    
    <body>
      <h1>${palavra}</h1>
    </body>
    </html>
  `;
    }
}
exports.default = html;
