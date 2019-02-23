# Kirby Read-Only Field Plugin
This field allows to display a value in the panel in a read-only fashion.

## Installation
Use one of the alternatives below.

### 1. Clone or download

1. [Clone](https://github.com/steirico/kirby-plugin-ro-field.git) or [download](https://github.com/steirico/kirby-plugin-ro-field/archive/master.zip)  this repository.
2. Unzip the archive, rename the folder to `kirby-plugin-ro-field` and place it in `site/plugins`.

**Make sure that the plugin folder structure looks like this:**

```
site/plugins/kirby-ro-field/
```

### 2. Git Submodule

If you know your way around Git, you can download this plugin as a submodule:

```
$ cd path/to/kirby
$ git submodule add https://github.com/steirico/kirby-plugin-ro-field site/plugins/kirby-plugin-ro-field
$ git submodule update --init --recursive
```
## Usage
Place the following lines in your `blueprint` in order to us the `ro field`:

```yaml
roValue:
    label: This is a read-only value
    type:  ro
```

## Licence
[MIT](https://opensource.org/licenses/MIT)
