/// <reference types="react-scripts" />
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module 'html2pdf.js';
