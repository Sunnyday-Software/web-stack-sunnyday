---
title: "KButton"
slug: 'kbutton'
author: "Luca Faccio<luca@sunnyday.software>"
pubDate: "2024-12-04"
layout: "component-collection"
---

## KButton

Create a button with an optional action or a link. It can be configured with icons.

### Usage

```astro
---
import KButton from "@/components/buttons/KButton.astro";
function handleClick(event: MouseEvent) {
    console.log('Button clicked');
}
---

<KButton action={handleClick}>Click me</KButton>

```