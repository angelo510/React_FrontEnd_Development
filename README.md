# React Frontend
 Using  
[react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) as base  

## Some style guides
- Trailing comma is couraged
  - A lot of code changes in the beginning in the project
  - Easier to track commits with less line changes
- ESDoc coming
- Use eslint
- Stateless over stateful
- Always use redux when possible
- Ajax calls should be under 'api-'
  - Sometimes maybe not possible (?)
    - Case: code review
- Variable names should not be shortened!
  - ~~fb~~ facebook
  - ~~vcc~~ venueCarouselContainer
- Data in frontend and backend should coorelate
  - Backend model:
    - { foo_bar: bar_foo }
  - Front end:
    - { foo_bar: bar_foo }
- Only iew files end in JSX
- Commit messages:
  - \<filename> :<what changed, added, removed>    

## CSS

The main scss file is src/styles/core.scss. Any new css should be placed in one of the following sections based on its purpose. CSS for vendor libraries should also be imported here. 
  
* base - fundamental css classes used throughout the application
* ui_components - styling of components like buttons, inputs, etc. 
* components - css specific to a React component

All sizes should be defined in rem as opposed to px. 

### Vendor files

To include a vendor css file, locate the file you want to include within node_modules and import it starting with a ~. 
```scss
@import '~bootstrap/dist/css/bootstrap';
```

### Base CSS

These css classes are the fundamental building blocks that all components can utilize. These include colors, breakpoints, layout, spacing, and typography. 

#### Colors 

All colors should be placed in the $color-map in _colors.scss. Classes will be generated with the name of the color to easily control the color, background-color, and border-color properties of an element. 

* Apply a color to an element:
  ```html
  <div className="color-(name)"></div>
  ```

* Apply a background-color to an element:
  ```html
  <div className="color-bg-(name)"></div>
  ```

* Apply a border color to an element:
  ```html
  <div className="color-bd-(name)"></div>
  ```
  
* Within scss files, these classes can be extended, or references from the $color-map variable. 
  ```scss
  @extend .color-bg-white;
  border-top: 2px solid map_get($color-map, 'white');
  ```

#### Typography

Use the classes generated in _typography.scss for defining the font sizes of elements. 

- t1: font size of 3rem (48px)
- t2: font size of 1.5rem (24px)
- t3: font size of 1.25rem (20px)
- t4: default font size of 1rem (16px)
- t5: default font size of .875rem (14px)
- t6: default font size of .625rem (10px)

The font sizes are also applied to h1-h6 elements, which will have a font-weight of 700.

It also contains some utility classes around text, such as text-uc to for a text-transform of uppercase.

#### Breakpoints

The breakpoints used in the app are defined here. The mixins mobile, tablet, desktop, gt-mobile, and lt-mobile should be used when needing to apply styles to a specific screen size, rather than writing the media queries themselves.  
 
 ```scss
  .class-to-style {
    flex: 1;
  
    @include desktop {
      flex: 2;
    }
  }
  ```

#### Layout

Flexbox should be used for layout. CSS-Tricks has a great [guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). The _layout.scss file will generate classes that can be used to control layout. 

There are classes for all flex related concepts, such as container direction, horizontal alignment, and vertical alignment. There are also classes for text alignment, width and height limits, and hiding elements. 

Use the postfixes -mobile, -tablet, -desktop, -gt-mobile, -lt-desktop to describe different styles based on screen size. For example, for element to have a row layout on all screen sizes except for mobile devices, you could use the following classes: 

```scss
<div className="flex-row flex-col-mobile">text</div>
```

#### Spacing
 
To provide consistent spacing throughout the application, prefer using the classes generated in _spacing.scss rather than defining margin and padding yourself. 

The classes that are generated follow the pattern:
- fist letter: represents margin or padding
  - m: margin
  - p: padding
- second letter: where the spacing should be applied
  - a:  all
  - l: left
  - r: right
  - t: top
  - b: bottom
  - h: horizontal (left and right)
  - v: vertical (top and bottom)
- third letter: size of spacing, as defined in the size variables
  - xs: xsmall (.5rem/8px)
  - s: small (1rem/16px)
  - m: medium (2rem/32px)
  - l: large (4rem/64px)
  - xl: xlarge (7rem/112px)

Here are some examples:
- mas: applies 1rem of margin on all sides of an element
- prm: applies 2rem of padding to the right side of an element
- mhxs: applies .5rem of margin to the left and right side of an element 

Use the postfixes -mobile, -tablet, -desktop, -gt-mobile, -lt-desktop to describe different styles based on screen size.
- mas-mobile: applies 1rem of margin on all sides of an element only when the screen size is small
- pal-desktop: applies 4rem of padding on all sides of an element only when the screen size is large

## Icons

Prefer including icons by using the icons font, which can be updated using the [IcoMoon](https://icomoon.io/) app. 

### Usage 

Look at src/styles/base/__icons.scss for the list of available icons. You can control the icon size and color through the css properties font-size and color. 

* HTML:
  ```html
  <i className="icon-(name)"/>
  ```
* CSS:
  ```scss
  &:before {
    content: $icon-(name);
  }
  ```

### Updating the font files

Go to the IcoMoon app, click the 'Import Icons' button, and upload the file src/assets/icon/icomoon/selection.json. Once uploaded, you will see the current set of svg icons available in the font. To add additional icons, click the menu hamburger at the right of the set, and import any additional svg files. The icon name will default to the filename, and to change it click the pencil button to change to edit mode, then click the icon to edit the name.  

In order to use an svg in an icon font, it must only have a single color, and all strokes must be converted to outlines. See more information here: [Converting Strokes to Fills](https://icomoon.io/#docs/stroke-to-fill)

Once the set has been updated, select all the icons in the set and click 'Generate Font' at the bottom right of the screen. Click download to generate the updated font files. The generated files mentioned below should be placed in the following locations: 

* selection.json -> src/assets/icon/icomoon/selection.json
* fonts/* -> src/styles/fonts/_icons/
* Update src/styles/base/__icons.scss with the content of variables.scss and styles.scss. Ensure the paths all point to ../../fonts/_icons
