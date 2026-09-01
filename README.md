# SL Workspace

**SL Workspace** is a free, browser-first collection of 50+ practical web tools and standalone mini applications. It brings image editing, document utilities, finance tracking, productivity, developer helpers, education tools, and generators into one responsive workspace—without requiring an account or build step.

## Highlights

- Browse, search, filter, and favourite 50+ tools from one landing page.
- Switch between light and dark themes, keep quick notes, and export/restore workspace preferences as JSON.
- Use focused pop-up utilities for images, text, media, development, finance, security, converters, and learning.
- Launch 12 full-page applications for deeper workflows.
- Keep most processing and saved workspace data in the browser using `localStorage`.
- Use the suite on desktop, tablet, mobile, and smartboard-sized screens.

## Included tools

| Area | Examples |
| --- | --- |
| Image & document | Signature Maker, Social Media Sizer, Image Studio Pro, AI Background Changer, Magic AI Eraser, Collagify Studio, Invoice Generator, PDF Utility, OmniConvert Pro |
| Writing & media | Text to Handwriting, Fancy Text Generator, Text Analyzer, AI Blog Beautifier, Instrument Tuner, AeroStream Video Downloader |
| Developer & maker | Cron Builder, Embedding Vector Calculator, Robots.txt Generator, JSON/Hash Studio, 3D Print Box Calculator |
| Finance & planning | Compound Interest Calculator, Bill Splitter, Multi-Calculator, Money Manager, Income Manager, EduTrack, Currency Converter |
| Security & utilities | AES-256 text encryption, QR Code Generator, Password & UUID Generator, Username/Business Name Generator, Unit Converter, Color Palette Studio |
| Productivity & education | Task Manager, Pomodoro Timer, Quick Scratchpad, Typing Speed Test, Digital Blackboard, NutriTrack meal tracker |

## Standalone applications

The main launcher links to these full-page apps:

- Image Studio Pro (`image_compressor.html`)
- AI Background Studio (`ai_background_changer.html`)
- Magic AI Eraser Pro (`watermark_remover.html`)
- Collagify Studio (`photo_collage_maker.html`)
- AeroStream Pro (`universal_video_downloader.html`)
- AI Blog Post Beautifier (`blog_post_generator.html`)
- OmniConvert Pro (`all_in_one_file_converter.html`)
- Vault Neo Money Manager (`money_manager.html`)
- FinTrack Income Manager (`income_manager.html`)
- EduTrack (`education_expense_tracker.html`)
- Nexus Task OS (`task_manager.html`)
- NutriTrack AI (`meal_tracker.html`)

## Run locally

This is a static site—there is no package installation or build command.

1. Clone or download this repository.
2. Start any static web server in the project folder. For example:

   ```powershell
   py -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) and use the launcher.

For a quick preview, opening `index.html` directly in a modern browser also works for the core interface. A local server is recommended when testing browser features that depend on a normal web origin.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its default branch.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose the default branch, and select the **/(root)** folder.
4. Save. GitHub will publish the site at `https://<your-username>.github.io/<repository-name>/`.

The landing page is `index.html`; it is already at the project root, so no deployment build is necessary.

## Privacy and data

Most tools process files and data locally in the browser. Favourites, theme preference, scratchpad notes, and several app records are stored in the browser's `localStorage`, so clearing site data can remove them. Use each app's export or backup options where available.

Some features naturally need network access: third-party font/icon CDNs, live exchange-rate functionality, and the video-inspection/downloader workflow. Do not use third-party media tools with content you do not have permission to access or download.

## Project structure

```text
index.html                         # Main workspace and pop-up tools
*_manager.html / *_tracker.html    # Standalone finance, task, and meal apps
image_compressor.html              # Image Studio Pro
all_in_one_file_converter.html     # OmniConvert Pro
security.js                        # Shared browser-side safety helpers
_headers                           # Suggested hosting security headers
```

## Built with

- HTML, CSS, and vanilla JavaScript
- Browser APIs including Canvas, Web Crypto, Web Audio, File APIs, and `localStorage`
- CDN-hosted visual libraries and fonts where needed

## Author

Designed and developed by [Sadeepa Lakshan](https://hsadeepalakshan.github.io/portfolio/).

## License

No license file is currently included. Add a license before publishing if you want to define how others may use, modify, or redistribute the project.
