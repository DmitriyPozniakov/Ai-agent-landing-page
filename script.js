// // Файл script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const canvas = document.createElement('canvas');
//     const container = document.querySelector('.development-container');
//     container.appendChild(canvas);
//     canvas.style.position = 'absolute';
//     canvas.style.top = '0';
//     canvas.style.left = '0';
//     canvas.style.pointerEvents = 'none';
//     canvas.style.zIndex = '1';
    
//     const circle = document.querySelector('.circle');
//     const stages = document.querySelectorAll('.stage');
    
//     function drawConnections() {
//       // Установить размеры canvas равными размерам контейнера
//       canvas.width = container.offsetWidth;
//       canvas.height = container.offsetHeight;
      
//       const ctx = canvas.getContext('2d');
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Получить позицию и размеры круга
//       const circleRect = circle.getBoundingClientRect();
//       const containerRect = container.getBoundingClientRect();
      
//       const circleX = circleRect.left + circleRect.width / 2 - containerRect.left;
//       const circleY = circleRect.top + circleRect.height / 2 - containerRect.top;
      
//       // Рисуем линии от края круга к каждому этапу
//       stages.forEach(stage => {
//         if (stage.style.display !== 'none') {
//           const stageRect = stage.getBoundingClientRect();
//           const stageX = stageRect.left - containerRect.left;
//           const stageY = stageRect.top + stageRect.height / 2 - containerRect.top;
          
//           // Определяем точку на краю круга
//           const angle = Math.atan2(stageY - circleY, stageX - circleX);
//           const radius = circleRect.width / 2;
//           const edgeX = circleX + Math.cos(angle) * radius;
//           const edgeY = circleY + Math.sin(angle) * radius;
          
//           // Рисуем линию
//           ctx.beginPath();
//           ctx.moveTo(edgeX, edgeY);
//           ctx.lineTo(stageX, stageY);
//           ctx.strokeStyle = '#e0e0e0';
//           ctx.lineWidth = 2;
//           ctx.stroke();
//         }
//       });
//     }
    
//     // Отрисовываем линии при загрузке и при изменении размера окна
//     drawConnections();
//     window.addEventListener('resize', drawConnections);
    
//     // Проверяем видимость элементов и перерисовываем линии при прокрутке
//     document.addEventListener('scroll', drawConnections);
//   });