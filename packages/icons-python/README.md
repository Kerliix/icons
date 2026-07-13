# kerliix-icons (Python)

Official Kerliix icon library for Python — typed SVG strings you can drop into any HTML template, web framework, or email renderer.

## Install

```bash
pip install kerliix-icons
```

## Usage

```python
from kerliix_icons import KerliixIcon, KerliixPayIcon, get_icon, list_icons

# Use a named constant directly
print(KerliixIcon)          # full <svg>…</svg> string

# Inject into an HTML template
html = f'<div class="logo">{KerliixIcon}</div>'

# Look up by name at runtime
svg = get_icon("KerliixPayIcon")

# Enumerate all icons
print(list_icons())         # ['KerliixIcon', 'KerliixIcons', 'KerliixPayIcon']
```

### Django / Jinja2

```python
# views.py / context processor
from kerliix_icons import KerliixIcon
context["kerliix_logo"] = KerliixIcon
```

```html
<!-- template -->
<div class="logo">{{ kerliix_logo|safe }}</div>
```

### FastAPI

```python
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from kerliix_icons import KerliixIcon

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
def index():
    return f"<html><body>{KerliixIcon}</body></html>"
```

## API

| Symbol | Type | Description |
|---|---|---|
| `KerliixIcon` | `str` | Kerliix lettermark SVG |
| `KerliixIcons` | `str` | Kerliix Icons product mark SVG |
| `KerliixPayIcon` | `str` | Kerliix Pay brand icon SVG |
| `get_icon(name)` | `str \| None` | Look up an SVG by name, `None` if not found |
| `list_icons()` | `list[str]` | Sorted list of all available icon names |

## License

MIT — see [LICENSE](../../LICENSE)

Kerliix logos are trademarks of Kerliix. SVG files are provided for use within the Kerliix ecosystem.
