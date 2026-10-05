import { Collapse } from './Collapse';

export default function App() {
  return <main className="page"><header><span>Reusable UI</span><h1>Компонент Collapse</h1><p>Переиспользуемый раскрывающийся блок с настраиваемыми подписями.</p></header><div className="demos">
    <article><h2>Значения по умолчанию</h2><Collapse><h3>Содержимое блока</h3><p>Здесь может находиться любой React-контент: текст, изображения или другие компоненты.</p></Collapse></article>
    <article><h2>Собственные подписи</h2><Collapse collapsedLabel="Показать подробности" expandedLabel="Скрыть подробности"><h3>Как это работает</h3><p>Состояние хранится внутри компонента, а плавная CSS-анимация меняет высоту и прозрачность области.</p></Collapse></article>
  </div></main>;
}
