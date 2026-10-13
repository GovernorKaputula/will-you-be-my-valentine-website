# A little love note

A personal Valentine page built around the original photographs and “Hai, HotChick” greeting. A warm paper background, taped photo and burgundy typography make the page feel like a handwritten keepsake.

[Open the Valentine website](https://governorkaputula.github.io/will-you-be-my-valentine-website/)

## Preview

```sh
python -m http.server 4176 --bind 127.0.0.1
```

Open `http://127.0.0.1:4176`. No install or build step is required.

## Interactions

- **Yes, of course** opens a celebration, changes the photograph and moves keyboard focus to the answer.
- **Not this time** opens a considerate alternative answer. Both buttons work with touch and keyboard.
- **Read the note again** resets the message, image and controls without reloading.
- Heart effects are finite, cleared before replay and stopped when the page is hidden. Reduced-motion preferences disable them.
- Mobile layouts scroll naturally and allow zoom. There are no duplicate element IDs or buttons that escape the screen.

Responses stay in the current browser page. They are not stored or sent to anyone. There is no analytics, RSVP backend or external messaging. Google Fonts provides typography; system fonts act as fallbacks.

## Edit

`index.html` contains the greeting and initial note; `script.js` contains answer messages. `style.css` handles layout and animation. The original `valentine.jpg` and `valentine2.jpg` files are retained.

The repository and website are public. GitHub Pages serves the repository root from `main`. The page retains a `noindex` directive to discourage search indexing; anyone with the link can open it without signing in.

## Checks

```sh
node --check script.js
python tests/check_site.py
```

GitHub Actions checks JavaScript syntax and guards against missing local assets, duplicate IDs and broken fragment links. Browser checks cover both answers, replay, keyboard focus and narrow-screen layout.

By Kenneth Gondwe Kaputula. Personal photographs remain with their respective owners.
