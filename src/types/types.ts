// Определяем типы для разных значений
type HtmlContent = 
  | { type: 'title'; content: string }
  | { type: 'ava'; content: string }
  | { type: 'subTitle'; content: string }
  | { type: 'text'; content: string }

// Интерфейс для элемента HTML
export interface HtmlElementI {
  id: string;
  content: HtmlContent;
}