"use strict";
(self.webpackChunkformulario = self.webpackChunkformulario || []).push([
  [57],
  {
    660: () => {
      document.addEventListener("DOMContentLoaded", () => {
        !(function () {
          const e = document.getElementById("survey-form"),
            t = document.getElementById("message-container");
          e.addEventListener("submit", (n) => {
            n.preventDefault();
            const o = document.getElementById("name").value,
              c = document.getElementById("email").value,
              l = document.getElementById("number").value,
              u = document.getElementById("dropdown").value,
              d = document.querySelectorAll('input[name="choice"]:checked'),
              m = document.querySelectorAll('input[type="checkbox"]:checked'),
              r = document.getElementById("comments").value;
            o && c && l && u && d && m.length > 0 && r
              ? ((t.textContent = "FORMULARIO ENVIADO CON ÉXITO"),
                (t.style.color = "green"),
                e.reset())
              : ((t.textContent =
                  "Por favor, complete todos los campos requeridos."),
                (t.style.color = "red"));
          });
        })();
      });
    },
  },
  (e) => {
    e((e.s = 660));
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJnR0FFQUEsU0FBU0MsaUJBQWlCLG9CQUFvQixNQ0YvQixXQUNiLE1BQU1DLEVBQU9GLFNBQVNHLGVBQWUsZUFDL0JDLEVBQW1CSixTQUFTRyxlQUFlLHFCQUVqREQsRUFBS0QsaUJBQWlCLFVBQVdJLElBQy9CQSxFQUFNQyxpQkFFTixNQUFNQyxFQUFPUCxTQUFTRyxlQUFlLFFBQVFLLE1BQ3ZDQyxFQUFRVCxTQUFTRyxlQUFlLFNBQVNLLE1BQ3pDRSxFQUFNVixTQUFTRyxlQUFlLFVBQVVLLE1BQ3hDRyxFQUFXWCxTQUFTRyxlQUFlLFlBQVlLLE1BQy9DSSxFQUFlWixTQUFTYSxpQkFBaUIsZ0NBQ3pDQyxFQUFhZCxTQUFTYSxpQkFBaUIsa0NBQ3ZDRSxFQUFXZixTQUFTRyxlQUFlLFlBQVlLLE1BRWpERCxHQUFRRSxHQUFTQyxHQUFPQyxHQUFZQyxHQUFnQkUsRUFBV0UsT0FBUyxHQUFLRCxHQUMvRVgsRUFBaUJhLFlBQWMsK0JBQy9CYixFQUFpQmMsTUFBTUMsTUFBUSxRQUMvQmpCLEVBQUtrQixVQUVMaEIsRUFBaUJhLFlBQWMsbURBQy9CYixFQUFpQmMsTUFBTUMsTUFBUSxNQUNqQyxHQUVKLENEckJFRSxFQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9zcmMvanMvbW9kdWxlcy9mb3JtSGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0dXBGb3JtSGFuZGxlciBmcm9tICcuL2pzL21vZHVsZXMvZm9ybUhhbmRsZXIuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBzZXR1cEZvcm1IYW5kbGVyKCk7IC8vIGNvbmZpZ3VyYXIgZWwgbGlzdGVuZXIgZGVsIGZvcm11bGFyaW9cbn0pOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwRm9ybUhhbmRsZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VydmV5LWZvcm0nKTtcbiAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvbnRhaW5lcicpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWU7XG4gICAgY29uc3QgYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlcicpLnZhbHVlO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duJykudmFsdWU7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImNob2ljZVwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMnKS52YWx1ZTtcblxuICAgIGlmIChuYW1lICYmIGVtYWlsICYmIGFnZSAmJiBkcm9wZG93biAmJiByYWRpb0J1dHRvbnMgJiYgY2hlY2tib3hlcy5sZW5ndGggPiAwICYmIGNvbW1lbnRzKSB7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0ZPUk1VTEFSSU8gRU5WSUFETyBDT04gw4lYSVRPJztcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAnZ3JlZW4nOyAvLyBFc3RpbG8gcGFyYSBlbCBtZW5zYWplIGRlIMOpeGl0b1xuICAgICAgZm9ybS5yZXNldCgpOyAvLyBPcGNpb25hbDogUmVzZXRlYSBlbCBmb3JtdWxhcmlvIGRlc3B1w6lzIGRlIGVudmlhcmxvXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSAnUG9yIGZhdm9yLCBjb21wbGV0ZSB0b2RvcyBsb3MgY2FtcG9zIHJlcXVlcmlkb3MuJztcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAncmVkJzsgLy8gRXN0aWxvIHBhcmEgZWwgbWVuc2FqZSBkZSBlcnJvclxuICAgIH1cbiAgfSk7XG59Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIm1lc3NhZ2VDb250YWluZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJhZ2UiLCJkcm9wZG93biIsInJhZGlvQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveGVzIiwiY29tbWVudHMiLCJsZW5ndGgiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiY29sb3IiLCJyZXNldCIsInNldHVwRm9ybUhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9
