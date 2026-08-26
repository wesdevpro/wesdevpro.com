# Buefy component list (v3.0.5, Vue 3)

Pulled from `node_modules/buefy/src/components/` in this repo. Every folder below maps to one or
more `B*` exports usable as `<b-*>` in templates thanks to the global registration in
[buefy-plugin.ts](../../../../src/app/plugins/buefy-plugin.ts).

| Folder | Typical tag(s) |
|---|---|
| autocomplete | `<b-autocomplete>` |
| breadcrumb | `<b-breadcrumb>`, `<b-breadcrumb-item>` |
| button | `<b-button>` |
| carousel | `<b-carousel>`, `<b-carousel-item>` |
| checkbox | `<b-checkbox>`, `<b-checkbox-button>` |
| clockpicker | `<b-clockpicker>` |
| collapse | `<b-collapse>` |
| colorpicker | `<b-colorpicker>` |
| datepicker | `<b-datepicker>` |
| datetimepicker | `<b-datetimepicker>` |
| dialog | programmatic — `this.$buefy.dialog` / `useBuefy()` equivalent |
| dropdown | `<b-dropdown>`, `<b-dropdown-item>` |
| field | `<b-field>` |
| icon | `<b-icon>` — see the icon-pack gotcha in `SKILL.md` |
| image | `<b-image>` |
| input | `<b-input>` |
| loading | `<b-loading>` |
| menu | `<b-menu>`, `<b-menu-item>`, `<b-menu-list>` |
| message | `<b-message>` |
| modal | `<b-modal>` |
| navbar | `<b-navbar>`, `<b-navbar-item>`, `<b-navbar-dropdown>` — used in `NavBar.vue` |
| notification | `<b-notification>` |
| numberinput | `<b-numberinput>` |
| pagination | `<b-pagination>` |
| progress | `<b-progress>` |
| radio | `<b-radio>`, `<b-radio-button>` |
| rate | `<b-rate>` |
| select | `<b-select>` |
| sidebar | `<b-sidebar>` |
| skeleton | `<b-skeleton>` |
| slider | `<b-slider>` |
| snackbar | programmatic snackbar |
| steps | `<b-steps>`, `<b-step-item>` |
| switch | `<b-switch>` |
| table | `<b-table>`, `<b-table-column>` |
| tabs | `<b-tabs>`, `<b-tab-item>` |
| tag | `<b-tag>`, `<b-taglist>` |
| taginput | `<b-taginput>` |
| timepicker | `<b-timepicker>` |
| toast | programmatic toast |
| tooltip | `<b-tooltip>` |
| upload | `<b-upload>` |

For exact props/events/slots of any of these, read the source directly rather than trusting a
generic web search — the Vue 3 rewrite's API has drifted from the old Vue 2 docs in places:

```
node_modules/buefy/src/components/<name>/
```

or the bundled type definitions in `node_modules/buefy/dist/buefy.d.ts`.
