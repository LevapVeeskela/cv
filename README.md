# CV Project

> ⭐ If you like this project, please consider starring the repository or endorsing my skills on LinkedIn!
> ⭐ Если проект оказался полезен, буду рад вашей звезде на GitHub или подтверждению моих навыков в LinkedIn!

## English
A web application for creating and editing a CV (resume) with export/import in JSON format and PDF saving.

### Main Features
- View and edit all CV sections (main info, contacts, skills, languages, education, work history, interests).
- Editing is available via the **Edit CV** button — a modal form opens for all data.
- All changes are saved in real time and reflected in the CV preview.

### Import & Export JSON
- To export your data, use the **Export JSON** button in the edit modal — a file with your data will be downloaded.
- To import, use the **Import JSON** button at the top of the page — select a previously saved file and your CV data will be loaded into the form.

### PDF Saving
- Use the **Download PDF** button to save your CV as a PDF.
- Note: PDF layout depends on browser window width:
  - **Wide screen** (desktop): PDF will have two columns (as in preview).
  - **Narrow screen** (mobile/small window): PDF will be single-column (mobile format).
- For best results, maximize your browser window before saving as PDF.

### Quick Start
1. Install dependencies: `npm install` or `yarn install`
2. Start the project: `npm run start` or `yarn start`
3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Notes
- All data is stored only in your browser.
- To fill out your CV, use the **Edit CV** button and make changes in the modal form.
- After editing, save changes with the **Apply** button.

### Deploy to Your Own GitHub Pages

#### 1. Fork the Project
- Click the **Fork** button on the top right of the repository page on GitHub.
- Clone your fork to your local machine:
  ```sh
  git clone https://github.com/your-username/cv.git
  ```

#### 2. Change the Homepage
- Open `package.json` and change the `homepage` field to match your GitHub Pages URL:
  ```json
  "homepage": "https://your-username.github.io/cv"
  ```
  Replace `your-username` with your GitHub username.

#### 3. Build and Deploy
- Install dependencies:
  ```sh
  npm install
  ```
- Build the project:
  ```sh
  npm run build
  ```
- Deploy to GitHub Pages:
  ```sh
  npm run deploy
  ```

After deployment, your CV app will be available at `https://your-username.github.io/cv`.

---

## Русский
Веб-приложение для создания и редактирования резюме (CV) с возможностью экспорта и импорта данных в формате JSON, а также сохранения в PDF.

### Основной функционал
- Просмотр и редактирование всех разделов резюме (основная информация, контакты, навыки, языки, образование, опыт работы, интересы).
- Редактирование осуществляется через кнопку **Edit CV** — открывается модальное окно с формой для всех данных.
- Все изменения сохраняются в реальном времени и применяются к предпросмотру резюме.

### Импорт и экспорт JSON
- Для экспорта текущих данных используйте кнопку **Export JSON** в окне редактирования — будет скачан файл с вашими данными.
- Для импорта используйте кнопку **Import JSON** в верхней части страницы — выберите ранее сохранённый файл, и данные резюме будут загружены в форму.

### Сохранение в PDF
- Для сохранения резюме в PDF используйте кнопку **Download PDF**.
- Важно: внешний вид PDF зависит от ширины окна браузера:
  - **На широком экране** (десктоп): PDF будет содержать две колонки (как на предпросмотре).
  - **На узком экране** (мобильный/маленькое окно): PDF будет в одноколоночном мобильном формате.
- Для лучшего результата перед сохранением PDF рекомендуется развернуть окно браузера на весь экран.

### Быстрый старт
1. Установите зависимости: `npm install` или `yarn install`
2. Запустите проект: `npm run start` или `yarn start`, также сбилженную версию можно посмотреть через `yarn preview`
3. Откройте [http://localhost:5173](http://localhost:5173) в браузере

### Примечания
- Все данные хранятся только в браузере пользователя.
- Для заполнения резюме используйте кнопку **Edit CV** и внесите нужные изменения в открывшейся форме.
- После редактирования не забудьте сохранить изменения через кнопку **Apply**.

### Деплой на свою страницу GitHub Pages

#### 1. Форкните проект
- Нажмите кнопку **Fork** в правом верхнем углу репозитория на GitHub.
- Клонируйте свой форк на локальный компьютер:
  ```sh
  git clone https://github.com/ваш-логин/cv.git
  ```

#### 2. Измените поле homepage
- Откройте `package.json` и измените поле `homepage` на адрес вашей будущей страницы:
  ```json
  "homepage": "https://ваш-логин.github.io/cv"
  ```
  Замените `ваш-логин` на ваш логин GitHub.

#### 3. Сборка и деплой
- Установите зависимости:
  ```sh
  npm install
  ```
- Соберите проект:
  ```sh
  npm run build
  ```
- Задеплойте на GitHub Pages:
  ```sh
  npm run deploy
  ```

После деплоя ваше резюме будет доступно по адресу `https://ваш-логин.github.io/cv`.
