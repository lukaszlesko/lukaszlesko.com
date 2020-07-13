---
path: /publications/engineering/python-writing-python-3-compatible-code
title: Writing Python 3 compatible code in legacy Python 2 project
description: It's 2020, but still... ;-)
contentType: publication
created: 2020-07-13
---

Sometimes on your path as a Python developer you can encounter a project in Python 2.
Below you can find a simple rules on what to remember when
you want to stay in the future and still maintain some legacy project.

## Creating new code

Include in you're modules `__init__.py`:

```python
from __future__ import absolute_import, division, print_function, unicode_literals
```

With this you can at least reduce the risk that you're Python 3 syntax
won't work in Python 2.

What does it do:

1. `print_function` - you can use `print()`
2. `division` - division `/` will work in the same way as in Python 3
3. `unicode_literals` - `"abc"` will be of type `unicode` by default, otherwise `str` in Python 2
4. `absolute_import` - all imports will be absolute by default, i.e. `import some_module` will only look for module in PYTHONPATH, to look in local path you need to do `import .some_module`

## Working with existing code

...