# Lab 08: CSS animation example

A simple CSS `@keyframes` animation demo with four stages.

View the [GitHub page for this example](https://ctec3905.github.io/07-lab-css-animation-example/).

Note that animation makes processor demands, which are of special concern on mobile devices:

## Good and bad practice

This is not a good example, as it animates the background colour of the body infinitely. Here's why…

### GPU = fast, smooth

- the CSS `transform` property uses a RenderLayer so the **GPU** can do the calculations
- works for CSS `transform` property values: `translate`, `scale`, `rotate`, `opacity`

### CPU = demanding, use sparingly

- other properties need a more extensive screen redraw and 'trigger layout'
- browser 'layout' forces the **CPU** to recalculate every frame
- *never* animate other properties for mobiles or with `animation-iteration: infinite;`

So only use *animation* for simple **once-only or brief user interaction cues** (e.g. on hover) or to **attract attention** with a repeating animation triggered by some user action e.g. adding a class with style rules to:

- 'pulse' a missing form field, using `opacity` in an animation
- 'jiggle' a button to suggest clicking, using `rotate` in an animation

## References:

- **TL:DR;** Read this one if you don't read the others: [High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) (Paul Lewis and Paul Irish, HTML5 Rocks, 2013)
- Chris Coyier's original inquiry: [A Tale of Animation Performance](https://css-tricks.com/tale-of-animation-performance/) (Chris Coyier, 2012)
- Response from Paul Irish (Google Chrome team): [Why Moving Elements With Translate() Is Better Than Pos:abs Top/left](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (Paul Irish, 2012)
